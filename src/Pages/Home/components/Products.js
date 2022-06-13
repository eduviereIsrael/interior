import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Products = ({products}) => {
    console.log(products)
  return (
      <div className='product-sect'>
        <div className='section'>
            <div className='inner-sect'>
                <div className='links-div'>
                <h2>OUR <br /> PRODUCTS</h2>
                <button className='primary-link'>VIEW ALL PRODUCTS</button>
                </div>
                <div className='products-list'>
                    {products.map((product) => (
                        <div className='prod-card flex-col jc-sb ai-fs' key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <div className='prod-details'>
                            <p>{product.title}</p>
                            <h6>${product.price}</h6>
                            <div className='prod-btns'>
                                <Link to={`/product/${product.id}`}>
                                    <button className='sec-btn'>shop</button>
                                </Link>
                                <div className='cart-icon'>
                                    <FaShoppingCart />
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        <Outlet />
    </div>
  )
}

export default Products