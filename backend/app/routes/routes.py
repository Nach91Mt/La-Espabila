from flask import Blueprint, jsonify, request
from app.database import db
from app.models import User,Food, Section
from werkzeug.security import generate_password_hash, check_password_hash
import os
from flask_jwt_extended import create_access_token,jwt_required,get_jwt_identity
from flask_jwt_extended import jwt_required, get_jwt_identity
main = Blueprint("main", __name__)

@main.route("/api/hello")
def hello():
    return jsonify({"message": "Hola desde Flask + SQLite + Pipenv"})

@main.route("/api/register", methods=["POST"])
def register_user():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    passForRegister = data.get("password2")
    password = generate_password_hash(data.get("password"))
    if passForRegister != os.environ.get("KEY"):
        return {"error": "Unauthorized"}, 401
    if not name or not email or not password:
        return {"error": "Faltan campos obligatorios"}, 400

    if User.query.filter_by(email=email).first():
        return {"error": "El email ya está registrado"}, 400

    new_user = User(name=name, email=email, password=password)
    db.session.add(new_user)
    db.session.commit()

    return {"message": "Usuario registrado exitosamente", "user": new_user.serialize()}, 201

@main.route("/api/users", methods=["GET"])
def get_users():
    users = User.query.all()
    if not users:
        return jsonify({"message": "No hay usuarios registrados"}), 404

    data = [user.serialize() for user in users]
    return jsonify(data), 200
@main.route("/api/login", methods=["POST"])
def login_user():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return {"error": "Faltan campos obligatorios"}, 400

    user = User.query.filter_by(email=email).first()
    if not user or not check_password_hash(user.password, password):
        return {"error": "Credenciales inválidas"}, 401
    access_token = create_access_token(identity=str(user.id))
    return {"message": "Inicio de sesión exitoso", "token":access_token}, 200
