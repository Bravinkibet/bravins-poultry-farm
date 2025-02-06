from flask import Blueprint, request, jsonify
from database import db
from models import Product

product_bp = Blueprint('product', __name__)

@product_bp.route('/', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([{'id': p.id, 'name': p.name, 'category': p.category, 'price': p.price, 'stock': p.stock, 'available': p.available} for p in products])

@product_bp.route('/add', methods=['POST'])
def add_product():
    data = request.json
    new_product = Product(name=data['name'], category=data['category'], price=data['price'], stock=data['stock'], available=data['available'])
    db.session.add(new_product)
    db.session.commit()
    return jsonify({'message': 'Product added successfully'}), 201
