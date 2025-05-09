import React, { useState, useEffect } from 'react';
import { tagApi } from '../services/api';
import './SnippetForm.css';

const SnippetForm = ({ snippet, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    code: '',
    language: 'javascript',
    tag_ids: [],
    ...snippet
  });
  
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadTags();
  }, []);

  const loadTags = async () => {
    try {
      const response = await tagApi.getAll();
      setTags(response.data);
    } catch (error) {
      console.error('Error loading tags:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTagChange = (e) => {
    const selectedTags = Array.from(e.target.selectedOptions, option => parseInt(option.value));
    setFormData(prev => ({ ...prev, tag_ids: selectedTags }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await onSubmit(formData);
    } catch (error) {
      console.error('Error submitting snippet:', error);
    } finally {
      setLoading(false);
    }
  };

  const languageOptions = [
    'javascript',
    'python',
    'java',
    'cpp',
    'csharp',
    'php',
    'ruby',
    'swift',
    'go',
    'rust',
    'html',
    'css',
    'sql'
  ];

  return (
    <form onSubmit={handleSubmit} className="snippet-form">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="language">Language</label>
        <select
          id="language"
          name="language"
          value={formData.language}
          onChange={handleChange}
          required
          className="form-control"
        >
          {languageOptions.map(lang => (
            <option key={lang} value={lang}>
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="code">Code</label>
        <textarea
          id="code"
          name="code"
          value={formData.code}
          onChange={handleChange}
          required
          className="form-control code-editor"
          spellCheck="false"
        />
      </div>

      <div className="form-group">
        <label htmlFor="tags">Tags</label>
        <select
          id="tags"
          multiple
          value={formData.tag_ids}
          onChange={handleTagChange}
          className="form-control"
        >
          {tags.map(tag => (
            <option key={tag.id} value={tag.id}>
              {tag.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Saving...' : 'Save Snippet'}
        </button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default SnippetForm;
