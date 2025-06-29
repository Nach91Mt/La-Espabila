from flask import Blueprint, jsonify, request
from app.database import db
from app.models import ImgCarousel
import cloudinary.uploader

img_bp = Blueprint("img_bp", __name__)
@img_bp.route("/api/get_images", methods=["GET"])
def get_images():
    images = ImgCarousel.query.all()
    if not images:
        return jsonify({"message": "No hay imágenes disponibles"}), 404

    image_urls = [image.image_url for image in images]
    return jsonify(image_urls), 200

@img_bp.route("/api/upload_image", methods=["POST"])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No se encontró ninguna imagen'}), 400
    if('position' not in request.form):
        return jsonify({'error': 'No se encontró la posición de la imagen'}), 400
    image_file = request.files['image']

    try:
        # Subir imagen a Cloudinary
        result = cloudinary.uploader.upload(image_file)
        image_url = result.get('secure_url')

        # Guardar la URL en la base de datos
        new_image = ImgCarousel(image_url=image_url)  # Puedes ajustar la posición según sea necesario
        db.session.add(new_image)
        db.session.commit()

        return jsonify({'message': 'Imagen subida con éxito', 'url': image_url})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@img_bp.route("/api/delete_all_image", methods=["DELETE"])
def delete_all_images():
    try:
        ImgCarousel.query.delete()
        db.session.commit()
        return jsonify({'message': 'Todas las imágenes han sido eliminadas exitosamente'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
