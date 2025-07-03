import { useState } from "react";
import { Form, Modal } from "react-bootstrap";

export default function ModalProduct({ product, show, onHide }) {
  const [file, setFile] = useState([]);
  const [position, setPosition] = useState(0);
  console.log(product);

  const handleUpload = async () => {
    if (!file) {
      alert("Por favor, selecciona un archivo.");
      return;
    }
    const formData = new FormData();
     file.forEach((f) => {
    formData.append("images", f); 
  });
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
    } else {
      const errorData = await response.json();
      console.error("Error al subir la imagen:", errorData);
      alert("Error al subir la imagen", errorData.error);
    }
  };
  return (
    <>
      {product === "carousel" ? (
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
                  multiple
                  onChange={(e) => setFile([...e.target.files])}
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
              {file &&
                file?.map((img, i) => (
                  <img
                    key={i}
                    src={URL.createObjectURL(img)}
                    alt={`preview-${i}`}
                    style={{ maxWidth: "100px", marginRight: "8px" }}
                  />
                ))}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-primary" onClick={handleUpload}>
              Subir Imagen
            </button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </>
  );
}
