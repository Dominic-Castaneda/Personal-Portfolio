import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import projects from '../data/projects'; // Project data array

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));
  const history = useHistory();

  return (
    <div className="project-page">
      <button className="back-button" onClick={() => history.goBack()}>
        ← Back to Projects
      </button>
      <h1>{project.title}</h1>
      <img src={project.thumbnail} alt={project.title} className="project-image-small" />
      {project.additionalImages && project.additionalImages.map((image, idx) => (
        <img key={idx} src={image} alt={`${project.title} screenshot ${idx}`} className="additional-image" />
      ))}
      <p>{project.fullDescription}</p>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectPage;
