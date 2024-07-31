import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './pages/Footer';
import Home from './components/HomeEventCard';
import Login from './pages/Login';
import Register from './pages/Register';
import Event from './components/EventN'; 

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Header />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<Event />} /> 
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <ConditionalFooter />
      </div>
    </Router>
  );
}

function ConditionalFooter() {
  const location = useLocation();
  const noFooterPaths = ['/login', '/register']; // Add more paths if needed

  if (noFooterPaths.includes(location.pathname)) {
    return null;
  }

  return <Footer />;
}

export default App;