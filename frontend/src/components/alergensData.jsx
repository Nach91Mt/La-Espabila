import { Container, Image } from "react-bootstrap";
import alergens from "../assets/allergens";

export default function AllergensData({ alergen }) {
  return (
    <Container className=" w-25 d-flex  align-items-center justify-content-center p-0">
      <Image rounded width={'50'} src={alergens[alergen]} />
      <h3 className="ms-2 fs-5">{alergen}</h3>
    </Container>
  );
}
