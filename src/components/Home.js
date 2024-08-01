import React from 'react';
import './App.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import CarouselComponent from './Carousel.js';
import Time from './Time.js';
import Sponsor from './partner.js';
import Card from './Card.js'

const Home = () => (
  <div className="container-fluid justify-content-around px-3 py-3 bg-black text-light">
    <CarouselComponent />
    <Time />
    <Card/>
    <Sponsor/>
  </div>
);

export default Home;
