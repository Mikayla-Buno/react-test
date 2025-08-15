// src/components/Footer.jsx
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="py-4 text-center mt-auto">
      <Container>
        <p className="mb-0">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
