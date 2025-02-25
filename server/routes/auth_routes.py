# src/routes/auth_routes.py
from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
from flask_mail import Message
from werkzeug.security import generate_password_hash, check_password_hash
import secrets
from datetime import datetime, timedelta
from database import db
from models import User

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
@cross_origin()
def register():
    try:
        data = request.get_json()
        if not data:
            return jsonify({'message': 'No input data provided'}), 400

        hashed_password = generate_password_hash(data['password'])
        new_user = User(
            username=data['username'], 
            email=data['email'], 
            password_hash=hashed_password, 
            location=data['location']
        )
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'User registered successfully'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'Error registering user', 'error': str(e)}), 500


@auth_bp.route('/login', methods=['POST'])
@cross_origin()
def login():
    try:
        data = request.get_json()
        if not data:
            return jsonify({'message': 'No input data provided'}), 400

        user = User.query.filter_by(email=data['email']).first()
        if user and check_password_hash(user.password_hash, data['password']):
            return jsonify({'message': 'Login successful', 'user_id': user.id}), 200
        else:
            return jsonify({'message': 'Invalid credentials'}), 401
    except Exception as e:
        return jsonify({'message': 'Error during login', 'error': str(e)}), 500


@auth_bp.route('/forgot-password', methods=['POST', 'OPTIONS'])
@cross_origin()
def forgot_password():
    data = request.get_json()
    if not data or 'email' not in data:
        return jsonify({'message': 'Email is required'}), 400

    email = data['email']
    user = User.query.filter_by(email=email).first()

    # Always return a generic message to avoid email enumeration
    if not user:
        return jsonify({'message': 'If that email is in our system, a reset link will be sent.'}), 200

    # Generate a secure token and set expiration (1 hour)
    token = secrets.token_urlsafe(32)
    expires_at = datetime.utcnow() + timedelta(hours=1)

    user.reset_token = token
    user.reset_token_expires = expires_at
    db.session.commit()

    # Import mail instance from app (avoid circular import)
    from app import mail

    # Construct the reset link. Adjust the domain/port as needed.
    reset_link = f"http://127.0.0.1:3000/reset-password?token={token}"
    
    msg = Message("Reset Your Password",
                  recipients=[user.email])
    msg.body = (
        f"Hi {user.username},\n\n"
        f"To reset your password, please click the following link:\n{reset_link}\n\n"
        f"This link will expire in 1 hour.\n\n"
        "If you did not request a password reset, please ignore this email."
    )
    try:
        mail.send(msg)
    except Exception as e:
        # Log the email error; you might want to integrate proper logging
        print("Mail sending error:", e)

    return jsonify({'message': 'If that email is in our system, a reset link will be sent.'}), 200


@auth_bp.route('/reset-password', methods=['POST', 'OPTIONS'])
@cross_origin()
def reset_password():
    data = request.get_json()
    token = data.get('token')
    new_password = data.get('new_password')

    if not token or not new_password:
        return jsonify({'message': 'Token and new_password are required'}), 400

    user = User.query.filter_by(reset_token=token).first()
    if not user:
        return jsonify({'message': 'Invalid or expired token'}), 400

    if not user.reset_token_expires or user.reset_token_expires < datetime.utcnow():
        return jsonify({'message': 'Token has expired'}), 400

    # Update the password and invalidate the token
    user.password_hash = generate_password_hash(new_password)
    user.reset_token = None
    user.reset_token_expires = None
    db.session.commit()

    return jsonify({'message': 'Password reset successful'}), 200
