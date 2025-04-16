import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaGithub } from 'react-icons/fa';
import projects from '../data/projects';

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <div className="project-blog">Project not found</div>;

  return (
    <div className="project-blog">
      <div className="blog-container">
        <button className="blog-back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft /> &nbsp; Back to Projects
        </button>

        <h1 className="blog-title">{project.title}</h1>

        <img
          src={project.thumbnail}
          alt={project.title}
          className="blog-cover-image"
        />

        <div className="blog-meta">
          <p>
            <strong>Category:</strong> {project.category} <br />
            <strong>Languages:</strong> {project.languages.join(', ')} <br />
            <strong>Progress:</strong> {project.progress}%
          </p>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-github-link"
          >
            <FaGithub /> View on GitHub
          </a>
        </div>

        {project.sections ? (
          <div className="blog-content">
            {project.sections.map((section, index) => (
              <div key={index} className="blog-section">
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
                {section.image && (
                  <img
                    src={section.image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="blog-inline-image"
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          project.fullDescription && (
            <div className="blog-content">
              <p>{project.fullDescription}</p>
            </div>
          )
        )}

        {project.additionalImages?.filter(img => img).length > 0 && (
          <div className="blog-gallery">
            {project.additionalImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${project.title} screenshot ${index + 1}`}
                className="blog-gallery-image"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
