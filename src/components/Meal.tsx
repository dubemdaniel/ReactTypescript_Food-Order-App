// import React, { useState, useEffect } from 'react'
import MealItem from './MealItem';


interface IMeal  {
    id: number;
    name: string;
    description: string;
    price: number;
  image: string;
  // quantity: number
  }
  interface Props {
    meals: IMeal[];
  }

//   const FoodComponent: React.FC<Props> = ({ foodItems }) =>
const Meal: React.FC<Props> = (props) => {
    

    return <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 px-4 max-w-screen-lg m-auto" >{props.meals.map(el =>
        (<MealItem key={el.id} meal = { el}  />))}:
      </ul>
    
}

export default Meal