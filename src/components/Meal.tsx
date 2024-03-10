import React, { useState, useEffect } from 'react'
import MealItem from './MealItem';


interface IMeal {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  }
  interface Props {
    meals: IMeal[];
  }

//   const FoodComponent: React.FC<Props> = ({ foodItems }) =>
const Meal: React.FC<Props> = (props) => {
    

    return <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 px-4" >{props.meals.map(meal =>
        (<MealItem key={meal.id} meal={meal } />))}
      </ul>
    
}

export default Meal