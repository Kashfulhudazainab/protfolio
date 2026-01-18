import React from 'react';
import Hero from '../components/home/Hero';
import Skills from '../components/home/Skills'; // New Import
import Mission from '../components/home/Mission';
import Navbar from '../components/common/Navbar';
import Projects from '../components/home/Projects';

const Home = ({ role }) => {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <Hero role={role} />
      <div className="bg-[var(--bg-main)]">
        <Mission />
      </div>
      <Skills /> {/* Technical stack placed here */}
      <Projects/>
    </div>
  );
};

export default Home;