import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProductDesc.css'
// import { getproduct } from '../../Global/PRODUCTS';


const ProductDesc = () => {

  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    axios.get('http://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data) 
        console.log(products)
        })

      .catch(err => console.log(err))
  
  },[])

  let params = useParams();


  let getproduct = (productId) => {
    return products.find((product) => product.id === productId)
  }

  let product = getproduct(parseInt(params.id))
  // console.log(product)
  // setTimeout(() => loggin(), 3000)
  // setInterval( console.log(product), 1000)

  // const loggin = () => {
  //  console.log(products)
  //  return
  // }


  return (
    <div className='product-desc-page'>
      <div className='section'>
        {console.log(product)}
        {product? <div className='product-page-details'>
            <div className='product-page-details-card flex-row jc-sb ai-fs'>
              <div className='product-page-img'>
                <img src={product.image} alt={product.name}/>
              </div>
              <div className='product-detail'>
                <h4>{product.title}</h4>
                <hr className='horizon-line'/>
                <h6>Details:</h6>
                <p>{product.description}.</p>
                <div>
                  
                </div>
                <button className='sec-btn'>Add to cart</button>
              </div>
            </div>
        </div>
        : <h1>couldn't get products</h1>}
      </div>
    </div>
    
    // <></>
  )
}

export default ProductDesc