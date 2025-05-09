import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home', icon: 'bi-house-door' },
    { path: '/snippets', label: 'Snippets', icon: 'bi-code-slash' },
    { path: '/projects', label: 'Projects', icon: 'bi-github' },
    { path: '/roadmaps', label: 'Road maps', icon: 'bi-book' },
    { path: '/dashboard', label: 'Dashboard', icon: 'bi-gear' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-white sticky-top shadow-sm border-bottom border-info">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/">
          <i className="bi bi-code-square me-2 text-dark"></i>
          CS Learning Hub
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const textClass = isActive ? 'text-white fw-semibold' : 'text-dark';
              const bgClass = isActive ? 'bg-primary' : 'hover-glow';

              return (
                <li className="nav-item mx-1" key={link.path}>
                  <Link className={`nav-link px-3 rounded-pill ${bgClass} ${textClass}`} to={link.path}>
                    <i className={`bi ${link.icon} me-1 ${textClass}`}></i>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
