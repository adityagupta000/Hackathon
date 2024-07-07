import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';

const CarouselComponent = () => (
  <Carousel>
    <Carousel.Item>
      <img className="d-block w-100" src={image1} alt="First slide" />
      <Carousel.Caption>
        <h5>Featured Book 1</h5>
        <p>Discover our first featured book.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img className="d-block w-100" src={image2} alt="Second slide" />
      <Carousel.Caption>
        <h5>Featured Book 2</h5>
        <p>Discover our second featured book.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img className="d-block w-100" src={image3} alt="Third slide" />
      <Carousel.Caption>
        <h5>Featured Book 3</h5>
        <p>Discover our third featured book.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default CarouselComponent;
