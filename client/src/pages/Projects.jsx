import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from '../components/projects/ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]); // Dynamic data from MongoDB
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_BASE_URL;
  const categories = ['All', 'MERN Stack', 'Frontend', 'Mini JS'];

  // 1. Fetch data from your working API
  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await axios.get(`${API_URL}/projects`);
        setProjects(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setLoading(false);
      }
    };
    getProjects();
  }, [API_URL]);

  // 2. Use 'projects' (from state) instead of 'projectsData' (from file)
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  if (loading) return (
    <div className="bg-[var(--bg-main)] min-h-screen flex items-center justify-center">
      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-muted)] animate-pulse">
        loading...
      </p>
    </div>
  );

  return (
    <div className="bg-[var(--bg-main)] min-h-screen pt-32 pb-24 px-8 md:px-16 lg:px-24">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <p className="text-[var(--text-muted)] uppercase tracking-[0.4em] font-bold text-[10px] mb-4">Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-black text-[var(--text-heading)] uppercase tracking-tighter leading-none mb-12">
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

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              // Using MongoDB _id for the key
              <ProjectCard key={project._id} project={project} />
            ))
          ) : (
            <p className="text-[10px] uppercase tracking-widest opacity-30">No projects found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;