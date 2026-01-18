import React from 'react';
import { techStack } from '../../utils/TechIcons';

const Skills = () => {
  return (
    <section className="py-16 bg-[var(--bg-main)] border-y border-[var(--text-muted)] border-opacity-10 overflow-hidden">
      
      {/* Small Label Header */}
      <div className="container mx-auto px-8 mb-12">
        <p className="text-[var(--text-muted)] uppercase tracking-[0.4em] font-bold text-[10px] mb-2">
          Technical Proficiency
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex">
        <div className="animate-scroll flex items-center">
          {/* We repeat the array twice to create a seamless infinite loop */}
          {[...techStack, ...techStack].map((tech, index) => (
            <div 
              key={index} 
              className="flex items-center gap-6 mx-8 group cursor-default"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-[var(--bg-section)] flex items-center justify-center border border-[var(--text-muted)] border-opacity-10 group-hover:border-opacity-40 transition-all duration-500">
                <span 
                  className="text-4xl transition-all duration-500 grayscale group-hover:grayscale-0"
                  style={{ '--hover-color': tech.color }}
                >
                  {/* Rendering the React Icon component */}
                  {React.cloneElement(tech.icon, { 
                    style: { color: 'inherit' },
                    className: "group-hover:text-[var(--hover-color)] transition-colors"
                  })}
                </span>
              </div>
              
              {/* Massive Outline Text for Skill Name */}
              <span className="text-4xl md:text-6xl font-black text-[var(--text-heading)] opacity-10 group-hover:opacity-100 transition-all duration-700 uppercase tracking-tighter italic">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;