import React from 'react'
import Banner from './components/Banner'
import Portfolio from './components/Portfolio'
import Products from './components/Products'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import './Home.css'

const Home = (props) => {
  return (
    <>
      <div className='section home'>
        <div className='home-cont'>
          <div className='left-part flex-col jc-c'>
            <div className='hero-intro'>
              <h1 className='hero-heading'>
              WE ARE A TEAM OF <br /> EXPERT INTERIOR DESIGNERS
              </h1>
              <button className='primary-btn'>Get Started</button>
            </div>
            <div className='stats'></div>
          </div>
          <div className='right-part flex-row'>
            <img src="assets/images/homepage.png" alt="Interior design" />
          </div>
        </div>
      </div>
      <Services />
      <Portfolio />
      <Products products = {props.products}  />
      <Banner />
      <Testimonials />
    </>
  )
}

export default Home