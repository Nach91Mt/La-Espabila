import { useState } from "react";
import AllergensData from "../components/alergensData";
import useGlobalReducer from "../components/hooks/useGlobalReducer";
import { Button, Container, Form } from "react-bootstrap";
import ModalProduct from "../components/ModalProduct";
import CarouselFood from "../components/CarouselFood";
import "../components/CarouselFood.css";
import "../pages/Carta.css"; // Import your CSS file for styling
export default function Carta() {
  const { store, imgStore } = useGlobalReducer();
  const [modalShow, setModalShow] = useState(false);
  const [section, setSection] = useState("");
  const [product, setProduct] = useState("");
  
  console.log(store);
  const handleOpenModal = () => {
    setModalShow(true);
  };
  const handleCloseModal = () => {
    setModalShow(false);
    setProduct("");
  };
  const newSection = () => { }
  return (
    <>
      <CarouselFood />
      <div className="menu-container">
        {store?.menu?.length > 0 ? (
          store.menu.map((section) => (
            <div
              key={section.id}
              className="d-flex flex-column align-items-center justify-content-center p-0 "
            >
              <Container className="section-divider mb-3 border-bottom border-secondary w-100 text-center">
                <h1 className="text-light">{section.name}</h1>
              </Container>

              {section.foods.map((food) => (
                <Container
                  key={food.id}
                  className="card mb-3 pe-4 border-0  bg-dark text-light"
                >
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <h1>{food.name}</h1>
                    <h1>{food.price}€</h1>
                  </div>
                  <span className="text-light">
                    <h2>{food.description}</h2>
                  </span>
                  <div className="d-flex flex-wrap align-items-center">
                    {food.allergens.map((alergen, index) => (
                      <AllergensData key={index} alergen={alergen} />
                    ))}
                  </div>
                </Container>
                
              ))}
              {/* <Form onSubmit={(e) => handleSubmit(e, section.name)}>
                <div className="d-flex flex-wrap gap-3">
                  <Form.Group className="mb-3">
                    <Form.Label className="text-light">Aádir Comida</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nombre del plato"
                      value={plato}
                      onChange={(e) => setPlato(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-light">Precio</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Precio del plato"
                      value={plato}
                      onChange={(e) => setPlato(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-light">Descripción</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Descripción del plato"
                      value={plato}
                      onChange={(e) => setPlato(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-light">Alérgenos</Form.Label>
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
                  <Button
                    variant="primary"
                    className="w-50"
                    type="submit"
                    onClick={(e) => handleSubmit(e,section.name)}>AÑADIR</Button>
                </div>
              </Form> */}
              <Button
                variant="primary"
                className="mb-3"
                onClick={() => (handleOpenModal(), setProduct("food"), setSection(section.name))}
              >
                Añadir Comida
              </Button>
            </div>
          ))
        ) : (
          <p className="text-light">Cargando menú...</p>
        )}
      </div>
      <Button
        variant="primary"
        className="position-fixed bottom-0 end-0 m-3"
        onClick={() => (handleOpenModal(), setProduct("carousel"))}
      >
        Imagenes
      </Button>
        <Button
        variant="primary"
        className="position-fixed bottom-0 start-0 m-3"
        onClick={() => (handleOpenModal(), setProduct("section"))}
        >
        Añadir secion
        </Button>
      <ModalProduct
        product={product}
        section={section}
        show={modalShow}
        onHide={handleCloseModal}
        zindex={9999}
      />
    </>
  );
}
