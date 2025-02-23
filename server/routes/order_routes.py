from flask import Blueprint, request, jsonify
from database import db
from models import Order

order_bp = Blueprint('order', __name__)

@order_bp.route('/create', methods=['POST'])
def create_order():
    data = request.json
    # Create a new order using quantity and store all details in 'details'
    new_order = Order(
        # Optionally, if your frontend later sends a user_id or product_id, you can store those here.
        user_id=data.get('user_id'),
        product_id=data.get('product_id'),
        quantity=data.get('quantity'),
        details=data  # Store the entire JSON payload
    )
    db.session.add(new_order)
    db.session.commit()
    return jsonify({'message': 'Order placed successfully'}), 201
