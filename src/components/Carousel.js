import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../images/5.jpg';
import image2 from '../images/6.jpg';
import image3 from '../images/7.jpg';
import './App.css'; 

const CarouselComponent = () => (
  <Carousel>
    <Carousel.Item className="custom-carousel-item">
      <img className="d-block w-100 h-100" src={image1} alt="First slide" />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item className="custom-carousel-item">
      <img className="d-block w-100 h-100" src={image2} alt="Second slide" />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item className="custom-carousel-item">
      <img className="d-block w-100 h-100" src={image3} alt="Third slide" />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default CarouselComponent;
