import React from 'react';
import { homeFeatured } from '../../data/homeProjects';
import { Link } from 'react-router-dom'; // Assuming you use react-router

const Projects = () => {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-24 bg-[var(--bg-main)]">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <p className="text-[var(--text-muted)] uppercase tracking-[0.4em] font-bold text-[10px] mb-3">
              Portfolio Categories
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-[var(--text-heading)] uppercase tracking-tighter leading-none">
              WORK <span className="text-[var(--text-muted)]">SNAPSHOT</span>
            </h2>
          </div>
          <Link to="/projects" className="text-sm font-bold text-[var(--text-heading)] border-b-2 border-[var(--text-muted)] hover:text-[var(--text-muted)] transition-all pb-1">
            EXPLORE ALL PROJECTS
          </Link>
        </div>

        {/* The Three Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homeFeatured.map((item) => (
            <Link 
              to="/projects" 
              key={item.id}
              className="group relative bg-[var(--bg-card)] p-10 rounded-[2rem] border border-[var(--text-muted)] border-opacity-10 hover:border-[var(--color-accent)] hover:border-opacity-30 transition-all duration-500 flex flex-col min-h-[400px]"
            >
              {/* Top Row: Category & Count */}
              <div className="flex justify-between items-start mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  {item.category}
                </span>
                <span className="text-[var(--text-muted)] opacity-40 font-mono text-xs">
                  [{item.count}]
                </span>
              </div>

              {/* Middle: Title & Icons */}
              <div className="flex-grow">
                <h3 className="text-3xl font-bold text-[var(--text-heading)] uppercase tracking-tighter mb-4 leading-tight">
                  {item.title}
                </h3>
                <div className="flex gap-4 mb-6">
                  {item.icons.map((Icon, idx) => (
                    <Icon key={idx} className="text-xl text-[var(--text-muted)] group-hover:text-[var(--text-heading)] transition-colors" />
                  ))}
                </div>
                <p className="text-[var(--text-body)] text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.description}
                </p>
              </div>

              {/* Bottom: Visual Indicator */}
              <div className="mt-8 flex items-center justify-between">
                <div className="w-12 h-12 rounded-full border border-[var(--text-muted)] border-opacity-20 flex items-center justify-center group-hover:bg-[var(--text-heading)] transition-all duration-500">
                  <span className="text-[var(--text-heading)] group-hover:text-[var(--bg-main)] transition-colors text-xl">→</span>
                </div>
                <span className="text-[10px] font-bold text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                  View Collection
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;