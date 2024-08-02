import React, { useState } from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function HackathonRegister() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    teamName: '',
    teamSize: '',
    projectIdea: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', formData); // Ensure endpoint matches backend
      alert('Registration successful');
    } catch (error) {
      console.error('Error registering user:', error); // Log the error for debugging
      alert('Error registering user');
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-black">
      <div className="row justify-content-center w-100">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="p-5 border border-primary rounded shadow-lg bg-light">
            <h3 className="text-center mb-4">
              <span style={{ color: 'blue' }}>Hackathon</span> <span style={{ color: 'green' }}>Registration</span>
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="floating-label-content mb-4">
                <input className="floating-input border-danger" type="text" id="name" placeholder=" " value={formData.name} onChange={handleChange} />
                <label className="floating-label" htmlFor="name">Name</label>
              </div>
              <div className="floating-label-content mb-4">
                <input className="floating-input border-primary" type="email" id="email" placeholder=" " value={formData.email} onChange={handleChange} />
                <label className="floating-label" htmlFor="email">Email</label>
              </div>
              <div className="floating-label-content mb-4">
                <input className="floating-input border-danger" type="password" id="password" placeholder=" " value={formData.password} onChange={handleChange} />
                <label className="floating-label" htmlFor="password">Password</label>
              </div>
              <div className="floating-label-content mb-4">
                <input className="floating-input border-primary" type="text" id="teamName" placeholder=" " value={formData.teamName} onChange={handleChange} />
                <label className="floating-label" htmlFor="teamName">Team Name</label>
              </div>
              <div className="floating-label-content mb-4">
                <select className="floating-select border-danger" id="teamSize" value={formData.teamSize} onChange={handleChange}>
                  <option value="">Select number of people</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <label className="floating-label" htmlFor="teamSize">Team Size</label>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-outline-success btn-md">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <style>{`
        .floating-label-content { 
          position: relative; 
          margin-bottom: 20px; 
        }
        .floating-label {
          color: #1e4c82; 
          font-size: 13px;
          font-weight: normal;
          position: absolute;
          pointer-events: none;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          padding: 0 3px;
          background: #fff;
          transition: 0.2s ease all; 
        }
        .floating-input, .floating-select {
          font-size: 14px;
          display: block;
          width: 100%;
          height: 40px;
          padding: 0 20px;
          background: #fff;
          color: #323840;
          border: 1px solid #3D85D8;
          border-radius: 4px;
          box-sizing: border-box;
        }
        .floating-input:focus, .floating-input:not(:placeholder-shown), .floating-select:focus {
          outline: none;
        }
        .floating-input:focus ~ .floating-label, .floating-input:not(:placeholder-shown) ~ .floating-label,
        .floating-select:focus ~ .floating-label, .floating-select:not(:placeholder-shown) ~ .floating-label {
          top: 0px;
          font-size: 15px;
        }
        .floating-input:focus, .floating-select:focus {
          border-color: #007bff;
        }
        .floating-textarea {
          height: auto;
        }
        @media (max-width: 768px) {
          .floating-input, .floating-select, .floating-textarea {
            font-size: 16px;
          }
          .btn {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
}

export default HackathonRegister;
