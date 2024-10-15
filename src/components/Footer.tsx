import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const location = useLocation();

  return (
    <footer className={`bg-white border-t border-gray-200 h-16 flex ${className}`}>
      <Link
        to="/"
        className={`flex-1 flex items-center justify-center ${location.pathname === '/' ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}
        aria-label="Translate"
        tabIndex={0}
      >
        Translate
      </Link>
      <Link
        to="/chat"
        className={`flex-1 flex items-center justify-center ${location.pathname === '/chat' ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}
        aria-label="Chat"
        tabIndex={0}
      >
        Chat
      </Link>
    </footer>
  );
};

export default Footer;