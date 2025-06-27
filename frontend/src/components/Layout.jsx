import { Container } from "react-bootstrap";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import NavMenu from "./NavMenu";

export default function Layout() {
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
