/*
Created by: kathe
On: 28-Jul-21 : 28-Jul-21
Project: meals-order-section11
*/
import React, {useContext} from 'react';
import ModalComponent from '../UI/Modal/ModalComponent';
import CartContext from '../../store/CartContext';
import CartItem from '../CartItem/CartItem';

import cssStyle from './Cart.module.css';

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartContext.addItem({...item, amount:1})
  }

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  }

  const cartItems = <ul className={cssStyle['cart-items']}>{
    cartContext.items.map((item) => {
      return <CartItem
        key={item.id}
        name={item.name}
        price={item.price}
        amount = {item.amount}
        onAdd = {cartItemAddHandler.bind(null, item)}
        onRemove = {cartItemRemoveHandler.bind(null, item.id)}
      >
        {item.name}
      </CartItem>
    })}
  </ul>;

  return (
    <ModalComponent onClose={props.onClose}>
      {cartItems}
      <div className={cssStyle.total}>
        <span>TotalAmount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={cssStyle.actions}>
        <button className={cssStyle['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={cssStyle.button}>Order</button>}
      </div>
    </ModalComponent>
  );
};

export default Cart;
