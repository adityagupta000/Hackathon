import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const sponsors = [
  {
    image: require('../images/13.png'),
    website: 'https://www.sahyadri.edu.in/',
  },
  {
    image: require('../images/14.png'),
    website: 'https://www.sosc.org.in/',
  },
  {
    image: require('../images/15.png'),
    website: 'https://students.ieee.org/student-branches/',
  },
  {
    image: require('../images/16.png'),
    website: 'https://example.com/sponsor4',
  },
  {
    image: require('../images/17.png'),
    website: 'https://example.com/sponsor5',
  },
  {
    image: require('../images/18.png'),
    website: 'https://example.com/sponsor6',
  }
];

const Sponsor = () => {
  // Split sponsors into rows
  const rows = [sponsors.slice(0, 4), sponsors.slice(4)];

  return (
    <>
      <h2 className="text-center mb-4">
        <span className="text-success">Our</span> 
        <span className="text-info"> Sponsors</span>
      </h2>

      <p className="text-center text-white mb-5">
        We are grateful to our sponsors for their generous support and contribution. Their commitment helps make Hack-a-Fest possible.
      </p>

      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="row justify-content-center">
          {row.map((sponsor, index) => (
            <div key={index} className="col-md-3 d-flex align-items-end mb-4">
              <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="d-flex flex-column align-items-center w-100">
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="img-fluid rounded-3 shadow-sm"
                  style={{ 
                    maxWidth: '200px', 
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                />
                <h5 className="text-white mt-3">{sponsor.name}</h5>
              </a>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Sponsor;
