import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar }) {
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', icon: 'bi-speedometer2', text: 'Overview', color: 'white' },
    { path: '/dashboard/snippets', icon: 'bi-code-square', text: 'Code Snippets', color: 'white' },
    { path: '/dashboard/projects', icon: 'bi-folder', text: 'Projects', color: 'white' },
    { path: '/dashboard/topics', icon: 'bi-book', text: 'Topics', color: 'white' },
    // { path: '/dashboard/settings', icon: 'bi-gear', text: 'Settings', color: 'secondary' }
  ];

  return (
    <>
      <div className={`sidebar bg-dark text-white ${isOpen ? 'open' : ''}`}>
        <div className="d-flex flex-column h-100">
          <div className="sidebar-header p-3 p-lg-4 border-bottom border-secondary d-flex align-items-center">
            <div className="logo-container me-2">
              <i className="bi bi-code-square fs-3"></i>
            </div>
            <div>
              <h5 className="mb-0 fw-bold">CS Learning Hub</h5>
              <small className="text-muted">Dashboard</small>
            </div>
            <button 
              className="btn btn-link text-white ms-auto d-lg-none"
              onClick={toggleSidebar}
              aria-label="Close sidebar"
            >
              <i className="bi bi-x-lg"></i>
            </button>
            {/* <div className="d-flex align-items-center">
              <div className="logo-container me-2">
                <i className="bi bi-code-square fs-3"></i>
              </div>
              <div>
                <h5 className="mb-0 fw-bold">CS Learning Hub</h5>
                <small className="text-muted">Dashboard</small>
              </div>
              <button 
                className="btn btn-link text-white ms-auto d-lg-none"
                onClick={toggleSidebar}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div> */}
          </div>

          <div className="sidebar-content p-3">
            <ul className="nav flex-column gap-2">
              {menuItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link d-flex align-items-center py-3 px-3 rounded-3 ${location.pathname === item.path ? `active bg-${item.color}` : 'text-white hover-effect'}`}
                  >
                    <div className={`icon-container me-3 bg-${item.color} bg-opacity-25`}>
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <span>{item.text}</span>
                    {location.pathname === item.path && (
                      <i className="bi bi-chevron-right ms-auto"></i>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-footer mt-auto p-4 border-top border-secondary">
            <div className="d-flex align-items-center">
              <div className="avatar-container me-3">
                <img 
                  src="https://github.com/github.png" 
                  alt="Profile"
                  className="rounded-circle"
                  width="40"
                  height="40"
                />
              </div>
              <div>
                <h6 className="mb-0">John Doe</h6>
                <small className="text-muted">Developer</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      <div 
        className={`sidebar-overlay ${isOpen ? 'show' : ''}`}
        onClick={toggleSidebar}
        role="button"
        tabIndex="-1"
        aria-label="Close sidebar"
      />
    </>
  )
}

export default Sidebar
