import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../../Global/ProductCard';
import './OurProducts.css'

const OurProducts = () => {

  const [product, setProduct] = useState([]);
  

  useEffect(() => {
    axios.get('http://fakestoreapi.com/products')
      .then(res => setProduct(res.data))

      .catch(err => console.log(err))
  
  }, [])

  
  // setIdProduct(product)


  return (
    <div className='Products-page'>
      <div className='section'>
        <div className='inner-products-page'>
          <h1>SHOP OUR EXCLUSIVE LIST <br /> OF QUALITY PRODUCTS</h1>
          <div className='products-list-real'>
            {product.map((product) => (
              <ProductCard key={product.id} product = {product} class={"prod-card"}/>
            ))}
          </div>
        </div>
      </div>
      {console.log(product)}
    </div>
  )

}

// export function getTheProduct(id) {


//   return product.find(
//     (product) => product.id === id
//   );
// }

export default OurProducts