import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function HackathonRegister() {
  return (
    <div className="container ">
      <div className="container p-2 my-5 d-flex flex-column border border-dark rounded" style={{ maxWidth: '900px' }}>
        <ul className="nav nav-pills mb-3 justify-content-center">
          <li className="nav-item">
            <h3>Hackathon Registration</h3>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active">
            <form>
              <div className="form-group p-2">
                <label htmlFor="name">Name</label>
                <input className="form-control" type="text" id="name" placeholder="Name" />
              </div>

              <div className="form-group p-2">
                <label htmlFor="email">Email</label>
                <input className="form-control" type="email" id="email" placeholder="Email" />
              </div>

              <div className="form-group p-2">
                <label htmlFor="password">Password</label>
                <input className="form-control" type="password" id="password" placeholder="Password" />
              </div>

              <div className="form-group p-2">
                <label htmlFor="teamName">Team Name</label>
                <input className="form-control" type="text" id="teamName" placeholder="Team Name" />
              </div>

              <div className="form-group p-2">
                <label htmlFor="teamSize">Number of People</label>
                <select className="form-control" id="teamSize">
                  <option value="">Select number of people</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div className="form-group p-2">
                <label htmlFor="projectIdea">Project Idea</label>
                <textarea className="form-control" id="projectIdea" placeholder="Brief description of your project idea" rows="3"></textarea>
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary" style={{ width: '200px' }}>Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HackathonRegister;
