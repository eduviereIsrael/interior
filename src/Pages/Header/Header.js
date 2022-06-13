import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Header.css';
import { FaShoppingCart, FaBars, FaWindowClose } from 'react-icons/fa';






const Header = () => {


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const links = [
        {
            name: 'Home',
            path: '/'

        },
        {
            name: 'Booking Plans',
            path: '/plans'

        },
        {
            name: 'Our Products',
            path: '/products'

        },
        {
            name: 'About',
            path: '/about'

        },
        {
            name: 'Contact',
            path: '/contact'

        },
    ]

  return (
      <div className='nav'>
        <div className='nav-menu'>
            <div className='logo'>
                <img src="assets/images/logo.png" alt="logo" />
            </div>
            <div className='nav-links desktop'>
                {links.map(({name, path}, index) => (
                    <Link key={index} to={`${path}`} 
                    className='links'
                    >
                       <p> {name}</p>
                    </Link>
                ))}
                {/* <NavLink to="/home" 
                    className={`links ${activeLink === 'home' ? 'links-active' : ''}`}>
                    Home
                </NavLink>
                <NavLink to="/plans" className="links">
                    Booking Plans
                </NavLink>
                <NavLink to="/products" className="links">
                    Our Products
                </NavLink>
                <NavLink to="/about" className="links">
                    About
                </NavLink>
                <NavLink to="/contact" className="links">
                    Contact
                </NavLink> */}
            </div>
            <div className='mobile-nav'>
                {!isMobileMenuOpen && 
                    <div className='hamburger'>
                        <FaBars onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen) } />
                    </div>
                }
                {isMobileMenuOpen && 
                    <div className='close-menu'>
                        <FaWindowClose onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen) }/>
                    </div>
                }
                
                
                
                
            </div>
            
            <div className='cart'>
                Cart
                <div className='header-cart desktop'>
                    <FaShoppingCart />
                </div>
            </div>
        </div>
        <div className={` mobile-menu ${ isMobileMenuOpen? "active mobile-menu" : 'mobile-menu' }`}>
                    {links.map(({name, path}, index) => (
                        <Link key={index} to={`${path}`} 
                        // className={`links ${ isMobileMenuOpen? "active" : '' }`}
                        className="links"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                        <p> {name}</p>
                        </Link>
                    ))}
        </div>
    </div>
  )
}

export default Header