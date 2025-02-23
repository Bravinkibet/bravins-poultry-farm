from database import db
from datetime import datetime

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    location = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(50), nullable=False)  # 'Eggs', 'Chicks', 'Fully Grown Chickens'
    price = db.Column(db.Float, nullable=False)
    stock = db.Column(db.Integer, default=0)
    available = db.Column(db.Boolean, default=True)

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # Make these nullable since our form no longer sends numeric IDs, but detailed info instead.
    user_id = db.Column(db.Integer, nullable=True)  
    product_id = db.Column(db.Integer, nullable=True)
    quantity = db.Column(db.Integer, nullable=False)
    # New column to store extra order details as JSON
    details = db.Column(db.JSON, nullable=True)
    status = db.Column(db.String(50), default='Pending')  # 'Pending', 'Completed', 'Cancelled'
    ordered_at = db.Column(db.DateTime, default=datetime.utcnow)
