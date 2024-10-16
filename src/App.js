import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProjectGrid from './components/ProjectGrid';
import ProfileSection from './components/ProfileSection';
import Footer from './components/Footer';
import ProjectPage from './pages/ProjectPage'; // Import ProjectPage for routing
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        {/* Home Page */}
        <Route 
          path="/" 
          element={
            <>
              <ProfileSection />  {/* Profile Section for bio, picture, resume, etc */}
              <ProjectGrid />      {/* Grid of projects with filters */}
              <Footer />           {/* Footer */}
            </>
          } 
        />
        {/* Project Details Page */}
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
