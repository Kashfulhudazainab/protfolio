import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-32 px-8 text-center border-t border-[var(--text-muted)] border-opacity-5">
      <div className="container mx-auto">
        <p className="text-[var(--text-muted)] uppercase tracking-[0.4em] font-bold text-[10px] mb-8">Got a project in mind?</p>
        <h3 className="text-7xl md:text-9xl font-black text-[var(--text-heading)] uppercase tracking-tighter mb-12">
          LET'S <span className="text-[var(--text-muted)]">TALK.</span>
        </h3>
        <Link 
          to="/contact" 
          className="inline-block px-12 py-6 bg-[var(--text-heading)] text-[var(--bg-main)] rounded-full font-black uppercase text-xs tracking-[0.2em] hover:scale-110 transition-transform duration-300"
        >
          Start a Conversation
        </Link>
      </div>
    </section>
  );
};

export default CTA;