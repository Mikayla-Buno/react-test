import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';

import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.png';

const projects = [
  { 
    id: 1, 
    title: 'Travelogue', 
    shortDesc: 'An app for travelers to share their travels far and wide.', 
    image: project1,
    details: 'Travelogue is more than just a travel app; it is a platform where users can plan, book, and manage their trips while connecting with a community of fellow travelers.',
    content: 'UI and User Flow',
    link: 'https://www.figma.com/proto/ude9IguJHP2z253p1EN0oP/Travelogue-Case-Study?node-id=2-977&starting-point-node-id=2%3A977&t=IIBbJESTsKrxDrFZ-1',
  },
  { 
    id: 2, 
    title: 'EquiCity', 
    shortDesc: 'A Web-Based Urban Planning Tool for Smarter Growth and Traffic Management in Lipa City.', 
    image: project2,
    details: 'A location intelligence application that recommends optimal sites for future commercial development based on real-time traffic data, population density, and existing infrastructure.',
    content: 'UI, Concept Paper, Algorithms',
    link: 'https://www.canva.com/design/DAGo_0HiTdw/wsCVRiXIybOE7U1NhVu2JQ/edit',
  },
  { 
    id: 3, 
    title: 'OKS!', 
    shortDesc: 'Operation Keep Safe: Enhancing Crisis Management for Higher Education Institutions in Lipa.', 
    image: project3,
    details: 'Safety status reporting and crisis coordination during emergencies.',
    content: 'UI and Software Requirements Specifications (SRS)',
    link: 'https://www.canva.com/design/DAGoz-42Y1s/wd_O1DIk-MGjWzWPx9vE5Q/edit',
  }
];

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <section id="projects" className="py-5" style={{ backgroundColor: '#F6D1D6' }}>
      <Container>
        <h2 className="text-center mb-5 section-title cursive-font">My Projects</h2>
        <Row className="g-4">
          {projects.map((project) => (
            <Col key={project.id} xs={12} md={6} lg={4}>
              <Card className="project-card h-100 text-center">
                <div className="card-img-container">
                  <Card.Img variant="top" src={project.image} alt={project.title} className="card-img-top" />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.shortDesc}</Card.Text>
                  <Button 
                    className="btn-custom mt-auto"
                    onClick={() => handleShowModal(project)}
                  >
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '15px' }} 
              />
              <p>{selectedProject.details}</p>
              <p>
                <strong>Link:</strong>{' '}
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {selectedProject.link}
                </a>
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn-custom" onClick={handleCloseModal}>Close</Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
