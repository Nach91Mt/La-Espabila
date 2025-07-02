import { Container } from "react-bootstrap";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import NavMenu from "./NavMenu";
import useGlobalReducer from "./hooks/useGlobalReducer";
import { useEffect } from "react";

export default function Layout() {
  const { store, dispatch } = useGlobalReducer();
  
  useEffect(() => {
    const fetchSections = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACK_URL}/api/sections`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        
        dispatch({ type: "SET_MENU", payload: data });
      }
    };
    fetchSections();
  }, []);
  return (
    <>
      <header className="bg-dark text-light border-bottom border-secondary">
        <NavMenu />
      </header>
      <div className="d-flex flex-column min-vh-100 bg-dark text-light ">
        <div className="flex-grow-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
