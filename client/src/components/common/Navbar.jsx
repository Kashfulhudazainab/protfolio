import React, { useState} from 'react';
import Button from './Button';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  // Toggle dark class on the body to trigger your CSS :root vs .dark variables
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
    { name: "HOME", href: "#" },
    { name: "ABOUT ME", href: "#" },
    { name: "PROJECTS", href: "#" },
    { name: "TESTIMONIALS", href: "#" },
    { name: "CONTACT US", href: "#" },
  ];

  return (
    <nav className="w-full py-6 px-10 flex items-center justify-between transition-colors duration-300 bg-[var(--bg-main)]">
      
      {/* Logo Area */}
      <div className="flex items-center gap-2">
        
        <span className="font-extrabold text-2xl tracking-tighter text-[var(--text-heading)]">
          Kashful Huda
        </span>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-8">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-[13px] font-bold tracking-widest transition-colors text-[var(--text-body)] hover:text-[var(--text-muted)]"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Actions Area */}
      <div className="flex items-center gap-6">
        {/* Theme Toggle */}
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