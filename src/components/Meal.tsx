import React, { useState, useEffect } from 'react'

interface Meal {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  }
const Meal = (props:Meal[]) => {
    // const [loadedMeals, setLoadedMeals] = useState([])

    // useEffect(() => {
    //     async function fetchMeals() {

    //         // const DummyApi = "/"

    //         const response = await fetch('http://localhost:3000/meals');

    //         if (!response.ok) {
            
    //         }


    //         const meals = await response.json();
    //         setLoadedMeals(meals)
    //     }
    // fetchMeals()

    // },[])

    

    return <ul className='"grid grid-cols-1 sm:grid-cols-auto-fit sm:grid-cols-minmax-20rem sm:grid-cols-1fr"'>{props.map(meal => <li key={meal.id}>{ meal.name}</li>) }</ul>
}

export default Meal