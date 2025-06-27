import { Container } from "react-bootstrap";
import logo from "../assets/logo.png";

export default function Home() {
  return (
    <Container
      className="d-flex flex-column flex-md-row align-items-center justify-content-center p-0"
      fluid
    >
      <img
        src={logo}
        alt="Logo"
        className="img-fluid "
        style={{ width: "auto", height: "400px" }}
      />
      <img
        src={logo}
        alt="Logo"
        className="img-fluid "
        style={{ width: "auto", height: "400px" }}
      />
    </Container>
  );
}
