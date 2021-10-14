/*
Created by: kathe
On: 06-Oct-21 : 06-Oct-21
Project: meals-order-section11
*/
import React, { useReducer } from 'react';
import CartContext from './CartContext';

import cssStyle from './CartProvider.module.css';

const stateInitializer = (initialState) => {
  return {
    initialState
  };
}
const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const existsProperty = (objToScan, propertyToSearch) => {
  return objToScan.hasOwnProperty(propertyToSearch);
}

const getExistingCartItem = (state, action) => {
  const id = existsProperty(action, 'item')? action.item.id : action.id;

  const existingCartItemIndex = state.items.findIndex(item => item.id === id);
  const existingCartItem = state.items[existingCartItemIndex];

  return {
    index: existingCartItemIndex,
    item: existingCartItem
  }
}

const cartReducer = (state, action) => {
  let updatedItems;

  switch (action.type) {
    case 'ADD_CART_ITEM':
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const { index: addIndex, item: addItem } = getExistingCartItem(state, action);

        if (addItem){
          updatedItems = [...state.items];

          const updatedItem = {
            ...addItem,
            amount: addItem.amount + action.item.amount
          };

          updatedItems[addIndex] = updatedItem;
        }else{
          updatedItems = state.items.concat(action.item);
        }

        return {
          items : updatedItems,
          totalAmount: updatedTotalAmount,
        }
    case 'REMOVE_CART_ITEM':
        const { index: removeIndex, item: removeItem } = getExistingCartItem(state, action);

        if (removeItem){
          const updatedTotalAmount = state.totalAmount - removeItem.price;

          if (removeItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
          }else{
            updatedItems = [...state.items];
            updatedItems[removeIndex] = {...removeItem, amount: removeItem.amount - 1};
          }

          return {
            items : updatedItems,
            totalAmount: updatedTotalAmount,
          }
        }

        return defaultCartState;
      break;
    default:
        return defaultCartState;
      break;
  }
}

const CartProviderComponent = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: 'ADD_CART_ITEM',
      item: item
    });
  }

  const removeItemToCartHandler = (id) => {
    dispatchCartAction({
      type: 'REMOVE_CART_ITEM',
      id: id
    });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler
  }

  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>;
};
export default CartProviderComponent;
