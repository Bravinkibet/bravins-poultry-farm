# src/product_routes.py
from flask import Blueprint, request, jsonify
from database import db
from models import Product

product_bp = Blueprint('product', __name__)

@product_bp.route('/', methods=['GET'])
def get_products():
    try:
        products = Product.query.all()
        products_data = [
            {
              'id': p.id, 
              'name': p.name, 
              'category': p.category, 
              'price': p.price, 
              'stock': p.stock, 
              'available': p.available
            }
            for p in products
        ]
        return jsonify(products_data), 200
    except Exception as e:
        return jsonify({'message': 'Error fetching products', 'error': str(e)}), 500

@product_bp.route('/add', methods=['POST'])
def add_product():
    try:
        data = request.get_json()
        new_product = Product(
            name=data['name'], 
            category=data['category'], 
            price=data['price'], 
            stock=data['stock'], 
            available=data['available']
        )
        db.session.add(new_product)
        db.session.commit()
        return jsonify({'message': 'Product added successfully'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'Error adding product', 'error': str(e)}), 500
