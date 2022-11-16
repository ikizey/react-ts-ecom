import React from 'react';
import Product from './Product';
import { products } from '../dummyData';

const Products = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='mx-auto text-center'>Latest Products</h1>
      <div className='flex gap-3 flex-wrap items-center justify-center mx-10'>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            images={product.images}
            brand={product.brand}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
