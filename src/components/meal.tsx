import React, { useState } from 'react'

const meal = () => {
    const [loadedMeals, setLoadedMeals] = useState([])

    async function fetchMeals() {
      const response = await fetch('http://localhost:3000/meals');

        if (!response.ok) {
            
        }


        const meals = await response.json();
        setLoadedMeals(meals)

    }

    

    return <ul className='"grid grid-cols-1 sm:grid-cols-auto-fit sm:grid-cols-minmax-20rem sm:grid-cols-1fr"'>{loadedMeals.map(meal => <li key={meal.id}>{ meal.name}</li>) }</ul>
}

export default meal