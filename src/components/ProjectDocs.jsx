import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, ListGroup, Spinner, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProjectDocs.css';

const ProjectDocs = () => {
  const { id } = useParams();
  const [sections, setSections] = useState([]);
  const [activeSection, setActiveSection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sidebarLinks, setSidebarLinks] = useState([]);
  const contentRef = useRef();                // ① ref to content area

  // fetch docs from API
  const fetchDocs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/api/project-doc-sections/?project=${id}`
      );
      const data = res.data.results;
      setSections(data);
      setActiveSection(data[0] || null);
    } catch (err) {
      setError('Failed to load documentation.');
    } finally {
      setLoading(false);
    }
  };

  // whenever activeSection changes, assign IDs to headers in the rendered content,
  // then build the sidebar links from those headers
  useEffect(() => {
    if (!activeSection) return;

    // wait for HTML to render
    const timeout = setTimeout(() => {
      const contentEl = contentRef.current;
      if (!contentEl) return;

      // find all h2/h3 in the rendered content
      const headers = Array.from(contentEl.querySelectorAll('h2, h3, h4'));
      const links = headers.map(h => {
        // create a slug from text
        const slug = h.textContent.trim().toLowerCase().replace(/\s+/g, '-');
        h.id = slug;            // ② attach id to the real DOM node
        return { id: slug, title: h.textContent };
      });
      setSidebarLinks(links);
    }, 0);

    return () => clearTimeout(timeout);
  }, [activeSection]);

  useEffect(() => {
    fetchDocs();
  }, [id]);

  const handleSidebarClick = slug => {
    document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container fluid className="docs-container">
      <Row className="flex-nowrap">
        <Col md={3} className="sidebar border-end bg-light p-3 position-fixed vh-100 overflow-auto" style={{backgroundColor: '#f8f9fa',}}>
          <h5 className="mb-3 text-primary">📚 Docs</h5>
          {loading && <Spinner animation="border" />}
          <ListGroup variant="flush">
            {sidebarLinks.map(link => (
              <ListGroup.Item
                key={link.id}
                action
                onClick={() => handleSidebarClick(link.id)}
                className="section-item"
              >
                {link.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        <Col md={{ span: 8, offset: 3 }} className="p-4 content-area">
          {loading ? (
            <Spinner animation="border" />
          ) : error ? (
            <Alert variant="danger">{error}</Alert>
          ) : activeSection ? (
            <div ref={contentRef} className="doc-content" dangerouslySetInnerHTML={{ __html: activeSection.content }} />
          ) : (
            <Alert variant="info">No documentation available.</Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDocs;
