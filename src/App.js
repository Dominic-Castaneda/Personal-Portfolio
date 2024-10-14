import React from 'react';
import ProjectGrid from './components/ProjectGrid';
import ProfileSection from './components/ProfileSection'; // New profile section
import Footer from './components/Footer'; // Footer component
import './App.css'; // Import custom styles

function App() {
  return (
    <div className="app">
      <ProfileSection />  {/* Profile Section for bio, picture, resume, etc */}
      <ProjectGrid />      {/* Grid of projects with filters */}
      <Footer />           {/* Footer */}
    </div>
  );
}

export default App;
