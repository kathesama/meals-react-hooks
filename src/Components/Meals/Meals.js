/*
Created by: kathe
On: 28-Jul-21 : 28-Jul-21
Project: meals-order-section11
*/
import React, {Fragment} from 'react';
// import cssStyle from './Meals.module.css';
import MealsSummary from './Summary/MealsSummary';
import MealsAvailable from './Available/MealsAvailable';

const Meals = (props) => {
  return <Fragment>
    <MealsSummary/>
    <MealsAvailable/>
  </Fragment>;
};

export default Meals;
