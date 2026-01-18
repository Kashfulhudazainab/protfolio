import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SharedButton from './Button';

const Navbar = ({ role, toggleTheme, isDark }) => {
  const location = useLocation();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT ME", path: "/about" },
    { name: "PROJECTS", path: "/projects" },
    { name: "TESTIMONIALS", path: "/testimonials" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-5 md:px-12 sticky top-0 z-50 bg-[var(--bg-main)]">
      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-2 group">
        <div className="bg-[var(--text-heading)] p-1 px-2.5 rounded-sm">
          <span className="text-[var(--bg-main)] font-black text-xl">P</span>
        </div>
        <span className="font-extrabold text-2xl tracking-tighter text-[var(--text-heading)]">
          PROTIX
        </span>
      </Link>

      {/* Dynamic Nav Links */}
      <ul className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`text-[13px] font-bold tracking-widest transition-colors
                  ${isActive ? 'text-[var(--text-muted)]' : 'text-[var(--text-body)] hover:text-[var(--text-muted)]'}`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Actions: Theme Toggle + Role-Based Button */}
      <div className="flex items-center gap-4 md:gap-7">
        <button 
          onClick={toggleTheme}
          className="text-[var(--text-body)] text-xl hover:scale-110 transition-transform p-2"
          aria-label="Toggle Theme"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
        
        {/* Pass the role to your common button */}
        <SharedButton role={role} />
      </div>
    </nav>
  );
};

export default Navbar;