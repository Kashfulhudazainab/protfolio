import React from 'react';
import SharedButton from '../common/Button';
import heroImage from '../../assets/images/hero.png'; 

const Hero = ({ role }) => {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center bg-[var(--bg-section)] overflow-hidden transition-colors duration-500">
      
      {/* Background Decorative Grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(var(--text-muted) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      />

      {/* Increased padding and used gap-24 for more space between columns */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Side: Content (Reduced max-width for better spacing) */}
        <div className="flex flex-col gap-6 order-2 lg:order-1 max-w-xl">
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] text-[var(--text-heading)] tracking-tighter">
            CODE THE <br />
            <span className="flex flex-wrap items-center gap-x-3">
              <span className="text-[var(--text-muted)] italic text-xl md:text-3xl normal-case font-medium tracking-normal">
                future with
              </span>
              <span className="text-[var(--text-muted)]">INNOVATIVE</span>
            </span>
            <span className="text-[var(--text-muted)] block">DEVELOPMENT</span>
          </h1>

          <p className="max-w-md text-base md:text-lg font-medium text-[var(--text-body)] leading-relaxed opacity-90">
            Transforming complex ideas into high-performance digital solutions 
            using modern technologies and precision code.
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-2">
            <SharedButton role={role} />
            
            <button className="flex items-center gap-2 font-bold text-[var(--text-heading)] hover:text-[var(--text-muted)] transition-colors group text-sm md:text-base">
              VIEW PROJECTS 
              <span className="text-xl transition-transform group-hover:translate-x-1">›</span>
            </button>
          </div>
        </div>

        {/* Right Side: Image (Reduced max-size) */}
        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
          {/* Accent Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[var(--color-accent)] opacity-25 blur-[90px] rounded-full" />
          
          <img 
            src={heroImage} 
            alt="Developer Portrait" 
            className="relative z-10 w-full max-w-[380px] md:max-w-[420px] lg:max-w-[480px] object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Vertical Badge */}
      <div className="absolute left-6 top-1/2 -rotate-90 origin-left hidden 2xl:flex items-center gap-4">
        <div className="w-9 h-9 rounded-full border border-[var(--text-muted)] flex items-center justify-center text-sm">
          ☀️
        </div>
        <span className="text-[var(--text-muted)] text-[10px] font-bold tracking-[0.4em] uppercase whitespace-nowrap opacity-60">
          Creative Developer • 2026
        </span>
      </div>
    </section>
  );
};

export default Hero;