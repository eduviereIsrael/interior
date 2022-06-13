import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';





const Footer = () => {

    const [formValue, setFormValue] = useState({ email: '' })

    const links = [

        {
            name: 'Booking Plans',
            path: '/plans'

        },
        {
            name: 'About ',
            path: '/about'

        },
        {
            name: 'Contact',
            path: '/contact'

        },
    ]

  return (
      <div className=' footer'>
        <div className='footer-menu'>
            <div className='logo'>
                <img src="assets/images/logo.png" alt="logo" />
            </div>
            <div className='footer-tab'>
                <div className='footer-links'>
                    {links.map(({name, path}, index) => (
                        <Link key={index} to={`${path}`} 
                        className='links'
                        >
                            {name}
                        </Link>
                    ))}
                    
                </div>
                <div className='socials'>
                    <div className='social'>
                        <FaInstagram /> 
                    </div>
                    <div className='social'>
                        <FaFacebook />
                    </div>
                    <div className='social'>
                        <FaTwitter />
                    </div>
                </div>
            </div>
            <form className='footer-form'>
                    <h5>Subscribe to our Newsletter</h5>
                    <input 
                        type='text' 
                        id="email" 
                        name="email" 
                        value={formValue.email} 
                        onChange={e => setFormValue(e.target.value)}
                        placeholder="email"
                        />
                        <button className='primary-btn footer-btn' type='submit'>Join</button>
            </form>
        </div>
        <p style={{color:"#fff", marginTop: "50px"}}>All rights reserved</p>
    </div>
  )
}

export default Footer