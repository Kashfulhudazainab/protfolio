import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Recognition = () => {
  const [testimonials, setTestimonials] = useState([]);
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get(`${API_URL}/testimonials`);
        setTestimonials(res.data);
      } catch (err) {
        console.error("Failed to fetch testimonials:", err);
      }
    };
    fetchTestimonials();
  }, [API_URL]);

  return (
    <section className="py-24 px-8 md:px-16 lg:px-24 bg-[var(--bg-section)]">
      <div className="container mx-auto">
        <p className="text-[var(--text-muted)] uppercase tracking-[0.4em] font-bold text-[10px] mb-12">Recognition</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div key={t._id} className="p-12 border border-[var(--text-muted)] border-opacity-10 bg-[var(--bg-main)] rounded-3xl">
              <p className="text-2xl font-medium text-[var(--text-heading)] mb-8 italic">
                "{t.quote}"
              </p>
              <div className="flex flex-col">
                <span className="font-black uppercase text-xs tracking-widest text-[var(--text-heading)]">
                  {t.author}
                </span>
                <span className="text-[10px] text-[var(--text-muted)] uppercase">
                  {t.company}
                </span>
              </div>
            </div>
          ))}
        </div>

        {testimonials.length === 0 && (
          <p className="text-[10px] uppercase tracking-widest opacity-20 text-center">No testimonials added yet.</p>
        )}
      </div>
    </section>
  );
};

export default Recognition;