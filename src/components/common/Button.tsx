import React from 'react';
import { theme } from '../../styles/theme';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  disabled = false,
  className = ''
}) => {
  const baseStyles = `
    inline-flex items-center justify-center
    font-medium transition-all
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    rounded-full
  `;

  const variants = {
    primary: `
      bg-primary text-white
      hover:bg-primary/90
      focus:ring-primary/50
    `,
    secondary: `
      bg-secondary text-primary
      hover:bg-secondary/90
      focus:ring-secondary/50
    `,
    outline: `
      border-2 border-primary text-primary
      hover:bg-primary/10
      focus:ring-primary/50
    `
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
};