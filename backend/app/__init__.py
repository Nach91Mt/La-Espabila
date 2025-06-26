from flask import Flask, send_from_directory
from .database import db
from .routes.routes import main
from .routes.food import food_bp
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from datetime import timedelta

import os

def create_app():
    app = Flask(__name__, static_folder="../frontend/build", static_url_path="/")
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///site.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    jwt= JWTManager(app)
    app.config['JWT_SECRET_KEY'] = os.getenv("KEY")
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)
    CORS(app, resources={r"/api/*": {"origins": "*"}})
    db.init_app(app)
    migrate = Migrate(app, db)
    app.register_blueprint(main)
    app.register_blueprint(food_bp)

    @app.route("/")
    def serve():
        return send_from_directory(app.static_folder, "index.html")

    return app