import React, { useContext } from 'react'
import currencyFormatter from '../util/formatter';
import Button from './UI/Button';
import CartContext from '../store/CartContext';

interface IMeal {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    quantity:number
  }
  interface Props {
    //   meals: IMeal[];
      meal:IMeal
  }
  
const MealItem: React.FC<Props> = (props) => {
    const cartCtx = useContext(CartContext)

    const handleMealToCart = () => {
        if (typeof cartCtx.addItem === "function") {
            cartCtx.addItem(props.meal)
        }
    }
  return (
      <li className='bg-[#1d1a16] overflow-hidden rounded-lg text-center shadow-sm text-white'>
          <article className='flex flex-col  h-full gap-2'>
              <img className='object-contain w-[20rem]' src={props.meal.image} alt={ props.meal.name} />
              <div className='px-[0.2rem] '>
                  <h3 className='font-bold my-[0.75rem]'>{ props.meal.name}</h3>
                  <p className=' text-[#ffc404] inline-block font-bold rounded-md py-[0.2rem] px-[2rem] bg-[#312c1d] mt-auto mb-2' >{ currencyFormatter.format(props.meal.price)}</p>
                  <p className='my-auto'>{ props.meal.description}</p>
              </div>
              <p className='mt-auto'>
                  <Button onClick={handleMealToCart}>Add to cart</Button>
              </p>
          </article>
    </li>
    )
}

export default MealItem