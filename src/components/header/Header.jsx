import React from 'react'
import './header.css'
import { BsArrowUpCircleFill, BsArrowDownCircleFill } from 'react-icons/bs'

const Header = () => {
  return (
    <div className='header container'>
      <div className="header__content">
        <h1>Buy and Sell Properties Quick and Securely.</h1>
        <p>Helping you find the perfect property or sell your properties quickly and securely.</p>
        <div className="header__cta">
          <div className="cta__button">
            <div className="buy">
              <BsArrowUpCircleFill className='icon'/>
              <a href="#buy">Buy</a>
            </div>
            <div className="sell">
              <BsArrowDownCircleFill className='icon'/>
              <a href="#sell">Sell</a>
            </div>
          </div>
          <div className="cta__search">
            <input type="text" placeholder='Location' />
            <input type="text" placeholder='Apartment Type' />
            <button>Search</button>
          </div>
        </div>
        <p id='discover'><a href="#"><BsArrowDownCircleFill /></a> Discover more offers and properties</p>
      </div>
    </div>
  )
}

export default Header