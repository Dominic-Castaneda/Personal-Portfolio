import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons

const ProfileSection = () => {
  return (
    <div className="profile-section">
      <div className="profile-left">
        <img src="/images/your-photo.jpg" alt="Dominic Castaneda" className="profile-photo" />
      </div>
      <div className="profile-right">
        <h2>Dominic Castaneda</h2>
        <p>
          Computer Science major with a focus on automation and software development. 
          Passionate about building software solutions and solving real-world problems.
        </p>
        <a href="/path-to-resume.pdf" download className="resume-download">Download Resume</a>
        <div className="contact-info">
          <a href="https://www.linkedin.com/in/dominic-castaneda-982232292/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="contact-icon" />
          </a>
          <a href="https://github.com/Dominic-Castaneda" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="contact-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
