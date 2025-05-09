import React, { useEffect, useState } from 'react';
import { Spinner, Container, Row, Col, Alert, Form, Button, Pagination } from 'react-bootstrap';
import SnippetCard from './SnippetCard';
import { codeSnippetApi } from '../services/api';

const SnippetList = () => {
  const [snippets, setSnippets] = useState([]);
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState('');
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [count, setCount] = useState(0);

  const fetchSnippets = async () => {
    setLoading(true);
    try {
      const res = await codeSnippetApi.getAll({ search, tags, page });
      setSnippets(res.data.results);
      setNextPage(res.data.next);
      setPrevPage(res.data.previous);
      setCount(res.data.count);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSnippets();
  }, [search, tags, page]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1); // reset to page 1
    fetchSnippets();
  };

  return (
    <Container className="mt-4">
      <Form onSubmit={handleSearchSubmit} className="mb-4 d-flex gap-2">
        <Form.Control
          type="text"
          placeholder="Search snippets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Form.Control
          type="text"
          placeholder="Tag ID (e.g., 3)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </Form>

      {loading ? (
        <div className="text-center"><Spinner animation="border" /></div>
      ) : (
        <>
          <Row>
            {snippets.map(snippet => (
              <Col key={snippet.id} md={6} lg={4}>
                <SnippetCard snippet={snippet} />
              </Col>
            ))}
          </Row>

          {/* Pagination */}
          <Pagination className="mt-4 justify-content-center">
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

export default SnippetList;
