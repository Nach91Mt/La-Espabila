from .database import db
import json
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email
        }

class Section(db.Model):
    __tablename__ = 'section'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    food= db.relationship('Food', backref='section', lazy=True)
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "food": [food.serialize() for food in self.food ]    
        }
class Food(db.Model):
    __tablename__ = 'food'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(200), nullable=True)
    price = db.Column(db.Float, nullable=False)
    allergens = db.Column(db.Text, nullable=True)  
    section_id = db.Column(db.Integer, db.ForeignKey('section.id'), nullable=False)

    def serialize(self):
        try:
            allergens = json.loads(self.allergens) if self.allergens else []
        except json.JSONDecodeError:
            allergens = []  # En caso de string vacío o inválido

        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "allergens": allergens,
            "section_id": self.section_id
    }

    def set_allergens(self, allergen_list):
        self.allergens = json.dumps(allergen_list)
class ImgCarousel(db.Model):
    __tablename__ = 'imgcarousel'
    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String(200), nullable=False)
    public_id = db.Column(db.String(200), nullable=False)
    position = db.Column(db.Integer, nullable=False, default=0)

    def serialize(self):
        return {
            "id": self.id,
            "image_url": self.image_url,
            "position": self.position
        }