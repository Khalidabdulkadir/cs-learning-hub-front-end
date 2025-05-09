import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

const ProjectsInfo = () => {
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
            <h4 className="mb-0">Projects</h4>
          </div>
        </div>

        <div className="dashboard-body p-3 p-lg-4">
          <div className="container-fluid px-0">

      {/* Section Header */}
      <h2 className="text-primary fw-bold mb-3">How Student Projects Work</h2>
      <p className="text-muted mb-4">
        In CS Learning Hub, “projects” are hands‑on coding challenges designed to:
      </p>

      {/* Explanation List */}
      <ul className="list-unstyled text-secondary mb-5">
        <li className="mb-3">
          <strong>1. Choose or Fork a Project:</strong>  
          Browse our curated list of starter templates (React apps, Django backends, ML notebooks).  
          Click “Fork” on GitHub or download the code to your local machine.
        </li>
        <li className="mb-3">
          <strong>2. Local Setup:</strong>  
          Each project repo includes a <code>README.md</code> with setup steps:
          <ul className="mt-2">
            <li><code>npm install</code> or <code>pip install -r requirements.txt</code></li>
            <li><code>npm start</code> or <code>python manage.py runserver</code></li>
          </ul>
        </li>
        <li className="mb-3">
          <strong>3. Build & Experiment:</strong>  
          Modify components, add features, fix bugs.  
          Use console logs, breakpoints, or VS Code debugger to understand flow.
        </li>
        <li className="mb-3">
          <strong>4. Version Control:</strong>  
          Commit your changes with Git, push to your own GitHub fork, and track your progress.
        </li>
        <li className="mb-3">
          <strong>5. Deploy & Share:</strong>  
          Deploy on free platforms (Vercel, Netlify, Render).  
          Share your live URL and GitHub link with peers for feedback.
        </li>
      </ul>

      {/* Benefits */}
      <h4 className="fw-bold text-dark mb-3">Why Projects Help You Learn</h4>
      <div className="row g-4">
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="p-4 border rounded bg-light h-100 shadow-sm">
            <h5 className="fw-semibold mb-3">Deep Understanding</h5>
            <p className="small text-secondary mb-0">
              By building end‑to‑end features, you learn how components, state, and APIs interact.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="p-4 border rounded bg-light h-100 shadow-sm">
            <h5 className="fw-semibold mb-3">Problem‑Solving</h5>
            <p className="small text-secondary mb-0">
              Real projects present real bugs—debugging them sharpens your analytical skills.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="p-4 border rounded bg-light h-100 shadow-sm">
            <h5 className="fw-semibold mb-3">Portfolio Growth</h5>
            <p className="small text-secondary mb-0">
              Completed projects with live demos make your resume stand out to employers.
            </p>
          </div>
        </div>
      </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsInfo;
