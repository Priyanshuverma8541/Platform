import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const RootLayout = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="min-h-screen flex bg-dark text-text">
      <Sidebar open={open} setOpen={setOpen} />
      <div className="flex-1 flex flex-col">
        <Navbar open={open} setOpen={setOpen} />
        <main className="max-w-7xl w-full mx-auto px-4 py-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;