import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProjectGrid from './components/ProjectGrid';
import ProjectPage from './pages/ProjectPage';
import Footer from './components/Footer';
import './App.css'; // For styling

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProjectGrid />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
