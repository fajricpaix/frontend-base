import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size = 'md', leftIcon, rightIcon, ...props }, ref) => {

    const sizes = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-3 text-base',
      lg: 'h-12 px-3 text-lg'
    };

    return (
      <div className="relative w-full overflow-hidden rounded-sm">
        {leftIcon && (
          <div className="absolute flex items-center justify-center px-3 left-px inset-y-px rounded-s-md text-gray-500">
            {leftIcon}
          </div>
        )}
        <input
          className={cn(
            'flex w-full rounded-md border bg-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-info focus:border-info disabled:cursor-not-allowed disabled:opacity-50',
            sizes[size],
            leftIcon ? 'pl-12' : undefined,
            rightIcon ? 'pr-10' : undefined,
            className
          )}
          ref={ref}
          {...props}
        />
        {rightIcon && (
          <div className="absolute flex items-center justify-center px-3 right-0 inset-y-0 text-gray-500">
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };