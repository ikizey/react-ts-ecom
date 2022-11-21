import { doc, getDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { db, products } from '../firebase';
import { CartContext } from '../store/CartContext';
import Price from '../components/UI/Price';

const tableTitles = ['Image', 'Product', 'Qty', 'Price'];

const Cart = () => {
  const [total, setTotal] = useState(0);
  const { items } = useContext(CartContext);

  useEffect(() => {
    if (items.length === 0) return;

    const prices = async () => {
      const ids = items.map((item) => item.productId);
      const amounts = items.map((item) => item.amount);
      let totalPrice = 0;
      for (let i = 0; i < ids.length; i += 1) {
        const id = ids[i];
        const priceDoc = await getDoc(doc(db, products, id));
        const price = priceDoc.data()?.price;
        totalPrice += price * amounts[i] ?? 0;
      }
      setTotal(totalPrice);
    };
    prices();
  }, [items]);

  if (items.length === 0)
    return (
      <div className='container flex-1 flex items-center justify-center'>
        <div className='container px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg'>
          <h3 className='my-2 text-xl font-bold text-center'>Cart is empty</h3>
          <div className='text-center mt-2'>
            <Link to='/' className='text-blue-600 hover:underline ml-2'>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );

  return (
    <div className='container flex-1 flex items-center justify-center'>
      <div className='container px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg'>
        <h3 className='my-2 text-xl font-bold text-center'>Shopping Cart</h3>
        <div className='w-full grid grid-cols-4 gap-y-4'>
          {tableTitles.map((title, index) => (
            <span key={index} className='px-6 py-3 font-bold text-center'>
              {title}
            </span>
          ))}

          {items.map((item) => (
            <CartItem key={item.productId} id={item.productId} />
          ))}
        </div>

        <div className='flex items-center justify-between px-4 py-2 mt-3 border-t-2'>
          <span className='text-xl font-bold'>Total</span>
          <Price className={'text-2xl font-bold'} value={total} />
        </div>

        <button className='w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900'>
          Proceed to Checkout
        </button>
        <div className='text-center mt-2'>
          <Link to='/' className='text-blue-600 hover:underline ml-2'>
            or continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
