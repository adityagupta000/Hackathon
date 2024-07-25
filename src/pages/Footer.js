import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is imported
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="footer bg-dark text-white">
    <Container>
      <Row className="py-4 text-center text-md-start">
        <Col lg={4} md={6} className="mb-4 mb-lg-0">
          <h5 className="text-uppercase mb-3">About Hack-a-fest</h5>
          <p>
            Hack-a-fest is a platform where innovators come together to create solutions. Join us for our next hackathon!
          </p>
        </Col>
        <Col lg={2} md={6} className="mb-4 mb-lg-0">
          <h5 className="text-uppercase mb-3">Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="#!" className="text-white">Privacy Policy</a></li>
            <li><a href="#!" className="text-white">Terms of Service</a></li>
            <li><a href="#!" className="text-white">Contact Us</a></li>
          </ul>
        </Col>
        <Col lg={3} md={6} className="mb-4 mb-lg-0">
          <h5 className="text-uppercase mb-3">Follow Us</h5>
          <ul className="list-unstyled d-flex justify-content-center justify-content-md-start">
            <li className="me-3"><a href="https://www.facebook.com/" className="text-white"><i className="fab fa-facebook-f"></i></a></li>
            <li className="me-3"><a href="https://github.com/" className="text-white"><i className="fab fa-github"></i></a></li>
            <li className="me-3"><a href="https://twitter.com/" className="text-white"><i className="fab fa-twitter"></i></a></li>
            <li className="me-3"><a href="https://www.instagram.com/" className="text-white"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </Col>
        <Col lg={3} md={6} className="mb-4 mb-lg-0">
          <h5 className="text-uppercase mb-3">Location</h5>
          <p>
            123 Hackathon Street,<br />
            Mangaluru City, IN 575006<br />
            Email: contact@hackafest.com<br />
            Phone: 9966885544
          </p>
        </Col>
      </Row>
    </Container>
    <div className="text-center py-3 bg-secondary">
      <p className="mb-0">&copy; {new Date().getFullYear()} Hackathon. Built during a hackathon.</p>
    </div>
  </footer>
);

export default Footer;
