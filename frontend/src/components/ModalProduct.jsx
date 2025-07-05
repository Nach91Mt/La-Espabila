import { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import useGlobalReducer from "./hooks/useGlobalReducer";

export default function ModalProduct({ product, show, onHide, section }) {
  const [file, setFile] = useState([]);
  const [position, setPosition] = useState(0);
  const { imgStore, imgDispatch } = useGlobalReducer();
  const [alergenos, setAlergenos] = useState([]);
  const [menuSection, setMenuSection] = useState("");
  const alergenosArray = [
    "altramuz",
    "apio",
    "cacahuetes",
    "gluten",
    "marisco",
    "frutos_secos",
    "huevos",
    "lacteos",
    "moluscos",
    "mostaza",
    "pescado",
    "sesamo",
    "soja",
    "sulfitos",
  ];

  console.log(section);

  const handleClose = () => {
    setFile([]);
    setPosition(0);
    onHide();
  };
  useEffect(() => {
    if (show) {
      setFile([]);
      setPosition(0);
    }
  }, [imgStore]);
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
      console.log(data);
      imgDispatch({ type: "ADD_IMAGES", payload: data.urls });
      alert("Imagen subida con éxito");
      onHide();
    } else {
      const errorData = await response.json();
      console.error("Error al subir la imagen:", errorData);
      alert("Error al subir la imagen", errorData.error);
    }
    setFile([]);
    setPosition(0);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const handleDeleteAll = async () => {
    const response = await fetch(`${import.meta.env.VITE_BACK_URL}/api/delete_all_image`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
     
    })
    if (response.status === 200) {
      imgDispatch({ type: "DELETE_ALL_IMAGES" });
      alert("Todas las imágenes han sido eliminadas");
      onHide();
    } else {
      const errorData = await response.json();
      console.error("Error al eliminar las imágenes:", errorData);
      alert("Error al eliminar las imágenes", errorData.error);
    }
  }
  return (
    <>
      {product === "carousel" && (
        <Modal show={show} onHide={handleClose} centered size="lg">
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
              {imgStore?.images?.length > 0 && (
                <div className="mt-3">
                  <h5>Imágenes subidas:</h5>
                  {imgStore.images.map((img, index) => (
                    <img
                      key={index}
                      src={img.image_url}
                      alt={`uploaded-${index}`}
                      style={{ maxWidth: "100px", marginRight: "8px" }}
                    />
                  ))}
                </div>
              )}
            </Form>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between">
            <button className="btn btn-danger" onClick={() => handleDeleteAll()}>Eliminar todas las imágenes</button>
            <button className="btn btn-primary" onClick={handleUpload}>
              Subir Imagen
            </button>
            
          </Modal.Footer>
        </Modal>
      )}
      {product === "food" && (
        <Modal show={show} onHide={handleClose} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Añadir Comida</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => handleSubmit(e, section)}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre del plato</Form.Label>
                <Form.Control type="text" placeholder="Nombre del plato" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Descripción"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" placeholder="Precio" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Alérgenos</Form.Label>
                <div className="d-flex flex-wrap gap-2">
                  {alergenosArray.map((alergen, index) => (
                    <Form.Check
                      key={index}
                      type="checkbox"
                      label={alergen}
                      value={alergen}
                      onChange={(e) => {
                        const { value, checked } = e.target;
                        setAlergenos((prev) =>
                          checked
                            ? [...prev, value]
                            : prev.filter((item) => item !== value)
                        );
                      }}
                    />
                  ))}
                </div>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-primary" onClick={handleClose}>
              Añadir Comida
            </button>
          </Modal.Footer>
        </Modal>
      )}
      {product === "section" && (
        <Modal show={show} onHide={handleClose} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Añadir Sección</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre de la sección</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre de la sección"
                  onChange={(e) => setMenuSection(e.target.value)}
                  value={menuSection}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-primary" onClick={handleClose}>
              Añadir Sección
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
