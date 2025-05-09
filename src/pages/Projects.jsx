import React, { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Pagination,
} from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  const navigate = useNavigate();

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/projects/?page=${page}`);
      setProjects(res.data.results);
      setNextPage(res.data.next);
      setPrevPage(res.data.previous);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [page]);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Explore Projects</h2>

      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <Row xs={1} sm={2} md={3} className="g-4">
            {projects.map((project) => (
              <Col key={project.id}>
                <Card
                  className="h-100 shadow-sm border-0"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate(`/projects/${project.id}/docs`)}
                >
                  {project.image && (
                    <Card.Img
                      variant="top"
                      src={project.image}
                      style={{ height: '180px', objectFit: 'cover' }}
                    />
                  )}
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text className="text-muted" style={{ fontSize: '0.9rem' }}>
                      {project.description.length > 120
                        ? project.description.slice(0, 120) + '...'
                        : project.description}
                    </Card.Text>
                    <div className="mt-auto d-flex flex-wrap gap-2">
                      <Button
                        href={project.github_url}
                        target="_blank"
                        variant="outline-dark"
                        size="sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </Button>
                      {project.demo_url && (
                        <Button
                          href={project.demo_url}
                          target="_blank"
                          variant="outline-success"
                          size="sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                  <Card.Footer className="bg-light text-end text-muted" style={{ fontSize: '0.75rem' }}>
                    {project.difficulty_level.charAt(0).toUpperCase() +
                      project.difficulty_level.slice(1)}{' '}
                    Level
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>

          <Pagination className="justify-content-center mt-4">
            <Pagination.Prev
              onClick={() => setPage(page - 1)}
              disabled={!prevPage}
            />
            <Pagination.Item active>{page}</Pagination.Item>
            <Pagination.Next
              onClick={() => setPage(page + 1)}
              disabled={!nextPage}
            />
          </Pagination>
        </>
      )}
    </Container>
  );
};

export default ProjectList;
