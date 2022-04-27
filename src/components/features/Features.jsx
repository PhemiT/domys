import React from 'react'
import './features.css'
import { RiMessage3Fill, RiSecurePaymentFill, RiGuideFill } from 'react-icons/ri'

const Features = () => {
  return (
    <div className='features'>
      <div className="features__container container">
        <div className="features__text">
          <h5>WHY DOMYS?</h5>
          <h1>Find the Perfect Place in the Fastest, Most Secure Way Possible</h1>
          <p>We'll guide you to find your perfect place and guide you through our safe and secure purchasing/renting process.</p>
        </div>
        <div className="features__feature">
          <article>
            <span><RiSecurePaymentFill /></span>
            <h1>Secure Payments</h1>
            <p>Most secure way to purchase/rent properties. Sign Up and you're well on your way.</p>
          </article>

          <article>
            <span><RiMessage3Fill /></span>
            <h1>24/7 Support</h1>
            <p>Our support center is always available to help you with whatever situation you might face.</p>
          </article>

          <article>
            <span><RiGuideFill /></span>
            <h1>Tips and Guides</h1>
            <p>Confused about what to get? Don't worry! We hve agents available to guide your decision</p>
          </article>
        </div>
        
      </div>
    </div>
  )
}

export default Features