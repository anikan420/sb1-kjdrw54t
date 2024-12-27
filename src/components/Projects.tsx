import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';
import '../styles/animations.css';

const Projects = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-16">
      <h2 className="text-2xl font-bold mb-8">My work</h2>
      <div className="space-y-6">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            subtitle={project.subtitle}
            overview={project.overview}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;