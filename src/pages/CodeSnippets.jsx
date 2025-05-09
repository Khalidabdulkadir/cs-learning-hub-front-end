import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { codeSnippetApi } from '../services/api';
import SnippetCard from '../components/SnippetCard';

function CodeSnippets() {
  const [snippets, setSnippets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSnippets();
  }, []);

  const loadSnippets = async () => {
    try {
      const response = await codeSnippetApi.getAll();
      setSnippets(response.data);
    } catch (error) {
      console.error('Error loading snippets:', error);
      toast.error('Failed to load code snippets');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="p-4"
      style={{ minHeight: '100vh'}}
    >
      <h2 className="mb-4">Code Snippets</h2>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row g-4">
          {snippets.map((snippet) => (
            <div key={snippet.id} className="col-12">
              <SnippetCard snippet={snippet} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CodeSnippets;
