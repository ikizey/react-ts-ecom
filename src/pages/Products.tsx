import React, { Fragment, useEffect, useState } from 'react';
import Product from './Product';
import { collection, getDocs } from 'firebase/firestore';
import { db, products } from '../firebase';
import { ProductType } from '../types/Product.types';

const Products = () => {
  const [productList, setProductList] = useState<ProductType[] | null>(null);
  const collectionReference = collection(db, products);

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
          <h1 className='mx-auto text-center'>Latest Products</h1>
          <div className='flex gap-3 flex-wrap items-center justify-center mx-10'>
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
