function TopicCard({ title, content, link }) {
  return (
    <div className="card shadow-sm hover-card h-100">
      <div className="card-body d-flex flex-column">
        <div className="d-flex align-items-center mb-3">
          <div className="rounded-circle bg-primary bg-opacity-10 p-2 me-3">
            <i className="bi bi-book text-primary"></i>
          </div>
          <h5 className="card-title mb-0 fw-bold">{title}</h5>
        </div>
        <p className="card-text text-muted flex-grow-1">{content}</p>
        <div className="mt-3">
          <a href={link} 
             target="_blank" 
             rel="noopener noreferrer" 
             className="btn btn-outline-primary w-100">
            <i className="bi bi-arrow-right-circle me-2"></i>
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopicCard
