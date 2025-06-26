import { Container } from "react-bootstrap";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import NavMenu from "./NavMenu";

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-light " fluid>
      <NavMenu />

      <div className="flex-grow-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
