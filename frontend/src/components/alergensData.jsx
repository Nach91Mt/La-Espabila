import { Container, Image } from "react-bootstrap";
import alergens from "../assets/allergens";

export default function AllergensData({ alergen }) {
  return (
    <div className="  d-flex p-1">
      <Image
        ounded
        width={'50'}
        src={alergens[alergen]}
        style={{ height: '30px', width: 'auto' }}
      />
      <h5 className="ms-2 fs-5">{alergen}</h5>
    </div>
  );
}
