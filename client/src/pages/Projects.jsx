import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/projects/ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'MERN Stack', 'Frontend', 'Mini JS'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="bg-[var(--bg-main)] min-h-screen pt-32 pb-24 px-8 md:px-16 lg:px-24">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <p className="text-[var(--text-muted)] uppercase tracking-[0.4em] font-bold text-[10px] mb-4">Portfolio</p>
          <h1 className="text-7xl md:text-9xl font-black text-[var(--text-heading)] uppercase tracking-tighter leading-none mb-12">
            Selected <br /> <span className="text-[var(--text-muted)]">Works.</span>
          </h1>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-4 border-b border-[var(--text-muted)] border-opacity-10 pb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full transition-all ${
                  filter === cat 
                  ? 'bg-[var(--text-heading)] text-[var(--bg-main)]' 
                  : 'text-[var(--text-muted)] hover:text-[var(--text-heading)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;