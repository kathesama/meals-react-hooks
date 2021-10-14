/*
Created by: kathe
On: 28-Jul-21 : 28-Jul-21
Project: meals-order-section11
*/
import React from 'react';
import cssStyle from './MealsAvailable.module.css';
import Card from '../../UI/Card/Card';
import MealItem from '../Items/MealItem';

const MealsAvailable = (props) => {
  const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

  const mealsData = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}>
        {meal.name}
      </MealItem>
      )
  })

  return (
    <section className={cssStyle.meals}>
      <Card>
        <ul>
          {mealsData}
        </ul>
      </Card>
    </section>);
};

export default MealsAvailable;
