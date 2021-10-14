/*
Created by: kathe
On: 28-Jul-21 : 28-Jul-21
Project: meals-order-section11
*/
import React, {Fragment} from 'react';
import cssStyle from './Header.module.css';

import mealsImage from '../../../assets/meals.jpg';
import HeaderCardButton from '../../HeaderCardButton/HeaderCardButton';

const Header = (props) => {
  return <Fragment>
      <header className={cssStyle.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onClick = {props.onShowCart}>Cart</HeaderCardButton>
      </header>
      <div className={cssStyle['main-image']} >
        <img src={mealsImage} alt={'A table with delicious food'}/>
      </div>
  </Fragment>;
};

export default Header;
