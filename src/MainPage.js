import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Home, BookingPlans, OurProducts, About, Contact, ProductDesc } from './Pages'
import { Routes, Route} from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
// import PRODUCTS from './Global/PRODUCTS'
import Header from './Pages/Header/Header'
import Footer from './Pages/Footer/Footer';




const MainPage = () => {


  const [product, setProduct] = useState([]);
  

  useEffect(() => {
    axios.get('http://fakestoreapi.com/products')
      .then(res => setProduct(res.data))

      .catch(err => console.log(err))
  
  }, [])

  //  function getproduct(id) {
  //   return product.find(
  //     (product) => product.id === id
  //   );
  // }

  return (
    <div>
        <BrowserRouter>
        <Header />
          <Routes>
              <Route path = '/' element={<Home products = {product.slice(0, 4)} />} />
              <Route path = '/plans' element={<BookingPlans/>} />
              <Route path = '/products' element={<OurProducts products = {product}/>} />
              <Route path = '/about' element={<About/>} />
              <Route path = '/contact' element={<Contact/>} />
              <Route path = '/product/:id' element={<ProductDesc  products = {product}/>}/>
              {/* <Route path = '/ourproduct/:id' element={<ProductDesc />}/> */}

          </Routes>
        <Footer />
        </BrowserRouter>
        {/* <Home /> */}
    </div>
  )
}



export default MainPage