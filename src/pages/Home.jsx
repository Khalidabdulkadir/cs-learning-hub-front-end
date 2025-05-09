import { Link } from 'react-router-dom'
import './Home.css'
import About from '../components/About '

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section text-white py-5 position-relative overflow-hidden w-100 vw-100">
        <div className="hero-background position-absolute top-0 start-0 w-100 h-100">
          <div className="gradient-overlay w-100 h-100" style={{
            background: 'linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%)',
            opacity: 0.9
          }}></div>
          
          {/* Animated background shapes */}
          <div className="shapes-overlay w-100 h-100" style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%), ' +
                      'radial-gradient(circle at 70% 20%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)'
          }}></div>
        </div>

        <div className="container position-relative">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-7 hero-content">
              <span className="badge bg-white text-primary px-3 py-2 mb-3 rounded-pill fw-bold">
                <i className="bi bi-lightning-charge-fill me-1"></i>
                Learn. Code. Create.
              </span>
              <h1 className="display-3 fw-bold mb-4 lh-sm">
                Your Gateway to<br />
                Computer Science Excellence
              </h1>
              <p className="lead mb-5 text-white-75 fw-normal">
                Discover a comprehensive collection of code snippets, learning resources,
                and real-world projects. Perfect for students, developers, and tech enthusiasts.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/snippets" className="btn btn-light btn-lg px-4 rounded-pill shadow-sm">
                  <i className="bi bi-code-slash me-2"></i>
                  Browse Snippets
                </Link>
                <Link to="/topics" className="btn btn-outline-light btn-lg px-4 rounded-pill">
                  <i className="bi bi-book me-2"></i>
                  Explore Topics
                </Link>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block text-center hero-content">
              <div className="position-relative">
                <div className="position-absolute top-50 start-50 translate-middle w-100 h-100 rounded-circle" style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)'
                }}></div>
                <i className="bi bi-code-square display-1 text-white opacity-75"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <About />
      {/* Features Section */}
      <div className="container py-5">
        <div className="text-center mb-5 hero-content">
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-bold mb-3">
            <i className="bi bi-stars me-1"></i>
            Features
          </span>
          <h2 className="display-6 fw-bold mb-3">What We Offer</h2>
          <p className="text-muted mb-0">Everything you need to excel in computer science</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="feature-card p-4">
              <div className="feature-icon">
                <i className="bi bi-code-slash text-primary display-6"></i>
              </div>
              <h5 className="fw-bold mb-3">Code Snippets</h5>
              <p className="text-muted mb-4">Find ready-to-use code snippets for common programming tasks and algorithms. Includes syntax highlighting and easy copying.</p>
              <div className="d-flex justify-content-between align-items-center">
                <Link to="/snippets" className="btn btn-outline-primary rounded-pill px-4">
                  View Snippets
                </Link>
                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
                  100+ Examples
                </span>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <div className="feature-card p-4">
              <div className="feature-icon">
                <i className="bi bi-github text-primary display-6"></i>
              </div>
              <h5 className="fw-bold mb-3">Learning Projects</h5>
              <p className="text-muted mb-4">Discover curated GitHub projects with step-by-step guides. Perfect for building your portfolio and gaining practical experience.</p>
              <div className="d-flex justify-content-between align-items-center">
                <Link to="/projects" className="btn btn-outline-primary rounded-pill px-4">
                  Browse Projects
                </Link>
                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
                  50+ Projects
                </span>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <div className="feature-card p-4">
              <div className="feature-icon">
                <i className="bi bi-book text-primary display-6"></i>
              </div>
              <h5 className="fw-bold mb-3">CS Topics</h5>
              <p className="text-muted mb-4">Comprehensive guides on algorithms, data structures, system design, and more. Learn at your own pace with our structured content.</p>
              <div className="d-flex justify-content-between align-items-center">
                <Link to="/topics" className="btn btn-outline-primary rounded-pill px-4">
                  Explore Topics
                </Link>
                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
                  20+ Topics
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="feature-card p-4">
              <div className="feature-icon">
                <i className="bi bi-lightning text-primary display-6"></i>
              </div>
              <h5 className="fw-bold mb-3">Quick Practice</h5>
              <p className="text-muted mb-4">Interactive coding challenges and quizzes to test your knowledge. Get instant feedback and improve your skills.</p>
              <div className="d-flex justify-content-between align-items-center">
                <Link to="/practice" className="btn btn-outline-primary rounded-pill px-4">
                  Start Practice
                </Link>
                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
                  Daily Updates
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="feature-card p-4">
              <div className="feature-icon">
                <i className="bi bi-people text-primary display-6"></i>
              </div>
              <h5 className="fw-bold mb-3">Community</h5>
              <p className="text-muted mb-4">Connect with fellow learners, share your knowledge, and participate in discussions. Learn together, grow together.</p>
              <div className="d-flex justify-content-between align-items-center">
                <Link to="/community" className="btn btn-outline-primary rounded-pill px-4">
                  Join Community
                </Link>
                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
                  Active Users
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="feature-card p-4">
              <div className="feature-icon">
                <i className="bi bi-mortarboard text-primary display-6"></i>
              </div>
              <h5 className="fw-bold mb-3">Learning Paths</h5>
              <p className="text-muted mb-4">Structured learning paths for different career goals. From beginner to advanced, we've got you covered.</p>
              <div className="d-flex justify-content-between align-items-center">
                <Link to="/paths" className="btn btn-outline-primary rounded-pill px-4">
                  View Paths
                </Link>
                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
                  5+ Paths
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-light py-5 mt-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="stats-card text-center">
                <div className="display-4 fw-bold text-primary mb-2">100+</div>
                <p className="text-muted mb-0">Code Snippets</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stats-card text-center">
                <div className="display-4 fw-bold text-primary mb-2">50+</div>
                <p className="text-muted mb-0">Learning Projects</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stats-card text-center">
                <div className="display-4 fw-bold text-primary mb-2">20+</div>
                <p className="text-muted mb-0">CS Topics</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonial-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-bold mb-3">
              <i className="bi bi-chat-quote me-1"></i>
              Testimonials
            </span>
            <h2 className="display-6 fw-bold mb-3">What Our Users Say</h2>
            <p className="text-muted mb-0">Hear from students and developers who use CS Learning Hub</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="testimonial-card">
                <img src="https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff" alt="John Doe" className="testimonial-avatar" />
                <h5 className="fw-bold mb-1">John Doe</h5>
                <p className="text-muted small mb-3">Computer Science Student</p>
                <p className="mb-0">"CS Learning Hub has been instrumental in my learning journey. The code snippets and projects have helped me understand complex concepts easily."</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <img src="https://ui-avatars.com/api/?name=Jane+Smith&background=BC0D8A&color=fff" alt="Jane Smith" className="testimonial-avatar" />
                <h5 className="fw-bold mb-1">Jane Smith</h5>
                <p className="text-muted small mb-3">Software Developer</p>
                <p className="mb-0">"The quality of content and the structured approach to learning makes this platform stand out. It's my go-to resource for staying updated."</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <img src="https://ui-avatars.com/api/?name=Mike+Johnson&background=8ABC0D&color=fff" alt="Mike Johnson" className="testimonial-avatar" />
                <h5 className="fw-bold mb-1">Mike Johnson</h5>
                <p className="text-muted small mb-3">Tech Enthusiast</p>
                <p className="mb-0">"Whether you're a beginner or an experienced developer, CS Learning Hub has something valuable for everyone. Highly recommended!"</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-4">Ready to Start Learning?</h2>
              <p className="lead mb-5">Join thousands of students and developers who are already benefiting from our platform.</p>
              <div className="d-flex gap-3 justify-content-center">
                <Link to="/snippets" className="btn btn-light btn-lg px-4 rounded-pill">
                  <i className="bi bi-code-slash me-2"></i>
                  Get Started
                </Link>
                <Link to="/topics" className="btn btn-outline-light btn-lg px-4 rounded-pill">
                  <i className="bi bi-book me-2"></i>
                  Browse Topics
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
