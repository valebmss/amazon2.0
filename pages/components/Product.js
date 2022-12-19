import React, { useState } from 'react'
import datosJson from './datos.json'
import Image from 'next/image';
import { CurrencyEuroIcon, StarIcon } from '@heroicons/react/outline';
const products = datosJson["products"];
const MAX_RATING=5;
const MIN_RATING=1;


function Product({id, title, price, description, category, imagen}) {
  const [rating] = useState(
    Math.floor(Math.random()*(MAX_RATING- MIN_RATING +1)) + MIN_RATING
  );

  const[hasPrime]= useState(Math.random()<0.5)
  return (
   <div className='relative flex flex-col m-5 bg-white z-30 p-10'> 
        <p className='absolute top-2 right-2 text-xs italy text-gray-400'>{category}</p>
        <Image  className='self-center' src={imagen} height={200} width={200}/>
        <h4 className='my-3'>{title}</h4>
        <div className='flex'>
        {Array(rating)
        .fill()
        .map(() =>(

          <StarIcon className='h-5 text-yellow-500'/>

        ))}
        </div>
        
        <p className='text-xs my-2 line-clamp-2'>{description}</p>
        <div className='mb-5 text-s'>
          <p>${price}
          </p>
        </div>
        {hasPrime &&(
          <div className='flex items-center space-x-2 -mt-5'>
            <img className='w-12' src={'https://links.papareact.com/fdw'}/>
            <p className='text-xs text-gray-500'>FREE Next-day delivery</p>
          </div>
        )}

        <button className='mt-auto button'>Add to Basket</button>
    </div>




    /*   <div className='relative flex flex-col m-5 bg-white z-30 p-10'> 

 





 
        <p className='absolute top-2 right-2 text-xs italy text-gray-400'>{category}</p>
        <Image src={image} height={200} width={200}/>
        <h4 className='my-3'>{tittle}</h4>

        <div className='flex'>
        {Array(rating)
        .fill()
        .map(() =>(

          <StarIcon className='h-5 text-yellow-500'/>

        ))}
        </div>

        <p className='text-xs my-2 line-clamp-2'>description</p>
        <div className='mb-6'>
          <CurrencyDollarIcon quantity={10000}/>
        </div>
        {hasPrime &&(
          <div className='flex items-center space-x-2 -mt-5'>
            <img className='w-12' src='https://links.papareact.com/fdw'/>
            <p className='text-xs'>FREE Next-day delivery</p>
          </div>
        )}

        <button>Add to Basket</button>
        
        
    </div>*/
  )
}


export default Product