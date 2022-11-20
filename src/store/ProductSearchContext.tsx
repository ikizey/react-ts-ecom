import { FirebaseError } from 'firebase/app';
import { collection, getDocs } from 'firebase/firestore';
import React, { PropsWithChildren, useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { db, products } from '../firebase';
import { toastConfig } from '../toastConfig';
import { ProductType } from '../types/Product.types';

type CartCtx = {
  search: (searchString: string) => Promise<void> | undefined;
  productList: ProductType[] | undefined;
};

export const ProductSearchContext = React.createContext<CartCtx>({
  search: (searchString: string) => undefined,
  productList: undefined,
});

export const ProductSearchProvider = (props: PropsWithChildren) => {
  const [productList, setProductList] = useState<ProductType[] | undefined>(
    undefined
  );

  const searchHandler = useCallback(async (searchString: string) => {
    const lowerString = searchString.toLowerCase();
    const collectionReference = collection(db, products);
    let foundProducts: ProductType[] | undefined;
    try {
      const snapshot = await getDocs(collectionReference);
      const allProducts = snapshot.docs.map((product) => ({
        ...product.data(),
      })) as ProductType[];

      if (searchString.length > 0) {
        foundProducts = allProducts.filter(
          (product) =>
            product.brand.toLowerCase().includes(lowerString) ||
            product.name.toLowerCase().includes(lowerString)
        );
      }

      if (foundProducts && foundProducts.length > 0) {
        setProductList(foundProducts);
        return;
      }
      return setProductList(allProducts);
    } catch (error) {
      if (error instanceof FirebaseError) {
        toast.error(error.message, toastConfig);
      } else {
        toast.error('Sorry. Connection Problem.');
      }
    }
  }, []);

  const searchContext: CartCtx = {
    search: searchHandler,
    productList,
  };
  return (
    <ProductSearchContext.Provider value={searchContext}>
      {props.children}
    </ProductSearchContext.Provider>
  );
};
