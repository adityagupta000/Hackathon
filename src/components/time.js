import React, { useState, useEffect } from 'react';

const HomeScreen = () => {
  const [time, setTime] = useState({ hours: 12, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetTime = new Date().getTime() + 12 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      if (distance >= 0) {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTime({ hours, minutes, seconds });
      } else {
        clearInterval(interval);
        setTime({ hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="overflow-x-hidden bg-dark">
      <style jsx>{`
        .countdown-container {
          
          color: white;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          margin: 50px auto;
          max-width: 900px;
        }
        .countdown-item {
          background: rgba(0, 0, 0, 0.7);
          border-radius: 5px;
          padding: 10px;
          margin: 5px;
        }
        .countdown-value {
          font-size: 10em;
          font-color:red;
          font-weight: bold;

        }
        .countdown-label {
          font-size: 2em;
        }
      `}</style>

      <div className="countdown-container">
        <h1>Event Time</h1>
        <div className="d-flex justify-content-center mt-4">
          <div className="countdown-item">
            <div className="countdown-value">{time.hours}</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{time.minutes}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{time.seconds}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeScreen;
