import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { FaFolderOpen, FaLayerGroup, FaCode } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import "./Overview.css";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Overview = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [totalProjects, setTotalProjects] = useState(0);
  const [totalSnippets, setTotalSnippets] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const totalTopics = 58;

  // Check for mobile view on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile(); // Initial check
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Fetch total projects and code snippets count from the API
  useEffect(() => {
    const fetchTotalProjects = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/projects/project_count/");
        const data = await response.json();
        setTotalProjects(data.total_projects);
      } catch (error) {
        console.error("Error fetching project count:", error);
      }
    };

    const fetchTotalSnippets = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/snippets/snippet_count/");
        const data = await response.json();
        setTotalSnippets(data.total_snippets);
      } catch (error) {
        console.error("Error fetching snippet count:", error);
      }
    };

    fetchTotalProjects();
    fetchTotalSnippets();
  }, []);

  // Chart data
  const data = {
    labels: ["Project A", "Project B", "Project C", "Project D"],
    datasets: [
      {
        label: "Topics",
        data: [12, 20, 14, 12],
        backgroundColor: "#0d6efd",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows chart to resize properly
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { 
        beginAtZero: true,
        ticks: {
          stepSize: 5
        }
      },
    },
  };

  return (
    <>
    
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
    <div className="dashboard-container d-flex">

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
            <h4 className="mb-0">Overview</h4>
          </div>
        </div>

        <div className="dashboard-body p-3 p-lg-4">
          <div className="container-fluid px-0">
            {/* Cards Section - Stack vertically on mobile */}
            <div className="row g-3 mb-4">
              <div className="col-12 col-md-4">
                <div className="card shadow-sm border-0 p-3 d-flex flex-row align-items-center">
                  <div className="me-3 bg-primary bg-opacity-10 text-primary p-3 rounded-circle">
                    <FaFolderOpen size={isMobile ? 20 : 24} />
                  </div>
                  <div>
                    <h6 className="text-muted mb-0">Total Projects</h6>
                    <h4 className="mb-0">{totalProjects}</h4>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="card shadow-sm border-0 p-3 d-flex flex-row align-items-center">
                  <div className="me-3 bg-success bg-opacity-10 text-success p-3 rounded-circle">
                    <FaLayerGroup size={isMobile ? 20 : 24} />
                  </div>
                  <div>
                    <h6 className="text-muted mb-0">Total Topics</h6>
                    <h4 className="mb-0">{totalTopics}</h4>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="card shadow-sm border-0 p-3 d-flex flex-row align-items-center">
                  <div className="me-3 bg-info bg-opacity-10 text-info p-3 rounded-circle">
                    <FaCode size={isMobile ? 20 : 24} />
                  </div>
                  <div>
                    <h6 className="text-muted mb-0">Code Snippets</h6>
                    <h4 className="mb-0">{totalSnippets}</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Chart Section - Full width on mobile */}
            <div className="card shadow-sm border-0 p-3">
              <h5 className="mb-3">Topics per Project</h5>
              <div style={{ height: isMobile ? '250px' : '350px' }}>
                <Bar data={data} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Overview;