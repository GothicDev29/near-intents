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
  const paddingClass = small ? 'px-5 py-2 text-xs' : 'px-8 py-4 text-sm';
  const iconSize = small ? 12 : 14;

  let baseStyles = `font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-3 group overflow-hidden rounded-[4px] ${className} ${paddingClass}`;

  if (variant === 'solid') {
    baseStyles += ` bg-brand-orange-600 border border-brand-orange-600 text-black hover:bg-brand-orange-500 hover:border-brand-orange-500`;
  } else {
    baseStyles += ` bg-black border border-brand-orange-600 text-brand-orange hover:bg-brand-orange-600 hover:text-white`;
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      <Plus
        size={iconSize}
        className={`transition-transform duration-500 ease-out group-hover:rotate-180 ${
          variant === 'solid' ? 'text-black' : ''
        }`}
      />
      <div className="relative h-[1.2em] overflow-hidden">
        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
          {text}
        </span>
        <span className="absolute top-0 left-0 block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0">
          {text}
        </span>
      </div>
    </button>
  );
}
