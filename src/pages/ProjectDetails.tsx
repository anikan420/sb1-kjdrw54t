import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return <div className="pt-32 text-center">Project not found</div>;
  }

  return (
    <div className="pt-32 pb-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <img
        src={project.detailImage}
        alt={project.title}
        className="w-full rounded-2xl mb-8"
      />
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-300">{project.overview}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/10 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Outcomes</h2>
          <p className="text-gray-300">{project.outcomes}</p>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetails;