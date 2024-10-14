import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`} className="project-card-link">
      <div className="project-card">
        <img src={project.thumbnail} alt={project.title} className="thumbnail" />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
