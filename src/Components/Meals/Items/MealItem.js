/*
Created by: kathe
On: 28-Jul-21 : 28-Jul-21
Project: meals-order-section11
*/
import React, {useContext} from 'react';
import cssStyle from './MealItems.module.css';
import ItemForm from './ItemForm/ItemForm';
import CartContext from '../../../store/CartContext'

const MealItem = (props) => {
  const price = `${props.price.toFixed(2)}`;
  const cartContext = useContext(CartContext);

  const addToCartHandler = (amount) =>{
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    })
  }

  return <li className={cssStyle.meal} >
    <div>
      <h3>{props.name}</h3>
      <div className={cssStyle.description}>
        {props.description}
      </div>
      <div className={cssStyle.price}>
        {price}
      </div>
    </div>
    <div>
      <ItemForm id={props.id} onAddToCart={ addToCartHandler }/>
    </div>
  </li>;
};

export default MealItem;
