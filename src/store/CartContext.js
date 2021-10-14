/*
Created by: kathe
On: 06-Oct-21 : 06-Oct-21
Project: meals-order-section11
*/
import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default CartContext;

