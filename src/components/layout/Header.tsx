import { signOut } from 'firebase/auth';
import React, { Fragment, useContext } from 'react';
import { FaShoppingBag, FaSearch, FaCartArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { AuthContext } from '../../store/AuthContext';

const Header = () => {
  const { currentUser } = useContext(AuthContext);

  const logOut = () => {
    signOut(auth);
  };

  return (
    <nav className='relative px-4 py-4 flex justify-between items-center bg-white'>
      <FaShoppingBag className='w-12 h-12 text-blue-600' />
      <div className='flex items-center w-1/2 gap-2'>
        <input
          className='placeholder:text-gray-400 outline-none grow bg-white px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
          type='text'
          placeholder='Enter Product name...'
        />
        <div className='w-10 h-10 cursor-pointer text-white bg-blue-600 rounded-lg hover:bg-blue-900 flex justify-center items-center'>
          <FaSearch className='w-6 h-6 text-white' />
        </div>
      </div>

      <div className='flex items-center gap-1'>
        {!currentUser ? (
          <Fragment>
            <Link
              to='/login'
              className='lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-lg transition duration-200'
            >
              Log In
            </Link>
            <Link
              to='/register'
              className='lg:inline-block py-2 px-6 bg-blue-600 hover:bg-blue-900 text-sm text-white font-bold rounded-lg transition duration-200'
            >
              Register
            </Link>
          </Fragment>
        ) : (
          <button
            className='lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-lg transition duration-200'
            onClick={logOut}
          >
            Logout
          </button>
        )}
        <span className='ml-2 text-medium cursor-pointer' id='cart'>
          <FaCartArrowDown className='w-6 h-6 hover:text-blue-900' />
        </span>
        <span
          className='px-2 bg-blue-600 rounded-lg text-white font-medium text-medium cursor-pointer'
          id='cart-count'
        >
          22
        </span>
      </div>
    </nav>
  );
};

export default Header;
