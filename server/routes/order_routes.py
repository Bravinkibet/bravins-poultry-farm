from flask import Blueprint, request, jsonify
from database import db
from models import Order

order_bp = Blueprint('order', __name__)

@order_bp.route('/create', methods=['POST'])
def create_order():
    data = request.json
    new_order = Order(user_id=data['user_id'], product_id=data['product_id'], quantity=data['quantity'])
    db.session.add(new_order)
    db.session.commit()
    return jsonify({'message': 'Order placed successfully'}), 201
