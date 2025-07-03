import { Carousel, Image, Ratio } from "react-bootstrap";
import '../components/CarouselFood.css';
import useGlobalReducer from "./hooks/useGlobalReducer";
export default function CarouselFood() {
  const { imgStore } = useGlobalReducer()
  return (
    <div className="mb-3 fixed-mobile" >
      <Carousel>
        {imgStore?.images?.length > 0 ? (
          imgStore.images.map((image, index) => (
            <Carousel.Item key={index}>
              <Ratio aspectRatio="16x9" className="ratio-container">
              <Image
                src={image.image_url}
                alt={`Slide ${index + 1}`}
                  className="d-block w-100"
                  
                />
                </Ratio>
              
            </Carousel.Item>
          ))
        ) : (
          <p className="text-light">Cargando imágenes...</p>
        )}
       
        {/* <Carousel.Item>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
}
