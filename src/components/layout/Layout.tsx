import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
