import React from 'react';
import CartManipulator from '../components/UI/CartManipulator';
import { ProductType } from '../types/Product.types';

const Product = ({ id, imageURL, brand, name, price }: ProductType) => {
  return (
    <section className='max-w-sm rounded overflow-hidden shadow-lg flex flex-col'>
      <img
        className='mx-auto max-w-[95%] w-96 h-80 object-cover mt-3'
        src={imageURL}
        alt=''
      />
      <div className='px-6 py-4 flex-1'>
        <div className='text-xl mb-2'>
          <span className='font-bold'>{brand}</span> {name}
        </div>
      </div>
      <div className='flex justify-between items-center mb-2 px-6'>
        <span className='text-xl font-semibold text-gray-600'>
          &euro;{price}
        </span>
        <CartManipulator id={id} />
      </div>
    </section>
  );
};

export default Product;
