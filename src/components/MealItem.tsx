import React from 'react'

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
  
const MealItem : React.FC<Props> = (props) => {
  return (
      <li>
          <article>
              <img src="" alt="" />
              <div>
                  <h3>{ }</h3>
                  <p>{ }</p>
                  <p>{ }</p>
              </div>
              <p>
                  <button>Add to cart</button>
              </p>
          </article>
    </li>
    )
}

export default MealItem