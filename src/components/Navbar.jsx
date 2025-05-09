import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="bi bi-code-square me-2"></i>
          CS Learning Hub
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-1">
              <Link 
                className={`nav-link px-3 rounded-pill ${location.pathname === '/' ? 'active bg-white text-primary' : ''}`} 
                to="/"
              >
                <i className="bi bi-house-door me-1"></i>
                Home
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link 
                className={`nav-link px-3 rounded-pill ${location.pathname === '/snippets' ? 'active bg-white text-primary' : ''}`} 
                to="/snippets"
              >
                <i className="bi bi-code-slash me-1"></i>
                Snippets
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link 
                className={`nav-link px-3 rounded-pill ${location.pathname === '/projects' ? 'active bg-white text-primary' : ''}`} 
                to="/projects"
              >
                <i className="bi bi-github me-1"></i>
                Projects
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link 
                className={`nav-link px-3 rounded-pill ${location.pathname === '/roadmaps' ? 'active bg-white text-primary' : ''}`} 
                to="/roadmaps"
              >
                <i className="bi bi-book me-1"></i>
                Road maps
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link 
                className={`nav-link px-3 rounded-pill ${location.pathname === '/dashboard' ? 'active bg-white text-primary' : ''}`} 
                to="/dashboard"
              >
                <i className="bi bi-gear me-1"></i>
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
