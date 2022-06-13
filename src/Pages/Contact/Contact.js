import React, { useState } from 'react';
// import FetchingData from '../../Global/FetchingData';
import './Contact.css'

const Contact = () => {

  const [form, setForm] = useState({ 
    
    name: '',
    email: '',
    telephone: '',
    city: '',
    message: ''
 
   })

  const handleChange = e => {
    setForm({
      [e.target.name] : e.target.value
    })
  }

  return (
    <div className='contact'>
      <div className='section'>
        <div>
          <h1>WE HOPE TO HEAR FROM YOU SOON</h1>
          <form className="contact-form">
            <formgroup>
              <label for="fullName">Name/Company Name</label>
              <input type="text" id="name" name="name" 
               placeholder='your name'
               value={form.name}
              onChange={handleChange}
              />
            </formgroup>
            <formgroup>
              <label for="email">Email</label>
              <input type="email" id="email" name="email" value={form.email} 
               placeholder='you@email.com'
               onChange={handleChange}
              />
            </formgroup>
            <formgroup>
              <label for="telephone">Telephone</label>
              <input type="tel" id="telephone" name="telephone" value={form.telephone} 
               placeholder='phone number'
               onChange={handleChange}
              />
            </formgroup>
            <formgroup>
              <label for="city">City</label>
              <input type="text" id="city" name="city" value={form.city} 
               placeholder='your city'
               onChange={handleChange}
              />
            </formgroup>
            <formgroup>
              <label for="message">Message</label>
              <textarea rows="3" cols="35" type="text" id="message" name="message" value={form.message} 
               placeholder='would you love to schedule a meeting?'
               onChange={handleChange}
              />
            </formgroup>
            <button type='submit' className='primary-btn'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact