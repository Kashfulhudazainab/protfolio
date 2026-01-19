import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import IntroHeader from '../components/about/IntroHeader';
import BioSection from '../components/about/BioSection';
import Recognition from '../components/about/Recognition';
import TestimonialForm from '../components/about/CTA';

const About = () => {
  return (
   <div className="flex flex-col">
      <IntroHeader/>
      <BioSection/>
      <Recognition/>
      <TestimonialForm/>
    </div>
  );
};

export default About;