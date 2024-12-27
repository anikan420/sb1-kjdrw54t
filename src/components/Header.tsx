import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 bg-white/10 backdrop-blur-sm rounded-[20px] px-4 my-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src="/ai-logo.png"
                alt="ai logo" 
                className="h-8 w-8"
              />
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <a href="/about" className="text-white hover:text-gray-300 text-sm font-medium">
              About
            </a>
            <a href="/resume" className="text-white hover:text-gray-300 text-sm font-medium">
              Resume
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ankit-bansod/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;