import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card-container">
      <Link to={`/project/${project.id}`} className="project-card-link">
        <div className="project-card">
          <img src={project.thumbnail} alt={project.title} className="thumbnail" />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-details" style={{ marginBottom: '1rem' }}>
            <div className="project-category">Category: {project.category}</div>
            <div className="project-languages">Languages: {project.languages.join(', ')}</div>
          </div>
          <div className="project-progress">
            <div
              className="project-progress-bar"
              style={{ width: `${project.progress}%` }}
            />
          </div>
          <div className="project-progress-percentage">
            {project.progress}% Complete
          </div>
        </div>
      </Link>
      {project.liveLink && (
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="play-now-button"
        >
          Play Now
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
