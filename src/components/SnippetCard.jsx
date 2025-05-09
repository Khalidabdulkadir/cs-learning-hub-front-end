// SnippetCard.js
import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function SnippetCard({ snippet }) {
  const [showModal, setShowModal] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
  };

  return (
    <>
      <Card className="shadow-sm mb-4 snippet-card">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Card.Title className="h5 mb-0">{snippet.title}</Card.Title>
            <Button size="sm" variant="outline-primary" onClick={() => setShowModal(true)}>
              View More
            </Button>
          </div>
          <Card.Text className="text-muted">{snippet.description}</Card.Text>
          <SyntaxHighlighter 
            language={snippet.language || 'javascript'} 
            style={vscDarkPlus}
            customStyle={{
              borderRadius: '0.5rem',
              padding: '0.75rem',
              fontSize: '0.8rem',
              backgroundColor: '#1E1E1E',
              maxHeight: '200px',
              overflowY: 'auto'
            }}
            showLineNumbers
          >
            {snippet.code.slice(0, 200) + (snippet.code.length > 200 ? '...' : '')}
          </SyntaxHighlighter>
        </Card.Body>
      </Card>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{snippet.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-muted">{snippet.description}</p>
          <SyntaxHighlighter 
            language={snippet.language} 
            style={vscDarkPlus}
            customStyle={{ borderRadius: '0.5rem', padding: '1rem', fontSize: '0.9rem' }}
            showLineNumbers
          >
            {snippet.code}
          </SyntaxHighlighter>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleCopy}>Copy Code</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SnippetCard;
