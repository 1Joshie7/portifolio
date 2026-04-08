import React from 'react';

export const AnimatedBorderButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`animated-border-btn ${className}`}
    >
      <svg
        className="animated-border-svg"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
      >
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
          fill="none"
          className="animated-border-path"
        />
      </svg>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};