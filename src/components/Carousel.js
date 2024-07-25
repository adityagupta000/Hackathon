import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import './App.css'; 

const CarouselComponent = () => (
  <Carousel>
    <Carousel.Item className="custom-carousel-item">
      <img className="d-block w-100 h-100" src={image1} alt="First slide" />
      <Carousel.Caption>
        <h5>hack</h5>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item className="custom-carousel-item">
      <img className="d-block w-100 h-100" src={image2} alt="Second slide" />
      <Carousel.Caption>
        <h5>Featured Book 2</h5>
        <p>Discover our second featured book.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item className="custom-carousel-item">
      <img className="d-block w-100 h-100" src={image3} alt="Third slide" />
      <Carousel.Caption>
        <h5>Featured Book 3</h5>
        <p>Discover our third featured book.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default CarouselComponent;
