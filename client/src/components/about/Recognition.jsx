import React from 'react';

const Recognition = () => {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-24 bg-[var(--bg-section)]">
      <div className="container mx-auto">
        <p className="text-[var(--text-muted)] uppercase tracking-[0.4em] font-bold text-[10px] mb-12">Recognition</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-12 border border-[var(--text-muted)] border-opacity-10 bg-[var(--bg-main)] rounded-3xl">
            <p className="text-2xl font-medium text-[var(--text-heading)] mb-8 italic">
              "Kashful's ability to take a complex idea and turn it into a functional React application is unmatched."
            </p>
            <div className="flex flex-col">
              <span className="font-black uppercase text-xs tracking-widest text-[var(--text-heading)]">John Doe</span>
              <span className="text-[10px] text-[var(--text-muted)] uppercase">Founder @ TechFlow</span>
            </div>
          </div>
          {/* Add more cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default Recognition;