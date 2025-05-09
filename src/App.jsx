import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Snippets from './pages/Snippets'
import Projects from './pages/Projects'
import Topics from './pages/Topics'
import Dashboard from './pages/Dashboard'
import CodeSnippets from './pages/CodeSnippets'
import ProjectForm from './components/ProjectForm'
import SnippetList from './components/SnippetList'
import ProjectDocs from './components/ProjectDocs'
import ProjectsInfo from './pages/ProjectsInfo'
import CodeSnippetsInfo from './components/CodeSnippetsInfo'
import TopicsInfo from './components/TopicsInfo'
import Roadmaps from './pages/Roadmaps'
import Overview from './pages/Overview'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/snippets" element={<CodeSnippetsInfo />} />
          <Route path="/snippets-lists" element={<CodeSnippets />} />
          <Route path="/snippets" element={<SnippetList />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/dashboard/projects" element={<ProjectsInfo />} />
          <Route path="/dashboard/topics" element={<TopicsInfo />} />
          <Route path="/roadmaps" element={<Roadmaps />} />
          <Route path="/dashboard" element={<Overview />} />
          <Route path="projects/:id/docs" element={<ProjectDocs />} />

        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
