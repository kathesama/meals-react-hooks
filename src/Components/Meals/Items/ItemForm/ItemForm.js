/*
Created by: kathe
On: 28-Jul-21 : 28-Jul-21
Project: meals-order-section11
*/
import React, {useRef, useState} from 'react';
import cssStyle from './ItemForm.module.css';
import Input from '../../../UI/Input/Input';

const ItemForm = (props) => {
  const amountInputRef = useRef(0);
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 ||
        enteredAmountNumber < 1 ||
        enteredAmountNumber > 5 ){
          setAmountIsValid(false);
          return;
    }

    props.onAddToCart(enteredAmountNumber);
  }

  return <form className={cssStyle.form} onSubmit={submitHandler}>
    <Input
      ref = {amountInputRef}
      label="Amount"
      input={
        {
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }
      }/>
    <button>+ Add</button>
    {!amountIsValid && <p>Please enter a valid amount</p>}
  </form>;
};

export default ItemForm;
