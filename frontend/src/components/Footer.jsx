import { Col, Container, Row, ListGroup } from "react-bootstrap";
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import "./Footer.css"; // Assuming you have a CSS file for additional styles
export default function Footer() {
  return (
    <footer className="border-t bg-dark ">
      <Container className="mx-auto pt-3" fluid>
        <Row className="g-4">
          <Col md={4}>
            <h3 className="mb-3 fs-5 fw-semibold text-center">La Espabila</h3>
            <p className="mb-3 text-white text-center">
              Ofreciendo la mejor experiencia gastronómica desde 2010. Nuestro
              compromiso es con la calidad y el sabor auténtico.
            </p>
            <div className="d-flex gap-3  justify-content-center">
              <a
                href="https://www.facebook.com/lolapunales.rest/?locale=es_LA"
                className="text-light hover-primary"
              >
                <Facebook size={20} />
                <span className="visually-hidden">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/lolapunales.rest/"
                className="text-light hover-primary"
              >
                <Instagram size={20} />
                <span className="visually-hidden">Instagram</span>
              </a>
              <a href="#" className="text-light hover-primary">
                <Twitter size={20} />
                <span className="visually-hidden">Twitter</span>
              </a>
            </div>
          </Col>

          <Col md={4} className="bg-dark">
            <h3 className="mb-3 fs-5 fw-semibold text-center">Enlaces</h3>
            <ListGroup variant="flush">
              <ListGroup.Item className="p-0 border-0 text-center">
                <a href="/" className="text-light text-decoration-none">
                  Inicio
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="p-0 border-0 text-center">
                <a
                  href="/menu-comida"
                  className="text-light text-decoration-none"
                >
                  Carta
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="p-0 border-0 text-center">
                <a href="/#about" className="text-light text-decoration-none">
                  Nosotros
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="p-0 border-0 text-center">
                <Link
                  to="/Politica-privacidad"
                  className="text-light text-decoration-none"
                >
                  Política de Privacidad
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="p-0 border-0 text-center">
                <Link
                  to="/Aviso-Legal"
                  className="text-light text-decoration-none"
                >
                  Términos y Condiciones
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={4}>
            <h3 className="mb-3 fs-5 fw-semibold text-center">Horario</h3>
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex justify-content-between p-0 border-0">
                <span className="text-light ms-5">Lunes - Jueves</span>
                <span className="me-5">12:00 - 23:00</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between p-0 border-0">
                <span className="text-light ms-5">Viernes</span>
                <span className="me-5">12:00 - 01:00</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between p-0 border-0">
                <span className="text-light ms-5">Sábado</span>
                <span className="me-5">11:00 - 01:00</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between p-0 border-0">
                <span className="text-light ms-5">Domingo</span>
                <span className="me-5">11:00 - 00:00</span>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <div className="mt-2 border-top pt-3 text-center text-light small">
          <p>
            &copy; {new Date().getFullYear()} La Espabila. Todos los derechos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
