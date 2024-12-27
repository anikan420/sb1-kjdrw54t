import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/animations.css';

interface ProjectCardProps {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  subtitle,
  overview,
  imageUrl,
}) => {
  return (
    <Link to={`/project/${id}`}>
      <div className="project-card flex flex-col md:flex-row gap-8 p-8 border border-white/10 rounded-3xl mb-6 bg-white/5 hover:bg-white/10">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400 mb-2">{subtitle}</p>
          <p className="text-gray-500 mb-4">{overview}</p>
          <span className="inline-flex items-center text-white">
            <span>View project</span>
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
          <div className="project-details mt-4">
            <p className="text-sm text-gray-400">Click to view detailed case study →</p>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;