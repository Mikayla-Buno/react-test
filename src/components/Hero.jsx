// src/components/Hero.jsx
import React from 'react';
import backgroundImg from '../images/background.jpg'; // Ensure this file exists in src/images


const Hero = () => {
  return (
    <header
      className="hero-section position-relative text-white"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        minHeight: '600px',
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      ></div>


      {/* Content */}
      <div className="container h-100 d-flex align-items-center justify-content-center" style={{ zIndex: 2, position: 'relative' }}>
        <div className="text-center">
          <h1 className="display-4 mb-4">Welcome to My Portfolio</h1>
          <p className="lead">Showcasing my creative work</p>
        </div>
      </div>
    </header>
  );
};


export default Hero;



