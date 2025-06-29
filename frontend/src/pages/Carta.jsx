import AllergensData from "../components/alergensData";
import useGlobalReducer from "../components/hooks/useGlobalReducer";

export default function Carta() {
  const { store, dispatch } = useGlobalReducer();
  console.log(store);

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
                        <AllergensData alergen={food.allergens} />
                        </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p className="text-light">Cargando menú...</p>
      )}
    </>
  );
}
