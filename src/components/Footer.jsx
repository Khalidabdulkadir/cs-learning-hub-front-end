import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="mb-0">CS Learning Hub</h5>
            <p className="text-muted mb-0">Learn. Code. Share.</p>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <div className="d-flex justify-content-center gap-3">
              <Link to="/projects" className="text-light text-decoration-none">Projects</Link>
              <Link to="/snippets" className="text-light text-decoration-none">Snippets</Link>
              <Link to="/topics" className="text-light text-decoration-none">Topics</Link>
            </div>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <div className="social-links">
              <a href="https://github.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://twitter.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://linkedin.com" className="text-light" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <small className="text-muted d-block mt-2">
              © {new Date().getFullYear()} CS Learning Hub. All rights reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
