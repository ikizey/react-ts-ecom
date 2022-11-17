import React, { FormEvent, useState } from 'react';
import { addDoc, collection, FirestoreError } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { toast } from 'react-toastify';
import { toastConfig } from '../../toastConfig';
import { db, storage, products } from '../../firebase';
import { FaImage } from 'react-icons/fa';

const AddItem = () => {
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      name: HTMLInputElement;
      price: HTMLInputElement;
      file: HTMLInputElement;
    };

    const id = uuid();
    const product = formElements.name.value;
    const price = formElements.price.value;
    const files = formElements.file.files as FileList;
    const file = files[0];

    try {
      setIsFetching(true);

      const storageRef = ref(storage, id);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (_) => {},
        (_) => {},
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          const productsCollection = collection(db, products);
          await addDoc(productsCollection, {
            id,
            product,
            price,
            imageUrl: downloadURL,
          });
          toast.success('Item was added successfully', toastConfig);
          setTimeout(() => navigate('/'), 8000);
        }
      );
    } catch (error) {
      if (error instanceof FirestoreError) {
        toast.error(error.message, toastConfig);
      } else {
        toast.error('connection error', toastConfig);
      }
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div className='flex-1 flex items-center justify-center'>
      <div className='px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3'>
        <h3 className='text-2xl font-bold text-center'>Add item</h3>
        <form onSubmit={handleSubmit}>
          <div className='mt-4'>
            <div className='mt-4'>
              <label className='block' htmlFor='name'>
                Product Name
              </label>
              <input
                id='name'
                type='text'
                placeholder='Product name...'
                className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
              />
            </div>

            <div className='mt-4'>
              <label className='block' htmlFor='price'>
                Price
              </label>
              <input
                id='price'
                type='text'
                placeholder='Product price...'
                className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
              />
            </div>

            <input className='hidden' type='file' id='file' />
            <label
              className='flex items-center gap-2 text-indigo-400 text-sm cursor-pointer'
              htmlFor='file'
            >
              <FaImage className='w-8 h-12 text-blue-600' />
              <span className='text-blue-600'>Add an image</span>
            </label>

            <div className='flex'>
              <button
                className='w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900'
                disabled={isFetching}
              >
                Add item
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
