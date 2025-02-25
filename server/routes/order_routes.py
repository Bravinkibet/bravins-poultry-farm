# src/order_routes.py
from flask import Blueprint, request, jsonify
from database import db
from models import Order

order_bp = Blueprint('order', __name__)

@order_bp.route('/create', methods=['POST'])
def create_order():
    try:
        data = request.get_json()
        if not data:
            return jsonify({'message': 'No order data provided'}), 400

        new_order = Order(
            user_id=data.get('user_id'),
            product_id=data.get('product_id'),
            quantity=data.get('quantity'),
            details=data
        )
        db.session.add(new_order)
        db.session.commit()
        return jsonify({'message': 'Order placed successfully'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'Error placing order', 'error': str(e)}), 500
