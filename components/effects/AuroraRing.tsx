'use client';

import { useEffect, useRef, useState } from 'react';

export function AuroraRing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      const maxDistance = 400;
      const intensity = Math.max(0, 1 - distance / maxDistance);

      setMousePos({ x: deltaX, y: deltaY });
      setIsHovering(intensity > 0);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const calculateTransform = (index: number) => {
    if (!isHovering) return 'translate(-50%, -50%) scale(1)';

    const scale = 1 + (index * 0.05);
    const moveX = mousePos.x * (0.15 + index * 0.05);
    const moveY = mousePos.y * (0.15 + index * 0.05);

    return `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px)) scale(${scale})`;
  };

  const calculateOpacity = (baseOpacity: number) => {
    return isHovering ? Math.min(1, baseOpacity * 1.5) : baseOpacity;
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {/* Aurora Ring Layers */}
      <div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full aurora-ring-gradient animate-aurora-spin"
        style={{
          transform: calculateTransform(0),
          opacity: calculateOpacity(0.2),
          transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full aurora-ring-gradient animate-aurora-spin-reverse"
        style={{
          transform: calculateTransform(1),
          opacity: calculateOpacity(0.15),
          transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full aurora-ring-gradient animate-aurora-spin"
        style={{
          transform: calculateTransform(2),
          opacity: calculateOpacity(0.1),
          transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 85, 0, 0.1) 0%, transparent 70%)',
          transform: calculateTransform(3),
          opacity: calculateOpacity(0.3),
          filter: 'blur(60px)',
          transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 85, 0, 0.05) 0%, transparent 70%)',
          transform: calculateTransform(4),
          opacity: calculateOpacity(0.2),
          filter: 'blur(80px)',
          transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
        }}
      />
    </div>
  );
}
