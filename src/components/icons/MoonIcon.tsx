import React from 'react';

interface IconProps {
  size?: number | string;
  className?: string;
}

export const MoonIcon: React.FC<IconProps> = ({ size = 16, className = "" }) => {
  return (
    <svg 
      className={className} 
      width={size} 
      height={size} 
      fill="white" 
      stroke="white" 
      viewBox="0 0 24 24"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
};