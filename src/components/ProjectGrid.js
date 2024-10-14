import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects'; // Example projects data

const ProjectGrid = () => {
  const categories = [...new Set(projects.map(project => project.category))];

  return (
    <div className="project-sections">
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="project-grid">
            {projects
              .filter(project => project.category === category)
              .map(filteredProject => (
                <ProjectCard key={filteredProject.id} project={filteredProject} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
