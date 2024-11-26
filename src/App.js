import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProjectGrid from './components/ProjectGrid';
import ProfileSection from './components/ProfileSection';
import Footer from './components/Footer';
import ProjectPage from './pages/ProjectPage'; // Import ProjectPage for routing
import GetToKnowMe from './components/GetToKnowMe'; // Import GetToKnowMe component
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
              <GetToKnowMe />    {/* Get to Know Me Section with a row of pictures */}
              <ProjectGrid />      {/* Grid of projects with filters */}
              <Footer />           {/* Footer */}
            </>
          } 
        />
        {/* Project Details Page */}
        <Route path="/project/:id" element={<ProjectPage />} />

        {/* Casino Game Page */}
        <Route
          path="/Casino-Game"
          element={
            <iframe
              src="/Casino-Game/index.html" // Directs to the hosted game
              width="100%"
              height="100%"
              style={{ border: 'none', height: '100vh' }}
              title="Casino Game"
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
