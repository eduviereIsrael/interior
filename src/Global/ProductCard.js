import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    console.log(props)
  return (
    <div>
        <div className={`${props.class} flex-col jc-sb ai-fs`} key={props.product.id}>
            <img src={props.product.image} alt={props.product.name} />
            <div className='prod-details'>
                <p>{props.product.title}</p>
                <h6>${props.product.price}</h6>
                <div className='prod-btns'>
                    <Link to={`/product/${props.product.id}`}>
                        <button className='sec-btn'>shop</button>
                    </Link>
                    <div className='cart-icon'>
                        <FaShoppingCart />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard