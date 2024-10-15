import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Footer } from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header className="flex-shrink-0"/>
      <main className="flex-grow overflow-auto p-4 pt-10 pb-20">
        <div className="container mx-auto max-w-screen-lg px-2">
          <Outlet />
        </div>
      </main>
      <Footer className="flex-shrink-0" />
    </div>
  );
};

export default Layout;