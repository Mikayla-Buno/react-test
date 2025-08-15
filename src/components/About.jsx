// src/components/About.jsx
import React from "react";

function About() {
  return (
    <section 
      id="about" 
      className="py-5" 
      style={{ backgroundColor: '#F3C6C6' }} // slightly different shade of pink
    >
      <div className="container">
        <h2 className="text-center mb-5 section-title cursive-font">About Me</h2>
        <div className="text-center">
          <p>
            Hello! My name is Mikayla Loera Marie M. Buno, and I am a 20-year-old student currently in my 3rd year of pursuing a BS in Computer Science. 
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
