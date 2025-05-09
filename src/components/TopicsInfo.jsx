import React, { useState } from "react";
import {
  FaLock,
  FaDatabase,
  FaRobot,
  FaNetworkWired,
  FaCogs,
} from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import Sidebar from "./Sidebar";

const TopicsInfo = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const topics = [
    {
      icon: <FaLock className="text-primary fs-2" />,
      title: "Cybersecurity",
      desc: "Learn to protect systems, networks and data from digital attacks.",
      roadmap: "/roadmaps/cybersecurity",
    },
    {
      icon: <GiArtificialIntelligence className="text-success fs-2" />,
      title: "Artificial Intelligence",
      desc: "Explore intelligent algorithms for perception, reasoning, and decision‑making.",
      roadmap: "/roadmaps/ai",
    },
    {
      icon: <FaRobot className="text-warning fs-2" />,
      title: "Machine Learning",
      desc: "Build models that learn from data: regression, classification, clustering.",
      roadmap: "/roadmaps/ml",
    },
    {
      icon: <FaDatabase className="text-info fs-2" />,
      title: "Data Science",
      desc: "Analyze and visualize data to gain insights and drive decisions.",
      roadmap: "/roadmaps/ds",
    },
    {
      icon: <FaCogs className="text-danger fs-2" />,
      title: "Software Engineering",
      desc: "Master design, development, testing and maintenance of software systems.",
      roadmap: "/roadmaps/se",
    },
    {
      icon: <FaNetworkWired className="text-secondary fs-2" />,
      title: "IT & Networking",
      desc: "Understand network architectures, protocols, and system administration.",
      roadmap: "/roadmaps/it",
    },
  ];

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
            <h4 className="mb-0">Topics</h4>
          </div>
        </div>

        <div className="dashboard-body p-3 p-lg-4">
          <div className="container-fluid px-0">
            <h2 className="text-primary fw-bold mb-3">Explore CS Topics</h2>
            <p className="text-muted mb-4 fs-5">
              Dive into different fields of computer science to find what excites you.
              Each topic includes a guided roadmap to take you from beginner to
              proficient.
            </p>
            <div className="row g-4">
              {topics.map((t, idx) => (
                <div className="col-md-4" key={idx}>
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body d-flex flex-column">
                      <div className="mb-3">{t.icon}</div>
                      <h5 className="card-title">{t.title}</h5>
                      <p className="card-text text-secondary flex-grow-1">{t.desc}</p>
                      <a href={t.roadmap} className="btn btn-outline-primary mt-2">
                        View Roadmap
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicsInfo;
