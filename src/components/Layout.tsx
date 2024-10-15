import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Footer } from './Footer'; // Adjusted import to match named export

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header className="flex-shrink-0" />
      <main className="flex-grow overflow-auto p-4">
        <div className="container mx-auto max-w-md">
          <Outlet />
        </div>
      </main>
      <Footer className="flex-shrink-0" />
    </div>
  );
};

export default Layout;
