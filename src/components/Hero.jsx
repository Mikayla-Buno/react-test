import React from 'react';
import backgroundImg from '../images/background.jpg'; // Make sure path is correct

const Hero = () => {
  return (
    <header 
      className="hero-section" 
      style={{ 
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        minHeight: '600px',
        position: 'relative',
        marginBottom: '50px'
      }}
    >
      <div className="hero-overlay"></div>
      <div className="container h-100 d-flex align-items-center">
        <div className="text-center text-white w-100">
          <h1 className="display-4 mb-4">Welcome to My Portfolio</h1>
          <p className="lead">Showcasing my creative work</p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
