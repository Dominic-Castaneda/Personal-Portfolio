import React from 'react';
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaUniversity } from 'react-icons/fa';

const ProfileSection = () => {
  return (
    <div className="profile-section">
      <div className="profile-left">
        <img
          src="/images/your-photo.png"
          alt="Dominic Castaneda"
          className="profile-photo"
        />
      </div>

      <div className="profile-right">
        <h1>Dominic Castaneda</h1>
        <p className="location">Macomb, MI</p>

        <p className="contact-line">
          <FaPhone className="inline-icon" /> (586) 651-7484 &nbsp; | &nbsp;
          <FaEnvelope className="inline-icon" /> dcastaneda@oakland.edu
        </p>

        <p className="education">
          <FaUniversity className="inline-icon" /> Oakland University
        </p>

        <p>
          <strong>Major:</strong> Mechatronics and Robotics Engineering <br />
          <strong>Minor:</strong> Computer Science
        </p>

        <a
          href="/docs/Dominic-Castaneda-Resume.pdf"
          download
          className="resume-download"
        >
          Download Resume
        </a>

        <div className="contact-info">
          <a
            href="https://www.linkedin.com/in/dominic-castaneda-982232292/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="contact-icon" />
          </a>
          <a
            href="https://github.com/Dominic-Castaneda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="contact-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
