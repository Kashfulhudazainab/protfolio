import React from 'react';

const SharedButton = ({ role }) => {
  const isAdmin = role === 'admin';

  return (
    <button className="
      px-6 py-2.5 md:px-8 md:py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300
      bg-[var(--btn-bg)] text-[var(--btn-text)] hover:bg-[var(--btn-hover)]
    ">
      {isAdmin ? "EDIT MODE" : "HIRE ME"}
      <span className="text-lg font-light">{isAdmin ? "⚙️" : "↗"}</span>
    </button>
  );
};

export default SharedButton;