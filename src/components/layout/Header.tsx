import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaShoppingBag, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { AuthContext } from '../../store/AuthContext';

const Header = () => {
  const { currentUser } = useContext(AuthContext);

  const logOut = () => {
    signOut(auth);
  };

  return (
    <div className='bg-green-300'>
      <nav className='flex justify-between py-5 px-8 items-center md:w-[90%] w-screen mx-auto'>
        <FaShoppingBag className='w-12 h-12' />

        <div className='flex items-center w-1/2 rounded-lg overflow-hidden border border-gray-400 bg-slate-100'>
          <input
            className='placeholder:text-gray-400 outline-none p-3 grow bg-slate-100'
            type='text'
            placeholder='Enter Product name...'
          />
          <div className='cursor-pointer bg-purple-900 w-12 h-12 flex justify-center items-center'>
            <FaSearch className='w-8 h-8 text-slate-100' />
          </div>
        </div>

        <div className='flex items-center gap-1'>
          {!currentUser && (
            <Link
              to='/login'
              className='bg-purple-900 p-3 rounded-lg text-slate-100 font-bold'
            >
              Login
            </Link>
          )}
          {!!currentUser && (
            <button
              onClick={logOut}
              className='bg-purple-900 p-3 rounded-lg text-slate-100 font-bold'
            >
              Logout
            </button>
          )}
          <span className='ml-1 text-medium' id='cart'>
            Cart
          </span>
          <span
            className='px-2 bg-purple-900 rounded-md text-slate-100 font-medium text-medium'
            id='cart-count'
          >
            2
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
