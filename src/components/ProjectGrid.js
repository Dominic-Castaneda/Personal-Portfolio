import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

const ProjectGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  const categories = ['All', 'Full Stack', 'Front End', 'Back End', 'Game Development', 'Automation', "Robotic's", "Engineering"];
  const languages = ['All', 'HTML', 'CSS', 'JavaScript', 'JavaScript XML', 'Python', 'Java', 'C#', 'C++', 'Ladder Logic', 'CAD'];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const filteredProjects = projects.filter((project) => {
    const categoryMatches = selectedCategory === 'All' || project.category === selectedCategory;
    const languageMatches = selectedLanguage === 'All' || project.languages.includes(selectedLanguage);
    return categoryMatches && languageMatches;
  });

  return (
    <div className="project-grid-section">
      <div className="filter-options">
        <label htmlFor="category-filter">Category:</label>
        <select id="category-filter" value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        <label htmlFor="language-filter">Language:</label>
        <select id="language-filter" value={selectedLanguage} onChange={handleLanguageChange}>
          {languages.map(language => (
            <option key={language} value={language}>{language}</option>
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
