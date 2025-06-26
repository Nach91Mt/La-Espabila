import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
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

          <Navbar.Brand
            href="/"
            className="position-absolute top-50 start-50 translate-middle"
          >
            MyApp
          </Navbar.Brand>

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-start"
          >
            <Nav className="me-auto" onClick={() => setExpanded(false)}>
              <Nav.Link href="/">Carta</Nav.Link>
              <Nav.Link href="/about">Trabaja con nosotros</Nav.Link>
              <Nav.Link href="/contact">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
