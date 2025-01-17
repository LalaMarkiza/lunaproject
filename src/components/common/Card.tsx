import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`
        bg-white rounded-2xl
        shadow-sm hover:shadow-md
        transition-all duration-300
        border border-gray-100
        ${className}
      `}
    >
      {children}
    </div>
  );
};