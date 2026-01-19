import React from 'react';

const BioSection = () => {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-24">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-heading)] leading-tight mb-16 max-w-4xl">
          I bridge the gap between <span className="text-[var(--text-muted)]">Complex Code</span> and <span className="text-[var(--text-muted)]">Human Design.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[var(--text-body)] opacity-80 text-lg leading-relaxed">
          <p>
            My journey as a developer is driven by a simple philosophy: code should be as 
            beautiful as the interfaces it powers. Specializing in the **MERN stack**, 
            I’ve spent thousands of hours refining the way data flows.
          </p>
          <p>
            I believe that a great digital product is invisible—it should work so 
            seamlessly that the user never has to think about the technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BioSection;