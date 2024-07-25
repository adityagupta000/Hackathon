import React from 'react';
import { Card } from 'react-bootstrap';
import './App.css'; // Make sure this path is correct

const Event = ({ title, date, time, description, image, link }) => (
  <Card className="event-card mt-5 mb-4 transition-card glow-border">
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>Date: {date}</Card.Text>
      <Card.Text>Time: {time}</Card.Text>
      <Card.Text>{description}</Card.Text>
      <div className="text-center">
        <a href={link} className="btn btn-outline-primary">Register Now</a>
      </div>
    </Card.Body>
  </Card>
);

export default Event;
