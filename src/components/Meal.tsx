import React, { useState, useEffect } from 'react'


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
    

    return <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 px-4" >{props.meals.map(meal => <li key={meal.id} className="w-full h-auto"><img src={ meal.image} alt={meal.name} className=''/></li>) }</ul>
}

export default Meal