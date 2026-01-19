import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Install react-icons

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.body.classList.toggle('dark');
  };

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT ME", path: "/about" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 z-[100] w-full py-6 px-6 md:px-12 flex items-center justify-between transition-colors duration-300 bg-[var(--bg-main)] border-b border-[var(--text-muted)] border-opacity-10">
      
      {/* Logo */}
      <Link to="/" className="font-extrabold text-2xl tracking-tighter text-[var(--text-heading)] z-[101]">
        Kashful Huda
      </Link>

      {/* Desktop Navigation (Hidden on mobile) */}
      <div className="hidden lg:flex items-center gap-8">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="text-[11px] font-bold tracking-widest transition-colors text-[var(--text-body)] hover:text-[var(--text-muted)]"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Actions (Theme & Toggle) */}
      <div className="flex items-center gap-4 md:gap-6 z-[101]">
        <button onClick={toggleTheme} className="text-[var(--text-body)] text-xl hover:scale-110">
          {isDark ? '☀️' : '🌙'}
        </button>
        
        <div className="hidden md:block">
           <Button><Link to="/contact">HIRE ME</Link></Button>
        </div>

        {/* Mobile Toggle Button (Visible only on mobile) */}
        <button 
          className="lg:hidden text-3xl text-[var(--text-heading)]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[var(--bg-main)] transition-transform duration-500 lg:hidden flex flex-col items-center justify-center gap-8 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-black tracking-tighter text-[var(--text-heading)] hover:text-[var(--text-muted)]"
          >
            {item.name}
          </Link>
        ))}
        <Button onClick={() => setIsOpen(false)}><Link to="/contact">HIRE ME</Link></Button>
      </div>
    </nav>
  );
};

export default Navbar;