import React from 'react';
import { Card } from 'react-bootstrap';
import './App.css'; // Make sure this path is correct

const Event = ({ title, date, time, description, image, link }) => (
  <Card className="event-card mt-5 mb-4 transition-card" style={{ border: '3px solid black', borderColor: 'black green gray red' }}>
    <Card.Img variant="top" src={image} style={{ borderRadius: '20px', padding: '10px', width: '100%', height: '320px' }} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>Date: {date}</Card.Text>
      <Card.Text>Time: {time}</Card.Text>
      <Card.Text>{description}</Card.Text>
      <div className="text-center">
        <a href={link} className="btn btn-outline-danger">Register Now</a>
      </div>
    </Card.Body>
  </Card>
);

export default Event;
