import React from 'react';

interface AnimatedIconProps {
  src: string;
  alt: string;
  className?: string;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ src, alt, className = '' }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-12 h-12 animate-float ${className}`}
      style={{ animationDelay: `${Math.random() * 2}s` }}
    />
  );
};

export default AnimatedIcon;