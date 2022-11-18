import React, { PropsWithChildren, useReducer } from 'react';

enum Action {
  ADD = 0,
  REMOVE,
}

type ActionAdd = {
  type: Action.ADD;
  payload: CartItem;
};

type ActionRemove = {
  type: Action.REMOVE;
  productId: string;
};

type ActionType = ActionAdd | ActionRemove;

type CartItem = {
  productId: string;
  amount: number;
};

type CartType = {
  items: CartItem[];
  amount: number;
};

const defaultCartState: CartType = {
  items: [],
  amount: 0,
};

export const CartContext = React.createContext<CartType>(defaultCartState);

const cartReducer = (state: CartType, action: ActionType): CartType => {
  let updatedItems: CartItem[];
  let amount = state.amount;

  switch (action.type) {
    case Action.ADD: {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.productId === action.payload.productId
      );
      const existingCartItem = state.items[existingCartItemIndex];
      if (existingCartItem !== undefined) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = [...state.items, action.payload];
      }
      amount += 1;
      break;
    }
    case Action.REMOVE: {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.productId === action.productId
      );
      const existingCartItem = state.items[existingCartItemIndex];

      if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter(
          (item) => item.productId !== action.productId
        );
      } else {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      amount -= 1;
      break;
    }
  }
  return {
    items: updatedItems,
    amount,
  };
};

export const CartProvider = (props: PropsWithChildren) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: CartItem) => {
    dispatchCartAction({
      type: Action.ADD,
      payload: item,
    });
  };

  const removeItemFromCartHandler = (productId: string) => {
    dispatchCartAction({
      type: Action.REMOVE,
      productId: productId,
    });
  };

  const cartContext = {
    items: cartState.items,
    amount: cartState.amount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
