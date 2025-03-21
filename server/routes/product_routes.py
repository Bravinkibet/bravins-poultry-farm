# src/routes/product_routes.py
from flask import Blueprint, request, jsonify
from database import db
from models import Product

product_bp = Blueprint('product', __name__)

@product_bp.route('/', methods=['GET'])
def get_products():
    try:
        products = Product.query.all()
        products_data = [{
            'id': p.id,
            'name': p.name,
            'category': p.category,
            'price': p.price,
            'stock': p.stock,
            'age': p.age,
            'available': p.available
        } for p in products]
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
            age=data.get('age', None),
            available=data['available']
        )
        db.session.add(new_product)
        db.session.commit()
        return jsonify({'message': 'Product added successfully'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'Error adding product', 'error': str(e)}), 500

@product_bp.route('/<int:product_id>', methods=['PUT'])
def update_product(product_id):
    try:
        data = request.get_json()
        product = Product.query.get(product_id)
        if not product:
            return jsonify({'message': 'Product not found'}), 404
        product.name = data.get('name', product.name)
        product.category = data.get('category', product.category)
        product.price = data.get('price', product.price)
        product.stock = data.get('stock', product.stock)
        product.age = data.get('age', product.age)
        product.available = data.get('available', product.available)
        db.session.commit()
        return jsonify({'message': 'Product updated successfully'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'Error updating product', 'error': str(e)}), 500

@product_bp.route('/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    try:
        product = Product.query.get(product_id)
        if not product:
            return jsonify({'message': 'Product not found'}), 404
        db.session.delete(product)
        db.session.commit()
        return jsonify({'message': 'Product deleted successfully'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'Error deleting product', 'error': str(e)}), 500
