import React from 'react';
import AnimatedIcon from './AnimatedIcon';
import '../styles/animations.css';

const Hero = () => {
  return (
    <section className="relative text-center pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <AnimatedIcon
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDd6bWF4Y3E2OXJ1MXgybWF0ZmxqOXBxbXBxdnBxbWZqeHIyeDlubiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/WFZvB7VIXBgiz3oDXE/giphy.gif"
          alt="Code icon"
          className="absolute top-20 left-1/4"
        />
        <AnimatedIcon
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTY5Z3hwMnJ1eDd4OWM2OXJ1eDdtYXRmbGo5cHFtcHF2cHFtZmp4ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/3o7TKMt1VVNkHV2PaE/giphy.gif"
          alt="Design icon"
          className="absolute top-40 right-1/4"
        />
      </div>

      <div className="max-w-2xl mx-auto px-4 stagger-fade-in">
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
          alt="Profile"
          className="w-24 h-24 mx-auto mb-4 rounded-full"
        />
        <h1 className="text-2xl font-medium mb-2 text-gray-300">
          Hello <span className="animate-wave inline-block">👋</span>, I'm aNkit
        </h1>
        <h2 className="text-4xl font-bold mb-2">Product designer</h2>
        <h3 className="text-4xl font-bold text-gray-400">from India</h3>
      </div>
    </section>
  );
};

export default Hero;