import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-[var(--bg-card)] rounded-3xl overflow-hidden border border-[var(--text-muted)] border-opacity-10 hover:border-opacity-30 transition-all duration-500 hover:-translate-y-2">
      
      {/* Image Container */}
      <div className="aspect-video w-full overflow-hidden bg-gray-200">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl font-black uppercase tracking-tighter opacity-10">
            {project.category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-muted)]">
            {project.category}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-[var(--text-heading)] uppercase tracking-tighter mb-6">
          {project.title}
        </h3>

        <a 
          href={project.liveLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[var(--text-heading)] group-hover:gap-4 transition-all"
        >
          View Live Project <span className="text-lg">→</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;