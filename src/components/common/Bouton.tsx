import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

export default function Bouton({ children, onClick, type = "button", className = "" }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        group relative px-6 py-4 bg-transparent border border-leather 
        overflow-hidden transition-colors duration-500
        ${className}
      `}
    >
      <span className="absolute inset-0 bg-leather translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
      
      <div className="relative z-10 flex flex-col h-5 overflow-hidden">
        <span className="group-hover:text-pearl group-hover:-translate-y-full transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] font-medium text-sm">
          {children}
        </span>
        
        <span className="absolute top-full text-pearl group-hover:-translate-y-full transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] font-medium text-sm">
          {children}
        </span>
      </div>
    </button>
  );
}