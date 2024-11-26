import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import projects from '../data/projects';

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-popup">
      <div className="project-content">
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft size={20} /> Back to Projects
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
    </div>
  );
};

export default ProjectPage;
