import React from 'react';
import SharedButton from '../common/Button';
import heroImage from '../../assets/images/hero.png'; 
import { Link } from 'react-router-dom';

const Hero = ({ role }) => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[var(--bg-section)] py-20 lg:py-0 overflow-hidden">
  
  {/* Decorative Grid */}
  <div className="absolute inset-0 opacity-10 pointer-events-none" 
       style={{ backgroundImage: 'radial-gradient(var(--text-muted) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

  <div className="container mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
    
    {/* Left Side: Text (Always First) */}
    <div className="flex flex-col gap-6 order-1 lg:order-1 max-w-xl text-center lg:text-left items-center lg:items-start">
      <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] text-[var(--text-heading)] tracking-tighter">
        CODE THE <br />
        <span className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3">
          <span className="text-[var(--text-muted)] italic text-xl md:text-3xl normal-case font-medium tracking-normal">future with</span>
          <span className="text-[var(--text-muted)]">INNOVATIVE</span>
        </span>
        <span className="text-[var(--text-muted)] block">DEVELOPMENT</span>
      </h1>

      <p className="max-w-md text-base md:text-lg font-medium text-[var(--text-body)] leading-relaxed opacity-90">
        Transforming complex ideas into high-performance digital solutions using modern technologies and precision code.
      </p>

      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-2">
        <SharedButton role={role} />
        <Link to="/projects" className="flex items-center gap-2 font-bold text-[var(--text-heading)] hover:text-[var(--text-muted)] transition-all group text-sm">
          VIEW PROJECTS 
          <span className="text-xl transition-transform group-hover:translate-x-1">›</span>
        </Link>
      </div>
    </div>

    {/* Right Side: Image (Wraps below on mobile) */}
   {/* Right Side: Image - Completely hidden on mobile, visible on LG screens */}
<div className="hidden lg:flex relative justify-center lg:justify-end order-2">
  {/* Accent Glow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[var(--color-accent)] opacity-25 blur-[90px] rounded-full" />
  
  <img 
    src={heroImage} 
    alt="Developer Portrait" 
    className="relative z-10 w-full max-w-[480px] object-contain drop-shadow-xl"
  />
</div>
  </div>
</section>
  );
};

export default Hero;