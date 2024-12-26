import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home.js';
import Header from './components/header.js';
import About from './components/about.js';
import Projects from './components/project.js';
import Resume from './components/resume.js';
import Video from './components/VideoBackground.js';
import Footer from './components/footer.js';
import React from 'react';


function App() {
  return (
    <Router>
      <div>
        
        <Header />
        <Video />

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
