/*
Created by: kathe
On: 28-Jul-21 : 28-Jul-21
Project: meals-order-section11
*/
import React from 'react';
import cssStyle from './Card.module.css';

const Card = (props) => {
  return <div className={cssStyle.card}>{props.children}</div>;
};

export default Card;
