/*
Created by: kathe
On: 28-Jul-21 : 28-Jul-21
Project: meals-order-section11
*/
import React from 'react';
import cssStyle from '../ModalComponent.module.css';

const Backdrop = (props) => {
  return (
    <div className={cssStyle.backdrop} onClick={props.onClose}/>);
};

export default Backdrop;
