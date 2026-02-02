import { FC, ReactNode } from 'react';

interface BaseNeonTextProps {
  children: ReactNode;
  className?: string;
}

const BaseNeonText: FC<BaseNeonTextProps> = ({ children, className = '' }) => {
  return (
    <span className={`relative ${className}`}>
      <span className="absolute inset-0 bg-primary/50 blur-lg" />
      <span className="relative text-primary drop-shadow-[0_0_10px_hsl(var(--primary))]">
        {children}
      </span>
    </span>
  );
};

export default BaseNeonText;
