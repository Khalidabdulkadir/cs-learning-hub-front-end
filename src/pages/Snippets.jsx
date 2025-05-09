import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal, Spinner, Alert } from 'react-bootstrap';
import { toast } from 'react-toastify';
import SnippetCard from '../components/SnippetCard';
import SnippetForm from '../components/SnippetForm';
import Sidebar from '../components/Sidebar';
import { codeSnippetApi } from '../services/api';

function Snippets() {
  const [snippets, setSnippets] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingSnippet, setEditingSnippet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    loadSnippets();
  }, []);

  const loadSnippets = async () => {
    try {
      setLoading(true);
      const response = await codeSnippetApi.getAll();
      setSnippets(response.data);
      setError(null);
    } catch (err) {
      console.error('Error loading snippets:', err);
      toast.error('Failed to load code snippets');
      setError('Failed to load snippets.');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (formData) => {
    try {
      await codeSnippetApi.create(formData);
      toast.success('Snippet created successfully');
      await loadSnippets();
      setShowForm(false);
    } catch (err) {
      console.error('Error creating snippet:', err);
      toast.error('Failed to create snippet');
    }
  };

  const handleUpdate = async (formData) => {
    try {
      await codeSnippetApi.update(editingSnippet.id, formData);
      toast.success('Snippet updated successfully');
      await loadSnippets();
      setShowForm(false);
      setEditingSnippet(null);
    } catch (err) {
      console.error('Error updating snippet:', err);
      toast.error('Failed to update snippet');
    }
  };

  const handleDelete = async (snippetId) => {
    if (window.confirm('Are you sure you want to delete this snippet?')) {
      try {
        await codeSnippetApi.delete(snippetId);
        toast.success('Snippet deleted successfully');
        await loadSnippets();
      } catch (err) {
        console.error('Error deleting snippet:', err);
        toast.error('Failed to delete snippet');
      }
    }
  };

  const handleEdit = (snippet) => {
    setEditingSnippet(snippet);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingSnippet(null);
  };

  return (
    <div className="d-flex">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
  
  <div className="flex-grow-1 p-4" style={{ marginLeft: sidebarOpen ? '270px' : '0' }}>
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2>Code Snippets</h2>
      <Button variant="primary" onClick={() => setShowForm(true)}>
        <i className="bi bi-plus-lg me-2"></i>
        Add Snippet
      </Button>
    </div>

    {loading ? (
      <div className="text-center">
        <Spinner animation="border" variant="primary" />
      </div>
    ) : error ? (
      <Alert variant="danger">{error}</Alert>
    ) : snippets.length === 0 ? (
      <div className="text-center text-muted">No snippets found. Create your first snippet!</div>
    ) : (
      <Row xs={1} md={2} lg={2} className="g-4">
        {snippets.map((snippet) => (
          <Col key={snippet.id}>
            <SnippetCard
              snippet={snippet}
              onEdit={handleEdit}
              onDelete={() => handleDelete(snippet.id)}
            />
          </Col>
        ))}
      </Row>
    )}

    <Modal show={showForm} onHide={handleCloseForm} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{editingSnippet ? 'Edit Snippet' : 'Create New Snippet'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SnippetForm
          snippet={editingSnippet}
          onSubmit={editingSnippet ? handleUpdate : handleCreate}
          onCancel={handleCloseForm}
        />
      </Modal.Body>
    </Modal>
  </div>
</div>

  );
}

export default Snippets;
