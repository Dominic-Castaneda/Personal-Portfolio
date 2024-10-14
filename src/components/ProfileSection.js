import React from 'react';

const ProfileSection = () => {
  return (
    <div className="profile-section">
      <img src="/images/your-photo.jpg" alt="Dominic Castaneda" className="profile-photo" />
      <h2>Dominic Castaneda</h2>
      <p>
        Computer Science major with a focus on automation and software development. 
        Passionate about building software solutions and solving real-world problems.
      </p>
      <a href="/path-to-resume.pdf" download className="resume-download">Download Resume</a>
      <div className="contact-info">
        <p>Email: dominic@example.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">your-linkedin</a></p>
      </div>
    </div>
  );
};

export default ProfileSection;
