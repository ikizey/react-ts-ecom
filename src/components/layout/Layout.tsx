import React from 'react';
import { ToastContainer } from 'react-toastify';
import { ProductSearchProvider } from '../../store/ProductSearchContext';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <ProductSearchProvider>
        <Header />
        <div className='flex-1 bg-gray-100 flex justify-center'>{children}</div>
      </ProductSearchProvider>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Layout;
