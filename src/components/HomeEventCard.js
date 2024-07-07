import React from 'react';
import './App.css';
import CarouselComponent from './Carousel';
import Event from './EventHCard';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';

const Home = () => (
  <div className="container-fluid px-3 py-3">
    <CarouselComponent />
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
      <div className="col">
        <Event
          title="Code Quest"
          date="9th Dec"
          time="09:30 - 12:30 PM"
          description="Armour up with all your coding gear for a showdown in this time-bound quest to test your coding skills. Prepare to face coding challenges and take down your opponents to emerge victorious and claim exclusive prizes."
          image={image1}
          link="/code-quest"
        />
      </div>
      <div className="col">
        <Event
          title="Code Quest"
          date="9th Dec"
          time="09:30 - 2:30 PM"
          description="Armour up with all your coding gear for a showdown in this time-bound quest to test your coding skills. Prepare to face coding challenges and take down your opponents to emerge victorious and claim exclusive prizes."
          image={image2}
          link="/code-quest"
        />
      </div>
      <div className="col">
        <Event
          title="Code Quest"
          date="9th Dec"
          time="09:30 - 3:30 PM"
          description="Armour up with all your coding gear for a showdown in this time-bound quest to test your coding skills. Prepare to face coding challenges and take down your opponents to emerge victorious and claim exclusive prizes."
          image={image3}
          link="/code-quest"
        />
      </div>
      <div className="col">
        <Event
          title="Code Quest"
          date="9th Dec"
          time="09:30 - 4:30 PM"
          description="Armour up with all your coding gear for a showdown in this time-bound quest to test your coding skills. Prepare to face coding challenges and take down your opponents to emerge victorious and claim exclusive prizes."
          image={image4}
          link="/code-quest"
        />
      </div>
    </div>
  </div>
);

export default Home;
