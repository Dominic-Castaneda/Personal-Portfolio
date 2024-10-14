import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects'; // Example project data

const ProjectGrid = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Full Stack Development', 'Game Development', 'AI', 'Automation']; // Example filters

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(project => project.category === selectedFilter);

  return (
    <div className="project-grid-section">
      <div className="filter-options">
        <label htmlFor="category-filter">Filter by:</label>
        <select id="category-filter" value={selectedFilter} onChange={handleFilterChange}>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="project-grid">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
