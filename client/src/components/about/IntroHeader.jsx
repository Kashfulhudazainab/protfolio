import React from 'react';

const IntroHeader = () => {
  return (
    <section className="relative pt-32 pb-20 px-8 md:px-16 lg:px-24 overflow-hidden bg-[var(--bg-main)]">
      {/* Decorative Background Text (Watermark style) */}
      <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
        <h2 className="text-[20vw] font-black leading-none whitespace-nowrap text-[var(--text-heading)]">
          KASHFUL HUDA — KASHFUL HUDA
        </h2>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
          
          {/* Main Headline */}
          <div className="max-w-4xl">
            <p className="text-[var(--text-muted)] uppercase tracking-[0.4em] font-bold text-[10px] mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[var(--text-muted)] opacity-30"></span>
              The Story So Far
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[var(--text-heading)] uppercase tracking-tighter leading-[0.85]">
              Turning <span className="text-[var(--text-muted)]">Logic</span> <br />
              Into Experience.
            </h1>
          </div>

          {/* Side Info Box */}
          <div className="lg:max-w-xs pb-4">
            <div className="flex flex-col gap-6 border-l-2 border-[var(--text-muted)] border-opacity-20 pl-6">
              <p className="text-sm text-[var(--text-body)] font-medium leading-relaxed opacity-80">
                A multidisciplinary developer , specializing in the MERN stack and clean architectural design.
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                  Available for new challenges
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroHeader;