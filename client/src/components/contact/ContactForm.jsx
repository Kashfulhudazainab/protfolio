import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  // Accessing URL from .env (e.g., http://localhost:5000/api)
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // Construction: http://localhost:5000/api/contact
      const res = await axios.post(`${API_URL}/contacts`, formData);
      
      if (res.status === 201 || res.status === 200) {
        setStatus('Message Sent Successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      }
    } catch (error) {
      console.error("Full Error Object:", error);
      // Check if server sent a specific error message
      const errorMsg = error.response?.data?.message || "Failed to send message.";
      setStatus(errorMsg);
    }
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">Your Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            placeholder="John Doe" 
            className="bg-transparent border-b border-[var(--text-muted)] border-opacity-20 py-4 focus:outline-none focus:border-[var(--text-heading)] transition-colors text-[var(--text-heading)]" 
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">Email Address</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            placeholder="john@example.com" 
            className="bg-transparent border-b border-[var(--text-muted)] border-opacity-20 py-4 focus:outline-none focus:border-[var(--text-heading)] transition-colors text-[var(--text-heading)]" 
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">Your Message</label>
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
          rows="4" 
          placeholder="Tell me about your project..." 
          className="bg-transparent border-b border-[var(--text-muted)] border-opacity-20 py-4 focus:outline-none focus:border-[var(--text-heading)] transition-colors text-[var(--text-heading)] resize-none" 
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="group flex items-center gap-4 bg-[var(--text-heading)] text-[var(--bg-main)] px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-all">
          Send Message
          <span className="group-hover:translate-x-2 transition-transform">→</span>
        </button>
        {status && (
          <p className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">
            {status}
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;