import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();

  return (
    <footer className="bg-white border-t border-gray-200 sticky bottom-0 w-full">
      <nav className="flex justify-around">
        <Link
          to="/"
          className={`flex-1 py-4 text-center ${location.pathname === '/' ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}
        >
          Translate
        </Link>
        <Link
          to="/chat"
          className={`flex-1 py-4 text-center ${location.pathname === '/chat' ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}
        >
          Chat
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;