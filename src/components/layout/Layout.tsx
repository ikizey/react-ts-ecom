import React from 'react';
import { ToastContainer } from 'react-toastify';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex-1 bg-gray-100 flex'>{children}</div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Layout;
