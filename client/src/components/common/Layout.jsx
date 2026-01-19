import React from 'react';
import Navbar from './Navbar'; // Adjust this path to where your Navbar is
import Footer from './Footer';           // Adjust this path to where your Footer is

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--bg-main)]">
      {/* 1. Global Navbar */}
      <Navbar />

      {/* 2. Page Content */}
      {/* The "flex-grow" ensures the footer stays at the bottom even on short pages */}
      <main className="flex-grow">
        {children}
      </main>

      {/* 3. Global Footer */}
      <Footer />
    </div>
  );
};

export default Layout;