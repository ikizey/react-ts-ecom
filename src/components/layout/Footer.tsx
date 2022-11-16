import React from 'react';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className='py-1 bg-gray-100'>
      <p className='text-center mt-1'>
        {`E-Com - ${year}. All Rights Reserved.`}
      </p>
    </footer>
  );
};

export default Footer;
