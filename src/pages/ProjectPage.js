import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects'; // Array of project data

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  return (
    <div className="project-page">
      <h1>{project.title}</h1>
      <img src={project.thumbnail} alt={project.title} className="project-image" />
      <p>{project.fullDescription}</p>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectPage;
