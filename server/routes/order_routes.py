# src/routes/order_routes.py
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
            totalPrice=data.get('totalPrice', 0),
            details=data
        )
        db.session.add(new_order)
        db.session.commit()
        return jsonify({'message': 'Order placed successfully'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'Error placing order', 'error': str(e)}), 500

@order_bp.route('/', methods=['GET'])
def get_all_orders():
    try:
        orders = Order.query.all()
        orders_list = []
        for order in orders:
            orders_list.append({
                'id': order.id,
                'user_id': order.user_id,
                'product_id': order.product_id,
                'quantity': order.quantity,
                'totalPrice': order.totalPrice,
                'status': order.status,
                'ordered_at': order.ordered_at.isoformat() if order.ordered_at else None,
            })
        return jsonify(orders_list), 200
    except Exception as e:
        return jsonify({'message': 'Error fetching orders', 'error': str(e)}), 500

@order_bp.route('/<int:order_id>', methods=['PUT'])
def update_order(order_id):
    try:
        data = request.get_json()
        order = Order.query.get(order_id)
        if not order:
            return jsonify({'message': 'Order not found'}), 404
        order.status = data.get('status', order.status)
        order.totalPrice = data.get('totalPrice', order.totalPrice)
        db.session.commit()
        return jsonify({'message': 'Order updated successfully'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'Error updating order', 'error': str(e)}), 500

@order_bp.route('/<int:order_id>', methods=['DELETE'])
def delete_order(order_id):
    try:
        order = Order.query.get(order_id)
        if not order:
            return jsonify({'message': 'Order not found'}), 404
        db.session.delete(order)
        db.session.commit()
        return jsonify({'message': 'Order deleted successfully'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'Error deleting order', 'error': str(e)}), 500
