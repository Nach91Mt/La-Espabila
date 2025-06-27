import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function NavMenu() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar
        bg="dark"
        expand="lg"
        className="mb-3 position-relative"
        variant="dark"
        expanded={expanded}
      >
        <Container fluid>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? <FaTimes color="white" /> : <FaBars color="white" />}
          </Navbar.Toggle>
          {/*solucionar posicion delñ titulo*/}
          <Navbar.Brand
            as={Link}
            to="/"
            className="mx-auto position-absolute start-50 translate-middle-x"
            style={{ zIndex: 1 }}
          >
            <h1 className="text-center text-white m-0">La Espabila</h1>
          </Navbar.Brand>

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-start"
          >
            <Nav className="me-auto" onClick={() => setExpanded(false)}>
              <Nav.Link as={Link} to="/menu-comida">Carta</Nav.Link>
              <Nav.Link as={Link} href="/contact">Contacto</Nav.Link>
              <Nav.Link as={Link} href="/about">Trabaja con nosotros</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
