import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link
import Button from './Button';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    if (newMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT ME", path: "/about" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    // Added 'py-6' for vertical padding (you had 'y-6' which isn't a valid Tailwind class)
    <nav className="sticky top-0 z-50 w-full py-6 px-10 flex items-center justify-between transition-colors duration-300 bg-[var(--bg-main)] border-b border-[var(--text-muted)] border-opacity-10">
      
      {/* Logo Area */}
      <div className="flex items-center gap-2">
        <Link to="/" className="font-extrabold text-2xl tracking-tighter text-[var(--text-heading)]">
          Kashful Huda
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-8">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path} // 2. Changed from item.href to item.path
            className="text-[11px] font-bold tracking-widest transition-colors text-[var(--text-body)] hover:text-[var(--text-muted)]"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Actions Area */}
      <div className="flex items-center gap-6">
        <button 
          onClick={toggleTheme}
          className="text-[var(--text-body)] text-xl hover:scale-110 transition-transform"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
        
        <Button>HIRE ME</Button>
      </div>
    </nav>
  );
};

export default Navbar;