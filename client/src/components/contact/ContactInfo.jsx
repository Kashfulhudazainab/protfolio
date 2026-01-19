import React from 'react';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';

const ContactInfo = () => {
  const socials = [
    { icon: <SiGithub />, link: "#", name: "Github" },
    { icon: <SiLinkedin />, link: "#", name: "LinkedIn" },
    { icon: <SiInstagram />, link: "#", name: "Instagram" },
  ];

  return (
    <div className="space-y-12">
      <div>
        <p className="text-[var(--text-muted)] uppercase tracking-[0.4em] font-bold text-[10px] mb-6">Contact Details</p>
        <h2 className="text-4xl font-black text-[var(--text-heading)] uppercase tracking-tighter mb-4">
          Let's start a <br /> <span className="text-[var(--text-muted)]">New Project</span>
        </h2>
        <a href="mailto:hello@kashful.com" className="text-xl font-medium text-[var(--text-body)] hover:text-[var(--text-heading)] underline underline-offset-8 decoration-1">
         kashfulhudazainab@gmail.com
        </a>
      </div>

      <div>
        <p className="text-[var(--text-muted)] uppercase tracking-[0.4em] font-bold text-[10px] mb-6">Socials</p>
        <div className="flex gap-6">
          {socials.map((social, idx) => (
            <a key={idx} href={social.link} className="text-2xl text-[var(--text-body)] hover:text-[var(--text-heading)] transition-transform hover:-translate-y-1">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;