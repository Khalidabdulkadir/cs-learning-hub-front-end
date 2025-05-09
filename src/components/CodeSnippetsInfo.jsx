import React, { useState, useEffect } from 'react';
import { FaDatabase, FaLock, FaClipboard, FaBolt } from "react-icons/fa";
import Sidebar from "./Sidebar";

const CodeSnippetsInfo = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="dashboard-container d-flex">
      {!isMobile && <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />}
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
            <h4 className="mb-0">Code Snippets</h4>
          </div>
        </div>

        <div className="dashboard-body p-3 p-lg-4">
          <div className="container-fluid px-0">

      {/* Header */}
      <h2 className="text-primary fw-bold mb-3">Why Use Code Snippets?</h2>
      <p className="text-muted mb-4 fs-5">
        Ready‑to‑use code snippets let you focus on learning logic and architecture instead of plumbing.  
        Grab proven CRUD, authentication, and UI bits—and plug them into your apps in seconds.
      </p>

      {/* Feature Cards */}
      <div className="row g-4 mb-5">
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="p-4 border rounded bg-light h-100 text-center shadow-sm">
            <FaDatabase className="text-primary fs-2 mb-3" />
            <h6 className="fw-semibold">CRUD Operations</h6>
            <p className="small text-secondary mb-0">
              Create, Read, Update, Delete boilerplate code for any model—no manual setup.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="p-4 border rounded bg-light h-100 text-center shadow-sm">
            <FaLock className="text-success fs-2 mb-3" />
            <h6 className="fw-semibold">Authentication</h6>
            <p className="small text-secondary mb-0">
              Secure login/register flows (JWT, sessions) ready to drop into your backend.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="p-4 border rounded bg-light h-100 text-center shadow-sm">
            <FaClipboard className="text-info fs-2 mb-3" />
            <h6 className="fw-semibold">UI Components</h6>
            <p className="small text-secondary mb-0">
              Prebuilt React/Bootstrap components—forms, tables, modals—for instant use.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="p-4 border rounded bg-light h-100 text-center shadow-sm">
            <FaBolt className="text-warning fs-2 mb-3" />
            <h6 className="fw-semibold">Speed & Focus</h6>
            <p className="small text-secondary mb-0">
              Spend less time wiring code and more on learning core computer‑science concepts.
            </p>
          </div>
        </div>
      </div>

      {/* How to Use */}
      <h5 className="fw-bold mb-3">How to Use Snippets</h5>
      <div className="row g-4 mb-4">
        <div className="col-12 col-md-6 col-xl-3">
          <div className="p-3 border rounded bg-white">
            <strong>Browse by Tag</strong>
            <p className="small text-secondary mb-0">Select "#django‑auth" or "#react‑crud" to find exactly what you need.</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="p-3 border rounded bg-white">
            <strong>Copy & Paste</strong>
            <p className="small text-secondary mb-0">Click the "Copy" button on any snippet—your code is in the clipboard.</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="p-3 border rounded bg-white">
            <strong>Customize</strong>
            <p className="small text-secondary mb-0">Tweak variable names, adapt logic—snippets are fully editable.</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="p-3 border rounded bg-white">
            <strong>Learn by Example</strong>
            <p className="small text-secondary mb-0">Study the snippet's implementation to understand best practices.</p>
          </div>
        </div>
      </div>

      {/* Final Tip */}
      <div className="alert alert-primary">
        💡 <strong>Tip:</strong> Combine snippets—e.g., use auth boilerplate with CRUD—to build full features in minutes.
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeSnippetsInfo;
