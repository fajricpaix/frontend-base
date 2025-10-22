'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { SunIcon, MoonIcon } from '@/components/icons';
import { useTheme } from './ThemeProvider';

interface ThemeToggleProps {
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'xs' | 'xl';
  variant?: 'default' | 'outline' | 'link' | 'primary' | 'success' | 'warning' | 'error' | 'info';
  outline?: boolean;
  showText?: boolean;
  className?: string;
}

export function ThemeToggle({ 
  size = 'icon', 
  variant = 'outline', 
  outline = false, 
  showText = false,
  className 
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant={variant}
      size={showText ? 'default' : size}
      outline={outline}
      onClick={toggleTheme}
      className={className}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <>
          <SunIcon size={16} />
          {showText && <span className="ml-2">Light Mode</span>}
        </>
      ) : (
        <>
          <MoonIcon size={16} />
          {showText && <span className="ml-2">Dark Mode</span>}
        </>
      )}
    </Button>
  );
}