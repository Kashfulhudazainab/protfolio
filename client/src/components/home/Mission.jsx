import React from 'react';

const Mission = () => {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-24 bg-[var(--bg-main)]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-10">
          
          {/* Section Header based on your image */}
          <div className="text-center">
             <h3 className="text-[var(--text-body)] uppercase tracking-[0.4em] text-sm font-bold">
              MY GOAL IS TO <span className="text-[var(--text-muted)]">BUILD IMPACTFUL</span> WEB SOLUTIONS
            </h3>
          </div>

          {/* Main Statement with highlight effect */}
          <div className="relative">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.2] text-[var(--text-heading)] uppercase tracking-tight">
              I am a passionate web developer with a <span className="text-[var(--text-muted)]">strong focus on creating clean, modern, and user-friendly websites.</span>
            </h2>
          </div>

          {/* Secondary Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <p className="text-lg md:text-xl text-[var(--text-body)] leading-relaxed font-medium">
              Skilled in front-end <span className="opacity-40 italic">and back-end technologies</span>, I love turning ideas into <span className="opacity-40 italic">fully functional digital experiences.</span>
            </p>
            
            <div className="flex flex-col gap-6">
              <p className="text-lg md:text-xl text-[var(--text-body)] leading-relaxed font-medium">
                I enjoy solving problems <span className="opacity-40 italic">with code and continuously learning new tools to stay updated with industry trends.</span>
              </p>
              
              {/* Decorative element from your style */}
             
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Mission;