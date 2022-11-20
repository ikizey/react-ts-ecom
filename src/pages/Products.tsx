import React, { Fragment, useContext, useEffect } from 'react';
import Product from './Product';
import { ProductSearchContext } from '../store/ProductSearchContext';

const Products = () => {
  const { productList, search } = useContext(ProductSearchContext);

  useEffect(() => {
    if (!productList) {
      search('');
    }
  }, []);

  return (
    <Fragment>
      {!!productList && (
        <div className='flex flex-col'>
          <h1 className='mx-auto text-center text-lg my-2'>Latest Products</h1>
          <div className='grid grid-cols-1 grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
            {productList.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                imageURL={product.imageURL}
                brand={product.brand}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Products;
