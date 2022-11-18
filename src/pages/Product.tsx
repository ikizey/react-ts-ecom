import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import { ProductType } from '../types/Product.types';

const Product = ({ imageURL, brand, name, price }: ProductType) => {
  return (
    <section className='max-w-sm rounded overflow-hidden shadow-lg flex flex-col'>
      <img
        className='max-w-full w-96 h-80 object-cover'
        src={imageURL}
        alt=''
      />
      <div className='px-6 py-4 flex-1'>
        <div className='text-xl mb-2'>
          <span className='font-bold'>{brand}</span> {name}
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='px-6 pt-4 pb-2'>&euro;{price}</div>
        <FaCartArrowDown className='cursor-pointer w-7 h-7 text-green-600 hover:text-green-900 mr-6 mb-1' />
      </div>
    </section>
  );
};

export default Product;
