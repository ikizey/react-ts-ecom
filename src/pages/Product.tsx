import React from 'react';
import { ProductType } from '../types/Product.types';

const Product = ({ images, brand, name, price }: ProductType) => {
  return (
    <section className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img className='w-full' src={images[0].src} alt={images[0].alt} />
      <div className='px-6 py-4'>
        <div className='text-xl mb-2'>
          <span className='font-bold'>{brand}</span> {name}
        </div>
      </div>
      <div className='px-6 pt-4 pb-2'>&euro;{price}</div>
    </section>
  );
};

export default Product;
