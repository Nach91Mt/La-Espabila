import { useState } from "react";
import AllergensData from "../components/alergensData";
import useGlobalReducer from "../components/hooks/useGlobalReducer";
import { Button } from "react-bootstrap";
import ModalProduct from "../components/ModalProduct";

export default function Carta() {
  const { store, dispatch } = useGlobalReducer();
  const [modalShow, setModalShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const[product, setProduct] = useState("");
  console.log(store);
  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setModalShow(false);
    setSelectedProduct(null);
    setProduct("");
  };

  return (
    <>
      {store?.menu?.length > 0 ? (
        store.menu.map((section) => (
          <div
            key={section.id}
            className="d-flex flex-column align-items-center justify-content-center p-0"
          >
            <h1 className="text-light">{section.name}</h1>
            {section.foods.map((food) => (
              <div key={food.id} className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{food.name}</h5>
                  <p className="card-text">{food.description}</p>
                  <p className="card-text">
                    <small className="text-muted">Precio: ${food.price}</small>
                  </p>
                </div>
                <div className="card-footer">
                  {food.allergens.map((alergen, index) => (
                    <AllergensData key={index} alergen={alergen} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p className="text-light">Cargando menú...</p>
      )}
      <Button
        variant="primary"
        className="position-fixed bottom-0 end-0 m-3"
        onClick={() => (handleOpenModal(), setProduct("carousel"))}
      >
        Imagenes
      </Button>
      <ModalProduct
        product={product}
        show={modalShow}
        onHide={handleCloseModal}
      />
    </>
  );
}
