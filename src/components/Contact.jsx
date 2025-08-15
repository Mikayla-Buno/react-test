import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate successful submission
    setTimeout(() => {
      setShowAlert(true);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);

      // Hide alert after 3 seconds
      setTimeout(() => setShowAlert(false), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <h2 className="text-center mb-5 section-title cursive-font">Get In Touch</h2>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Form onSubmit={handleSubmit} className="contact-form p-4 rounded">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={5} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required 
                />
              </Form.Group>
              
              <Button 
                className="btn-custom w-100"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Alert */}
      {showAlert && (
        <div 
          className="alert-pink position-fixed text-white font-weight-bold"
          style={{ 
            top: '20px', 
            right: '20px', 
            zIndex: 9999, 
            padding: '12px 20px', 
            borderRadius: '8px',
            backgroundColor: '#C38E8E'  // Pink background
          }}
        >
          Thank you for your message! I will get back to you soon.
        </div>
      )}
    </section>
  );
};

export default Contact;
