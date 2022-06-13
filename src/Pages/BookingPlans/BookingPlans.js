import React from 'react';
import PLANS from '../../Global/PLAN';
import './BookingPlans.css';

const BookingPlans = () => {
  return (
    <div className='Booking-Plans'>
      <div className='section'>
        <div className='inner-booking-sect'>
          <h1>WE HAVE THE RIGHT PLAN <br /> FOR YOU</h1>
          <div className='plans'>
            
            {PLANS.map((plan) => (
              <div className='plan-card' key={plan.id}>
              <div className='plan-icon'></div>
              <h6>{plan.name}</h6>
              <div className='features'>
                {plan.features.map((feature) => (
                  <p key={feature.id}>{feature.text}</p>
                ))}
                <p>features</p>
              </div>
              <h6>Starts from ${plan.price}</h6>
              <button className='sec-btn'>Add to cart</button>
            </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingPlans