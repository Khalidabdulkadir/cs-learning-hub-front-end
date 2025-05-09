// Roadmaps.jsx
import React, { useState, useMemo } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
} from 'react-bootstrap';
import './Roadmaps.css'; // Import the CSS for styling

// Sample data: 16 roadmaps
const ROADMAPS = [
  { id: 1, title: 'Frontend Developer', category: 'Web', desc: 'HTML, CSS, JavaScript, React, Vue, Angular', link: 'https://roadmap.sh/frontend', img: 'src/images/Fe.jpg' },
  { id: 2, title: 'Backend Developer', category: 'Web', desc: 'Node.js, Django, Flask, REST, GraphQL', link: 'https://roadmap.sh/backend', img: 'src/images/backend.jpg' },
  { id: 3, title: 'DevOps Engineer', category: 'DevOps', desc: 'Docker, Kubernetes, CI/CD, Terraform', link: 'https://roadmap.sh/devops', img: 'src/images/devops.jpg' },
  { id: 4, title: 'AI / Data Scientist', category: 'AI/ML', desc: 'Python, Pandas, scikit‑learn, TensorFlow', link: 'https://roadmap.sh/ai-data-scientist', img: 'src/images/ai.jpg' },
  { id: 5, title: 'Mobile Developer', category: 'Mobile', desc: 'Flutter, React Native, Swift, Kotlin', link: 'https://roadmap.sh/mobile', img: 'src/images/MD.jpg' },
  { id: 6, title: 'Database Engineer', category: 'Data', desc: 'SQL, NoSQL, Data Modeling, Performance Tuning', link: 'https://roadmap.sh/database', img: 'src/images/DE.jpg' },
  { id: 7, title: 'Cybersecurity', category: 'Security', desc: 'Network Security, Pentesting, Cryptography', link: 'https://roadmap.sh/cyber-security', img: 'src/images/Cyber.jpg' },
  { id: 8, title: 'Cloud Engineer', category: 'Cloud', desc: 'AWS, Azure, GCP, Serverless', link: 'https://roadmap.sh/cloud', img: 'src/images/cloud.jpg' },
  { id: 9, title: 'UI/UX Designer', category: 'Design', desc: 'Figma, Sketch, User Research, Prototyping', link: 'https://roadmap.sh/ui-ux', img: 'src/images/design.jpg' },
  { id: 10, title: 'Software Engineer', category: 'Software', desc: 'Algorithms, System Design, Best Practices', link: 'https://roadmap.sh/software-engineer', img: 'src/images/SE.jpg' },
  { id: 11, title: 'Game Developer', category: 'GameDev', desc: 'Unity, Unreal, C#, Game Mechanics', link: 'https://roadmap.sh/game-dev', img: 'https://i.pinimg.com/736x/62/e4/1c/62e41cda9bd2f75e44dbd60ae55877d0.jpg' },
  { id: 12, title: 'Embedded Systems', category: 'Hardware', desc: 'C, Microcontrollers, RTOS, IoT', link: 'https://roadmap.sh/embedded', img: 'https://i.pinimg.com/736x/74/02/ae/7402ae021ea984c54072920c5c73f2da.jpg' },
  { id: 13, title: 'Blockchain Developer', category: 'Blockchain', desc: 'Ethereum, Solidity, Smart Contracts', link: 'https://roadmap.sh/blockchain', img: 'https://i.pinimg.com/736x/77/6d/5b/776d5b3c59d0b06525058b9fe805cb5f.jpg' },
  { id: 14, title: 'Data Engineer', category: 'Data', desc: 'ETL, Data Warehousing, Apache Spark', link: 'https://roadmap.sh/data-engineer', img: 'src/images/dataengineer.jpg' },
  { id: 15, title: 'ML Operations (MLOps)', category: 'AI/ML', desc: 'Model Deployment, Monitoring, CI/CD for ML', link: 'https://roadmap.sh/mlops', img: 'src/images/mlops.jpg' },
  { id: 16, title: 'IT & Networking', category: 'Network', desc: 'TCP/IP, Routing, Network Admin', link: 'https://roadmap.sh/network', img: 'https://i.pinimg.com/736x/87/10/05/871005a54223842c4b891d8864b67acb.jpg' },
];

const Roadmaps = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(ROADMAPS.map((r) => r.category)));
    return ["All", ...cats];
  }, []);

  const filtered = useMemo(() => {
    return ROADMAPS.filter((r) => {
      return (
        (filter === "All" || r.category === filter) &&
        r.title.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [search, filter]);

  return (
    <section className="py-5" id="roadmaps">
      <Container fluid>
        <h2 className="text-primary fw-bold mb-4">Learning Roadmaps</h2>

        {/* Search & Filter */}
        <Row className="mb-4 gx-2 gy-3 align-items-center">
          <Col xs={12} md={6} lg={4}>
            <InputGroup className="shadow-sm">
              <InputGroup.Text>🔍</InputGroup.Text>
              <Form.Control
                placeholder="Search roadmaps..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col xs={12} md={4} lg={3}>
            <Form.Select
              className="shadow-sm"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        {/* Cards Grid */}
        <Row className="g-4">
          {filtered.map((r) => (
            <Col key={r.id} xs={12} sm={6} lg={4}>
              <Card className="h-100 roadmap-card border-0 shadow-sm">
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={r.img} className="roadmap-img" />
                  <div className="img-overlay">
                    <h5 className="overlay-title text-truncate">{r.title}</h5>
                  </div>
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Text className="text-secondary flex-grow-1">
                    {r.desc}
                  </Card.Text>
                  <Button
                    href={r.link}
                    target="_blank"
                    variant="primary"
                    className="mt-3"
                  >
                    View Roadmap
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
          {filtered.length === 0 && (
            <Col>
              <p className="text-muted">No roadmaps match your search.</p>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Roadmaps;
