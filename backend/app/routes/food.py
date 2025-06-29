from flask import Blueprint, jsonify, request
from app.database import db
from app.models import User,Food, Section
from flask_jwt_extended import jwt_required, get_jwt_identity

food_bp = Blueprint("food_bp", __name__)

@food_bp.route("/api/add_food", methods=["POST"])
def add_food():
    data = request.get_json()
    section_name = data.get("section_name")
    name = data.get("name")
    description = data.get("description")
    price = data.get("price")
    alergens = data.get("allergens")

    if not name or not price  or not section_name :
        return {"error": "Faltan campos obligatorios"}, 400
    
    section = Section.query.filter_by(name=section_name).first()
    if not section:
        section = Section(name=section_name)
        db.session.add(section)
        db.session.flush()
    new_food = Food(name=name, description=description, price=price,section_id=section.id, allergens=alergens) 
    db.session.add(new_food)
    db.session.commit()

    return {"message": "Comida añadida exitosamente", "food": new_food.serialize()}
@food_bp.route("/api/sections", methods=["GET"])
def get_sections():
    sections = Section.query.all()
    if not sections:
        return jsonify({"message": "No hay secciones disponibles"}), 404
    data=[]
    for section in sections:
        foods=[]
        for food in section.food:
            foods.append(food.serialize())
        data.append({
            "id": section.id,
            "name": section.name,
            "foods": foods
        })
    return jsonify(data), 200