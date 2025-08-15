import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 text-center">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

