import React, { useState } from 'react';
import axios from 'axios';
import FileUpload from './FileUpload';
import './ProjectForm.css';
import Sidebar from './Sidebar';

const ProjectForm = ({ onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    github_url: '',
    demo_url: '',
    difficulty_level: 'intermediate',
    image: null,
    source_code: null,
  });
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();

    // Append fields
    for (const key in formData) {
      if (formData[key]) {
        data.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post('http://localhost:8000/api/projects/', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Success:', response.data);
      if (onSuccess) onSuccess(response.data);
    } catch (error) {
      console.error('Submission error:', error.response || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    
    <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

    <form onSubmit={handleSubmit} className="project-form" style={{ marginLeft: sidebarOpen ? '250px' : '0' }}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>GitHub URL</label>
        <input
          type="url"
          name="github_url"
          value={formData.github_url}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Demo URL (Optional)</label>
        <input
          type="url"
          name="demo_url"
          value={formData.demo_url}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Difficulty Level</label>
        <select
          name="difficulty_level"
          value={formData.difficulty_level}
          onChange={handleChange}
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div className="form-group">
        <label>Project Image</label>
        <FileUpload
          type="image"
          accept="image/*"
          onFileSelect={(file) => setFormData(prev => ({ ...prev, image: file }))}
        />
      </div>

      <div className="form-group">
        <label>Source Code (ZIP or PDF)</label>
        <FileUpload
          type="file"
          accept=".zip,.pdf"
          onFileSelect={(file) => setFormData(prev => ({ ...prev, source_code: file }))}
        />
      </div>

      <div className="form-actions">
        <button type="submit" disabled={loading}>
          {loading ? 'Saving...' : 'Save Project'}
        </button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
    </>
  );
};

export default ProjectForm;
