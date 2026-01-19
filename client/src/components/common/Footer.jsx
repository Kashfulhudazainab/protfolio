import React from 'react';
import { Link } from 'react-router-dom';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-section)] pt-24 pb-12 px-8 md:px-16 lg:px-24 border-t border-[var(--text-muted)] border-opacity-10">
      <div className="container mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Left: Big CTA */}
          <div className="flex flex-col gap-8">
            <h2 className="text-5xl md:text-7xl font-black text-[var(--text-heading)] uppercase tracking-tighter leading-[0.9]">
              LET'S BUILD <br />
              <span className="text-[var(--text-muted)]">SOMETHING</span> <br />
              GREAT TOGETHER.
            </h2>
            <div className="flex items-center gap-4">
               <a 
                href="mailto:yourname@email.com" 
                className="bg-[var(--text-heading)] text-[var(--bg-main)] px-8 py-4 rounded-full font-bold uppercase text-sm hover:scale-105 transition-transform"
              >
                Start a Conversation
              </a>
            </div>
          </div>

          {/* Right: Links & Info */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-4">
              <p className="text-[var(--text-muted)] font-black uppercase tracking-widest text-[10px]">Navigation</p>
              <ul className="flex flex-col gap-2 font-bold text-[var(--text-heading)] uppercase text-sm">
                <li><Link to="/" className="hover:text-[var(--text-muted)] transition-colors">Home</Link></li>
                <li><Link to="/projects" className="hover:text-[var(--text-muted)] transition-colors">Work</Link></li>
                <li><Link to="/about" className="hover:text-[var(--text-muted)] transition-colors">About</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-[var(--text-muted)] font-black uppercase tracking-widest text-[10px]">Social</p>
              <ul className="flex flex-col gap-2 font-bold text-[var(--text-heading)] uppercase text-sm">
                <li><a href="#" className="flex items-center gap-2 hover:text-[var(--text-muted)] transition-colors">Github</a></li>
                <li><a href="#" className="flex items-center gap-2 hover:text-[var(--text-muted)] transition-colors">LinkedIn</a></li>
                <li><a href="#" className="flex items-center gap-2 hover:text-[var(--text-muted)] transition-colors">Twitter</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
              <p className="text-[var(--text-muted)] font-black uppercase tracking-widest text-[10px]">Current Status</p>
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <p className="text-sm font-bold text-[var(--text-heading)] uppercase">Available for Hire</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--text-muted)] border-opacity-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[var(--text-muted)] text-[10px] font-bold uppercase tracking-widest">
            © {currentYear} — Handcrafted by KASHFUL HUDA
          </p>
          
          <div className="flex gap-6">
            <SiGithub className="text-[var(--text-muted)] hover:text-[var(--text-heading)] cursor-pointer transition-colors" />
            <SiLinkedin className="text-[var(--text-muted)] hover:text-[var(--text-heading)] cursor-pointer transition-colors" />
            <SiInstagram className="text-[var(--text-muted)] hover:text-[var(--text-heading)] cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;