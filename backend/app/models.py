from .database import db

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
    allergens = db.Column(db.String(200), nullable=True)
    section_id = db.Column(db.Integer, db.ForeignKey('section.id'), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "section_id": self.section_id,
            "price": self.price,
            "allergens": self.allergens,
        }
class ImgCarousel(db.Model):
    __tablename__ = 'imgcarousel'
    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String(200), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "image_url": self.image_url
        }