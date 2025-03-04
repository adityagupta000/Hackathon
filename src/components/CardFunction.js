import React, { useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Event = ({ title, date, time, description, image, link }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const formatDescription = (desc) => {
    const words = desc.split(' ');
    if (words.length === 0) return desc;

    const firstWord = words[0];
    const lastWord = words[words.length - 1];
    const middleWords = words.slice(1, -1).join(' ');

    return (
      <>
        <span style={{ color: 'red', fontWeight: 'bold' }}>{firstWord}</span>
        {middleWords && ` ${middleWords} `}
        <span style={{ color: 'green', fontWeight: 'bold' }}>{lastWord}</span>
      </>
    );
  };

  return (
    <>
      <div className="card-container">
        <Card
          className="event-card mt-3 mb-3 card-glow"
          onClick={handleShow}
        >
          <Card.Img
            variant="top"
            src={image}
            className="card-img"
          />
          <Card.Body>
            <Card.Title className="card-title">{title}</Card.Title>
            <Card.Text>
              <i className="fas fa-calendar-day me-2"></i>{date}
            </Card.Text>
            <Card.Text>
              <i className="fas fa-clock me-2" style={{ color: 'red' }}></i>{time}
            </Card.Text>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </div>

      <Modal
        show={showModal}
        onHide={handleClose}
        size="lg"
        centered
        className="modal-custom"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: 'green' }}>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="border-top-black">
          <div className="d-flex flex-column flex-lg-row align-items-center">
            <img src={image} alt={title} className="modal-img" />
            <div className="ms-lg-3 mt-3 mt-lg-0">
              <p><i className="fas fa-calendar-day me-2" style={{ color: 'blue' }}></i>{date}</p>
              <p><i className="fas fa-clock me-2" style={{ color: 'red' }}></i>{time}</p>
              <p>{formatDescription(description)}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-end border-top-black">
          <Button 
            variant="outline-danger" 
            onClick={handleClose} 
            style={{ borderRadius: '0' }}
          >
            Close
          </Button>
          <Button 
            variant="outline-success" 
            href={link} 
            target="_blank" 
            style={{ borderRadius: '0' }}
          >
            Register Now
          </Button>
        </Modal.Footer>
      </Modal>

      <style>{`
        .card-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin: 10px;
        }

        .event-card {
          cursor: pointer;
          border: 4px solid black;
          width: 100%;
          max-width: 300px;
          margin: auto;
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease-in-out;
        }

        .card-glow:hover {
          box-shadow: 0 0 15px rgba(255, 0, 0, 0.7);
          transform: scale(1.05);
        }

        .card-img {
          padding: 10px;
          width: 100%;
          height: 250px;
          object-fit: cover;
        }

        .card-title {
          border-top: 1px solid black;
          padding-top: 10px;
          color: red;
        }

        .modal-custom .modal-dialog {
          transition: transform 0.3s ease-in-out;
        }

        .modal-custom .modal-dialog.modal-dialog-centered {
          transform: scale(1);
        }

        .modal-img {
          width: 100%;
          height: auto;
          border-radius: 5px;
          transition: transform 0.3s ease-in-out;
        }

        @media (min-width: 992px) {
          .modal-img {
            width: 50%;
            height: auto;
          }
          .modal-body .d-flex {
            flex-direction: row;
            justify-content: center;
          }
        }

        @media (max-width: 991px) and (min-width: 768px) {
          .modal-img {
            width: 70%;
            height: auto;
          }
          .modal-body .d-flex {
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 767px) {
          .event-card {
            width: 100%;
            max-width: none;
          }
          .modal-img {
            width: 100%;
            height: auto;
          }
          .modal-body .d-flex {
            flex-direction: column;
            align-items: center;
          }
        }

        .border-top-black {
          border-top: 1px solid black;
        }
      `}</style>
    </>
  );
};

export default Event;
