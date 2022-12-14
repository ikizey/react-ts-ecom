import React, { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { toast } from 'react-toastify';
import { auth } from '../../firebase';
import { toastConfig } from '../../toastConfig';

const Register = () => {
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      displayName: HTMLInputElement;
      email: HTMLInputElement;
      password: HTMLInputElement;
    };

    const displayName = formElements.displayName.value;
    const email = formElements.email.value;
    const password = formElements.password.value;

    try {
      setIsFetching(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user, {
        displayName: displayName,
      });

      navigate('/');
    } catch (error) {
      if (error instanceof FirebaseError) {
        toast.error(error.message, toastConfig);
      } else {
        toast.error('connection problem.', toastConfig);
      }
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div className='flex-1 flex items-center justify-center'>
      <div className='px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3'>
        <h3 className='text-2xl font-bold text-center'>Register</h3>
        <form onSubmit={handleSubmit}>
          <div className='mt-4'>
            <div>
              <label className='block' htmlFor='displayName'>
                Name
              </label>
              <input
                id='displayName'
                type='text'
                placeholder='Name'
                className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
              />
            </div>
            <div className='mt-4'>
              <label className='block' htmlFor='email'>
                Email
              </label>
              <input
                id='email'
                type='text'
                placeholder='Email'
                className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
              />
            </div>
            <div className='mt-4'>
              <label className='block'>Password</label>
              <input
                id='password'
                type='password'
                placeholder='Password'
                className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
              />
            </div>
            <div className='flex'>
              <button
                className='w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900'
                disabled={isFetching}
              >
                Create Account
              </button>
            </div>
            <div className='mt-2 text-grey-dark'>
              Already have an account?
              <Link to='/login' className='text-blue-600 hover:underline ml-2'>
                Log in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
