import React from 'react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`bg-white-600 text-slate-900 p-4 h-16 ${className} fixed top-0`}>
      <h1 className="text-xl font-bold text-center">PollyGlot</h1>
    </header>
  );
};

export default Header;
