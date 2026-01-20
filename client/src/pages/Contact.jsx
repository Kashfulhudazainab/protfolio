
import React from 'react';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <div className="bg-[var(--bg-main)] min-h-screen pt-32 pb-24 px-8 md:px-16 lg:px-24">
      <div className="container mx-auto">
        {/* Page Title */}
        <div className="mb-24">
          <h1 className="text-5xl md:text-5xl font-black text-[var(--text-heading)] uppercase tracking-tighter leading-none">
            GET IN <span className="text-[var(--text-muted)]">TOUCH.</span>
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
 