import React, { Fragment, useContext, useEffect, useState } from 'react';
import CartManipulator from '../components/UI/CartManipulator';
import Price from '../components/UI/Price';
import { CartContext } from '../store/CartContext';
import { ProductType } from '../types/Product.types';

type CartItemProps = {
  id: string;
};

const CartItem = ({ id }: CartItemProps) => {
  const { getItem } = useContext(CartContext);
  const [product, setProduct] = useState<ProductType | undefined>();

  useEffect(() => {
    const get = async () => {
      const data = await getItem(id);
      setProduct(data);
    };
    get();
  }, [id, getItem]);

  return (
    <Fragment>
      {!!product && (
        <Fragment>
          <div className='flex justify-center items-center'>
            <img
              className='object-cover h-28 w-36 rounded-2xl'
              src={product?.imageURL}
              alt=''
            />
          </div>
          <div className='flex justify-center items-center'>
            <h3>{product?.name}</h3>
          </div>
          <div className='flex justify-center items-center'>
            <CartManipulator id={product!.id} />
          </div>
          <div className='flex justify-center items-center'>
            <Price className='text-lg font-bold' value={product?.price} />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default CartItem;
