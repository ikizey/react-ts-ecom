import React, { Fragment, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Product from './Product';
import { db, products } from '../firebase';
import { ProductType } from '../types/Product.types';

const collectionReference = collection(db, products);

const Products = () => {
  const [productList, setProductList] = useState<ProductType[] | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(collectionReference);
      const prods = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as ProductType[];
      setProductList(prods);
    };
    getProducts();
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
