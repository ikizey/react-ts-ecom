import React, { Fragment, useContext } from 'react';
import { FaCartArrowDown, FaPlusSquare, FaMinusSquare } from 'react-icons/fa';
import { CartContext } from '../../store/CartContext';

type CartManipulatorProps = {
  id: string;
};

const CartManipulator = ({ id }: CartManipulatorProps) => {
  const { removeItem, addItem, inCart } = useContext(CartContext);
  let manipulator = (
    <FaCartArrowDown
      onClick={() => addItem({ productId: id, amount: 1 })}
      className='cursor-pointer w-7 h-7 text-green-600 hover:text-green-900'
    />
  );
  const amountInCart = inCart(id);
  if (amountInCart) {
    manipulator = (
      <div className='flex gap-1'>
        <FaMinusSquare
          onClick={() => removeItem(id)}
          className='w-7 h-7 text-red-600 hover:text-red-900'
        />
        <span className='border rounded-md border-blue-600 hover:border-blue-900 px-4'>
          {amountInCart}
        </span>
        <FaPlusSquare
          onClick={() => addItem({ productId: id, amount: 1 })}
          className='w-7 h-7 text-green-600 hover:text-green-900'
        />
      </div>
    );
  }
  return <Fragment>{manipulator}</Fragment>;
};

export default CartManipulator;
