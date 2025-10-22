import React from 'react';
export declare function cn(...classes: (string | undefined | null | false)[]): string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'link' | 'primary' | 'success' | 'warning' | 'error' | 'info';
    size?: 'default' | 'sm' | 'lg' | 'icon' | 'xs' | 'xl';
    outline?: boolean;
    children: React.ReactNode;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button };
export default Button;
//# sourceMappingURL=Button.d.ts.map