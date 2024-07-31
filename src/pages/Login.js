import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../images/1.jpg';

function Login() {
  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="container p-2 my-5 d-flex flex-column border border-dark rounded" style={{ maxWidth: '900px' }}>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png" alt="Login Image" className="img-fluid rounded h-100" />
          </div>
          <div className="col-md-6">
            <ul className="nav nav-pills mb-3 justify-content-center">
              <li className="nav-item">
                <h3>Login</h3>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show active">
                <div className="text-center mb-3">
                  <p>Sign in with:</p>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-danger mx-1 border border-info">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button className="btn btn-outline-info mx-1 border border-info">
                      <i className="fab fa-instagram"></i>
                    </button>
                    <button className="btn btn-outline-danger mx-1 border border-info">
                      <i className="fab fa-google"></i>
                    </button>
                    <button className="btn btn-outline-primary mx-1 border border-info">
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                  <p className="text-center mt-3">or</p>
                </div>
                <form>
                  <div className="form-group">
                    <input className="form-control mb-3" type="email" placeholder="Email address" id="email" />
                  </div>
                  <div className="form-group">
                    <input className="form-control mb-3" type="password" placeholder="Password" id="password" />
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="rememberMe" />
                      <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                    </div>
                    <a href="#!" className="mb-4">Forgot password?</a>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary mb-3">Sign in</button>
                  </div>
                </form>
                <p className="text-center">Not a member? <a href="./register.html">Register</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;