/*
Created by: kathe
On: 28-Jul-21 : 28-Jul-21
Project: meals-order-section11
*/
import React from 'react';
import cssStyle from './MealsSummary.module.css';

const MealsSummary = (props) => {
  return <section className={cssStyle.summary}>
    <h2>Delicious Food, Delivered To You</h2>
    <p>
      Choose your favorite meal from our broad selection of available meals
      and enjoy a delicious lunch or dinner at home.
    </p>
    <p>
      All our meals are cooked with high-quality ingredients, just-in-time and
      of course by experienced chefs!
    </p>
  </section>;
};

export default MealsSummary;
