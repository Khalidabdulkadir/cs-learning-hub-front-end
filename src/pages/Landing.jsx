import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import Aboutus from './Aboutus';

function Landing() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-3">Level Up Your Coding Journey</h1>
              <p className="lead mb-4">
                Your personal hub for code snippets, projects, and CS learning resources.
                Master programming concepts with hands-on examples.
              </p>
              <div className="cta-buttons">
                <Link to="/dashboard/snippets" className="btn btn-primary btn-lg me-3 mb-2">
                  <i className="bi bi-code-square me-2"></i>
                  Explore Snippets
                </Link>
                <Link to="/dashboard/projects" className="btn btn-outline-primary btn-lg mb-2">
                  <i className="bi bi-folder me-2"></i>
                  Browse Projects
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image text-center">
                <img 
                  src="/hero-image.svg" 
                  alt="Coding Illustration" 
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="features py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose CS Learning Hub?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mb-3">
                    <i className="bi bi-code-square display-4 text-primary"></i>
                  </div>
                  <h3 className="h4 mb-3">Code Snippets</h3>
                  <p className="text-muted">
                    Save and organize your code snippets with syntax highlighting.
                    Share knowledge and learn from others.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mb-3">
                    <i className="bi bi-folder display-4 text-success"></i>
                  </div>
                  <h3 className="h4 mb-3">Project Showcase</h3>
                  <p className="text-muted">
                    Document your projects, share source code, and get feedback
                    from the community.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mb-3">
                    <i className="bi bi-book display-4 text-info"></i>
                  </div>
                  <h3 className="h4 mb-3">CS Topics</h3>
                  <p className="text-muted">
                    Learn computer science concepts with curated resources
                    and practical examples.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats py-5">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-primary">500+</h3>
                <p className="text-muted mb-0">Code Snippets</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-success">100+</h3>
                <p className="text-muted mb-0">Projects</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-info">50+</h3>
                <p className="text-muted mb-0">CS Topics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-4 bg-dark text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">© 2025 CS Learning Hub. All rights reserved.</p>
            </div>
            <div className="col-md-6">
              <ul className="list-inline mb-0 text-center text-md-end">
                <li className="list-inline-item">
                  <a href="https://github.com" className="text-white" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github fs-4"></i>
                  </a>
                </li>
                <li className="list-inline-item ms-3">
                  <a href="https://twitter.com" className="text-white" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-twitter fs-4"></i>
                  </a>
                </li>
                <li className="list-inline-item ms-3">
                  <a href="https://linkedin.com" className="text-white" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin fs-4"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
