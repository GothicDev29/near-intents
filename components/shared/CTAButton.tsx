'use client';

import { Plus } from 'lucide-react';

interface CTAButtonProps {
  text: string;
  className?: string;
  small?: boolean;
  variant?: 'ghost' | 'solid';
  onClick?: () => void;
}

export function CTAButton({
  text,
  className = '',
  small = false,
  variant = 'ghost',
  onClick
}: CTAButtonProps) {
  const baseClasses = small
    ? 'px-4 py-2 text-sm'
    : 'px-6 py-3 text-base';

  const variantClasses = variant === 'solid'
    ? 'bg-orange-600 text-white hover:bg-orange-700'
    : 'border border-white/20 hover:border-orange-500 hover:bg-orange-500/10';

  return (
    <button
      onClick={onClick}
      className={`
        group inline-flex items-center gap-2 rounded-full
        transition-all duration-300 font-medium
        ${baseClasses} ${variantClasses} ${className}
      `}
    >
      <Plus
        size={small ? 16 : 20}
        className="rotate-icon-on-hover"
      />
      <span className="relative overflow-hidden">
        <span className="slide-text slide-text-up inline-block">{text}</span>
        <span className="slide-text-down inline-block">{text}</span>
      </span>
    </button>
  );
}
