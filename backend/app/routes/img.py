from flask import Blueprint, jsonify, request
from app.database import db
from app.models import ImgCarousel
import cloudinary.uploader

img_bp = Blueprint("img_bp", __name__)
@img_bp.route("/api/get_images", methods=["GET"])
def get_images():
    images = ImgCarousel.query.order_by(ImgCarousel.position).all()  # orden opcional por posición
    if not images:
        return jsonify({"message": "No hay imágenes disponibles"}), 404

    return jsonify([img.serialize() for img in images]), 200


@img_bp.route("/api/upload_image", methods=["POST"])
def upload_image():
    images = request.files.getlist("images")  # 'images' = mismo nombre del frontend
    saved_files = []
    print(f"Received {len(images)} images for upload")
    if not images:
        return jsonify({'error': 'No se recibieron imágenes'}), 400

    try:
        # Obtener la última posición y sumarle 1 para ir en orden
        last = db.session.query(db.func.max(ImgCarousel.position)).scalar() or 0
        current_position = last + 1

        for img in images:
            result = cloudinary.uploader.upload(img)
            image_url = result.get('secure_url')
            public_id = result.get('public_id')

            new_image = ImgCarousel(
                image_url=image_url,
                public_id=public_id,
                position=current_position
            )
            db.session.add(new_image)
            saved_files.append(new_image.serialize())
            current_position += 1  # Incrementa para la siguiente

        db.session.commit()
        return jsonify({'message': 'Imágenes subidas con éxito', 'urls': saved_files}), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
@img_bp.route("/api/delete_image/<int:image_id>", methods=["DELETE"])
def delete_image(image_id):
    image = ImgCarousel.query.get(image_id)
    if not image:
        return jsonify({'error': 'Imagen no encontrada'}), 404

    try:
        # Eliminar la imagen de Cloudinary
        cloudinary.uploader.destroy(image.image_url.split('/')[-1].split('.')[0])  # Extrae el public_id de la URL

        # Eliminar la imagen de la base de datos
        db.session.delete(image)
        db.session.commit()

        return jsonify({'message': 'Imagen eliminada exitosamente'}), 200
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
