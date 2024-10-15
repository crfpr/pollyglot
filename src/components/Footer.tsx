import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const location = useLocation();

  return (
    <footer className={`bg-white border-t border-gray-200 h-16 ${className}`}>
      <nav className="flex justify-around h-full">
        <Link
          to="/"
          className={`flex-1 flex items-center justify-center ${location.pathname === '/' ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}
        >
          Translate
        </Link>
        <Link
          to="/chat"
          className={`flex-1 flex items-center justify-center ${location.pathname === '/chat' ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}
        >
          Chat
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
