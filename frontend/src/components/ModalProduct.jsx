import { useState } from "react";
import { Form, Modal } from "react-bootstrap";

export default function ModalProduct({ product, show, onHide }) {
  const [file, setFile] = useState(null);
  const [position, setPosition] = useState(0);
    console.log(product);
  const handleUpload = async () => {
    if (!file) {
      alert("Por favor, selecciona un archivo.");
      return;
    }
    const formData = new FormData();
    formData.append("image", file);
    formData.append("position", position);

    const response = await fetch(
      `${import.meta.env.VITE_BACK_URL}/api/upload_image`,
      {
        method: "POST",
        body: formData,
      }
    );
    if (response.status === 200) {
      const data = await response.json();
      console.log("Imagen subida con éxito:", data.url);
      alert("Imagen subida con éxito");
      onHide();
    }
  };
  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Añade</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleUpload}>
          <Form.Group className="mb-3">
            <Form.Label>Seleciona imagen</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              accept="image/*"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Posición en el carrusel</Form.Label>
            <Form.Control
              type="number"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              min="0"
              max="10"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-primary" onClick={handleUpload}>
          Subir Imagen
        </button>
      </Modal.Footer>
    </Modal>
  );
}
