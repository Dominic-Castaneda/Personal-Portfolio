import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ProfileSection = () => {
  return (
    <div className="profile-section">
      <div className="profile-left">
        <img src="/images/your-photo.png" alt="Dominic Castaneda" className="profile-photo" />
      </div>
      <div className="profile-right">
        <h1>Dominic Castaneda</h1>
        <p>
          Macomb, MI | (586) 651-7484 | dcastaneda@oakland.edu
        </p>
        <p>
          Computer Science | Junior at Oakland University
        </p>
        <a href="/docs/Dominic-Castaneda-Resume.pdf" download className="resume-download">Download Resume</a>
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
