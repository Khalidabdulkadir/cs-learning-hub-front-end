import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './Dashboard.css';
import { codeSnippetApi } from '../services/api';  // Assuming the API exists
import Overview from './Overview';
import ProjectsInfo from './ProjectsInfo';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('snippets');

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    language: '',
    tags: '',
    link: '',
    image: null
  });
  
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent submission if already loading
    if (loading) return;

    setLoading(true);

    try {
      // Send the form data to your API to create the new snippet
      await codeSnippetApi.create(formData);
      console.log('Snippet created:', formData);

      // Reset the form after successful creation
      setFormData({
        title: '',
        description: '',
        content: '',
        language: '',
        tags: '',
        link: '',
        image: null
      });

      alert('Snippet created successfully');
    } catch (error) {
      console.error('Error creating snippet:', error);
      alert('Failed to create snippet');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-container d-flex">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className={`dashboard-content flex-grow-1 ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="dashboard-header bg-white border-bottom sticky-top">
          <div className="d-flex align-items-center p-3">
            <button
              className="btn btn-link text-dark d-lg-none me-2"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar"
            >
              <i className="bi bi-list fs-4"></i>
            </button>
            <h4 className="mb-0">Dashboard</h4>
          </div>
        </div>
        <div className="dashboard-body p-3 p-lg-4">
          <Overview/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
