import React, { useState } from 'react';
import axios from 'axios';

const TestimonialForm = () => {
  const [formData, setFormData] = useState({ name: '', role: '', text: '' });
  const [status, setStatus] = useState('');
  
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    
    try {
      // Construction: http://localhost:5000/api/testimonials
      const res = await axios.post(`${API_URL}/testimonials`, {
        author: formData.name, // Mapping 'name' to 'author' in your schema
        company: formData.role, // Mapping 'role' to 'company' in your schema
        quote: formData.text    // Mapping 'text' to 'quote' in your schema
      });

      if (res.status === 201) {
        setStatus('Thank you for your feedback!');
        setFormData({ name: '', role: '', text: '' });
      }
    } catch (error) {
      console.error(error);
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="py-16 px-8 border-t border-[var(--text-muted)] border-opacity-10 bg-[var(--bg-main)]">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Image & Text */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <div className="relative inline-block mb-6">
              <div className="w-32 h-32 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border-2 border-[var(--text-muted)] border-opacity-20">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFWVcoAfKgRsVRUAULD07nc9Whvo8E5kQFw&s" 
                  alt="Kashful Huda" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[var(--text-heading)] text-[var(--bg-main)] text-[8px] font-black px-2 py-1 uppercase tracking-tighter">
                Feedback
              </div>
            </div>
            <h4 className="text-xl font-black uppercase tracking-tighter text-[var(--text-heading)] mb-2">
              Worked with me?
            </h4>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed uppercase tracking-widest font-bold opacity-60">
              I value your feedback to help me improve my craft.
            </p>
          </div>

          {/* Right Side: Small Form */}
          <div className="w-full md:w-2/3 bg-[var(--bg-card)] p-8 rounded-3xl border border-[var(--text-muted)] border-opacity-5">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Name" 
                value={formData.name}
                required
                className="bg-transparent border-b border-[var(--text-muted)] border-opacity-20 py-2 text-sm outline-none focus:border-[var(--text-heading)]"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="text" 
                placeholder="Role (e.g. Founder @ TechFlow)" 
                value={formData.role}
                required
                className="bg-transparent border-b border-[var(--text-muted)] border-opacity-20 py-2 text-sm outline-none focus:border-[var(--text-heading)]"
                onChange={(e) => setFormData({...formData, role: e.target.value})}
              />
              <textarea 
                placeholder="Share your experience working with me..." 
                value={formData.text}
                required
                className="md:col-span-2 bg-transparent border-b border-[var(--text-muted)] border-opacity-20 py-2 text-sm outline-none focus:border-[var(--text-heading)] resize-none h-20"
                onChange={(e) => setFormData({...formData, text: e.target.value})}
              />
              <button className="md:col-span-2 mt-4 bg-[var(--text-heading)] text-[var(--bg-main)] py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:opacity-90 transition-opacity">
                Submit Recommendation
              </button>
              {status && <p className="md:col-span-2 text-[8px] uppercase tracking-widest font-bold text-[var(--text-muted)]">{status}</p>}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialForm;