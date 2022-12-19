import React from 'react'
import Product from './Product';
import datosJson from './datos.json'
const products = datosJson["products"];
console.log(products)

function ProductFeed() {

  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
       {products.slice(0, 4).map((products) => <Product
        key={products.id} 
        id={products.id} 
        category={products.category}
        title={products.title}
        price={products.price}
        description={products.description}
        imagen={products.imagen}
      />
  )}

        <img className='md:col-span-full' src='https://links.papareact.com/dyz' alt=''/>
        
        <div className='md:col-span-2'>
        {products.slice(4, 5).map((products) => <Product
        key={products.id} 
        id={products.id} 
        category={products.category}
        title={products.title}
        price={products.price}
        description={products.description}
        imagen={products.imagen}
      />
  )}
        </div>
        {products.slice(5, products.length).map((products) => <Product
        key={products.id} 
        id={products.id} 
        category={products.category}
        title={products.title}
        price={products.price}
        description={products.description}
        imagen={products.imagen}
      />
  )}
    </div>
    
  );
}

export default ProductFeed;