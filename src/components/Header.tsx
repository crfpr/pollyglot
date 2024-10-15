import React from 'react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`bg-white-600 text-slate-900 p-4 h-16 ${className}`}>
      <h1 className="text-xl font-bold text-center">PollyGlot - perfect translation every time</h1>
    </header>
  );
};

export default Header;
