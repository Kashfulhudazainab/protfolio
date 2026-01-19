import React from 'react';

const ContactForm = () => {
  return (
    <form className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">Your Name</label>
          <input type="text" placeholder="John Doe" className="bg-transparent border-b border-[var(--text-muted)] border-opacity-20 py-4 focus:outline-none focus:border-[var(--text-heading)] transition-colors text-[var(--text-heading)]" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">Email Address</label>
          <input type="email" placeholder="john@example.com" className="bg-transparent border-b border-[var(--text-muted)] border-opacity-20 py-4 focus:outline-none focus:border-[var(--text-heading)] transition-colors text-[var(--text-heading)]" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">Your Message</label>
        <textarea rows="4" placeholder="Tell me about your project..." className="bg-transparent border-b border-[var(--text-muted)] border-opacity-20 py-4 focus:outline-none focus:border-[var(--text-heading)] transition-colors text-[var(--text-heading)] resize-none" />
      </div>

      <button className="group flex items-center gap-4 bg-[var(--text-heading)] text-[var(--bg-main)] px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-all">
        Send Message
        <span className="group-hover:translate-x-2 transition-transform">→</span>
      </button>
    </form>
  );
};

export default ContactForm;