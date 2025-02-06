from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from database import db
from config import Config
from routes.auth_routes import auth_bp
from routes.product_routes import product_bp
from routes.order_routes import order_bp

app = Flask(__name__)
app.config.from_object(Config)

CORS(app)  # Enable cross-origin requests

db.init_app(app)
migrate = Migrate(app, db)  # Add this line

# Registering Blueprints
app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(product_bp, url_prefix='/products')
app.register_blueprint(order_bp, url_prefix='/orders')

if __name__ == '__main__':
    app.run(debug=True)
