import React from 'react'
import './footer.css'
import { RiHomeHeartFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='footer container'>
      <div className="footer__container">
        <div className="footer__details">
          <div className="logo">
            <RiHomeHeartFill className='logo__icon'/>
            <h3>DOMYS</h3>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nostrum corrupti optio sit cumque molestiae?</p>
          <div className="email__form">
            <input type="email" placeholder='Email Address' />
            <a href="#submit">Submit</a>
          </div>
          <p>* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint incidunt nihil ullam.</p>
        </div>
        <div className="footer__link">
          <h3>Hyperlinks</h3>
          <a href="#Listings">Listings</a>
          <a href="#buy">Purchase a Property</a>
          <a href="#rent">Rent a Property</a>
          <a href="#blog">Blog</a>
        </div>
        <div className="footer__support">
          <h3>Support</h3>
          <a href="#faqs">FAQs</a>
          <a href="#cuscare">Customer Care</a>
          <a href="#hpcent">Help Center</a>
        </div>
        <div className="footer__company">
          <h3>Company</h3>
          <a href="#story">Our Story</a>
          <a href="#about">Meet our Team</a>
          <a href="#hwt">How we Work</a>
        </div>
      </div>
      <div className="copyright">
        <div className='divs__line' />
        <p>&copy;2022 Domys Inc. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer