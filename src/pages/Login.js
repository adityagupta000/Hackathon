import React, { useState } from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      // Redirect or update UI based on authentication status
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    // Handle registration logic
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: 'black' }}>
      <div className="login-container p-3 p-md-4 p-lg-5 my-4 my-md-5 d-flex flex-column border border-black rounded" style={{ maxWidth: '900px', backgroundColor: 'white' }}>
        <div className="row no-gutters">
          <div className={`col-md-6 d-flex align-items-center image-container ${isAdmin ? 'move-right' : 'move-left'}`}>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png" alt="loginimage" className="img-fluid rounded image-effect" />
          </div>
          <div className={`col-md-6 d-flex flex-column justify-content-center ${isAdmin ? 'order-first' : 'order-last'}`}>
            <div className="text-center mb-4">
              <button
                className={`btn mx-2 ${!isAdmin ? 'btn-active' : 'btn-inactive'}`}
                onClick={() => setIsAdmin(false)}
              >
                User Login
              </button>
              <button
                className={`btn mx-2 ${isAdmin ? 'btn-active' : 'btn-inactive'}`}
                onClick={() => setIsAdmin(true)}
              >
                Admin
              </button>
            </div>
            <div className="tab-content">
              <div className={`tab-pane fade ${isAdmin ? '' : 'show active'} fade-in`}>
                <div className="text-center mb-4">
                  <p style={{ color: 'black' }}>Sign in with:</p>
                  <div className="d-flex justify-content-center flex-wrap">
                    <button className="btn btn-outline-danger mx-1 border border-info ">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button className="btn btn-outline-info mx-1 border border-info ">
                      <i className="fab fa-instagram"></i>
                    </button>
                    <button className="btn btn-outline-danger mx-1 border border-info ">
                      <i className="fab fa-google"></i>
                    </button>
                    <button className="btn btn-outline-primary mx-1 border border-info ">
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                  <p className="text-center mt-3">or</p>
                </div>
                <form onSubmit={handleLogin}>
                  <div className="floating-label-content">
                    <input
                      className="floating-input"
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder=" "
                    />
                    <label className="floating-label" htmlFor="email">Email address</label>
                  </div>
                  <div className="floating-label-content">
                    <input
                      className="floating-input"
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder=" "
                    />
                    <label className="floating-label" htmlFor="password">Password</label>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-check">
                      <input className="form-check-input border-primary form-shadow" type="checkbox" id="rememberMe" />
                      <label className="form-check-label" htmlFor="rememberMe" style={{ color: 'black' }}>Remember me</label>
                    </div>
                    <a href="#!" className="mb-4">Forgot password?</a>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-outline-danger mb-3 form-shadow">Sign in</button>
                  </div>
                </form>
                <p className="text-center" style={{ color: 'black' }}> Not a member? <a href="./register">Register</a></p>
              </div>
              <div className={`tab-pane fade ${isAdmin ? 'show active' : ''} fade-in`}>
                <h3 className="text-center mb-4">Administrative Login</h3>
                <form onSubmit={handleLogin}>
                  <div className="floating-label-content">
                    <input
                      className="floating-input"
                      type="text"
                      id="adminUsername"
                      placeholder=" "
                    />
                    <label className="floating-label" htmlFor="adminUsername">Username</label>
                  </div>
                  <div className="floating-label-content">
                    <input
                      className="floating-input"
                      type="password"
                      id="adminPassword"
                      placeholder=" "
                    />
                    <label className="floating-label" htmlFor="adminPassword">Password</label>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-outline-primary mb-3 form-shadow">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        body {
          background-color: black;
          color: white;
          margin: 0;
          padding: 0;
        }

        .image-container {
          display: flex;
          justify-content: center;
          align-items: flex-start; 
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .image-effect {
          max-width: 100%;
          height: auto;
        }
        .move-right {
          transform: translateX(5px);
        }
        .move-left {
          transform: translateX(-5px);
        }
        .btn-active {
          background-color: #007bff;
          color: white;
          border-color: #007bff;
        }
        .btn-active:hover {
          background-color: #0056b3;
          color: white;
          border-color: #004085;
        }
        .btn-inactive {
          background-color: transparent;
          color: #007bff;
          border-color: red;
        }
        .btn-inactive:hover {
          background-color: #e9ecef;
          color: #0056b3;
        }
        .floating-label-content { 
          position: relative; 
          margin-bottom: 20px; 
        }
        .floating-label {
          color: #1e4c82; 
          font-size: 14px;
          font-weight: normal;
          position: absolute;
          pointer-events: none;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          padding: 0 3px;
          background: #fff;
          transition: 0.3s ease all; 
        }
        .floating-input {
          font-size: 16px;
          display: block;
          width: 100%;
          height: 36px;
          padding: 0 20px;
          background: #fff;
          color: #323840;
          border: 1px solid #3D85D8;
          border-radius: 4px;
          box-sizing: border-box;
        }
        .floating-input:focus, .floating-input:not(:placeholder-shown) {
          outline: none;
        }
        .floating-input:focus ~ .floating-label, .floating-input:not(:placeholder-shown) ~ .floating-label {
          top: 0px;
          font-size: 15px;
        }
        .fade-in {
          transition: opacity 0.5s ease-in-out;
        }
        .fade-in.show {
          opacity: 1;
        }
        .fade-in {
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default Login;
