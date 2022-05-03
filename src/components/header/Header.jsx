import React from 'react'
import './header.css'
import { BsArrowUpCircleFill, BsArrowDownCircleFill } from 'react-icons/bs'
import Typed from 'typed.js'

const Header = () => {
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'Store',
        'Office Space',
        'Home'
      ],
      typeSpeed: 70,
      backSpeed: 60,
      showCursor: true
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <div className='header container'>
      <div className="header__content">
        <h1>Buy and Rent the Perfect <br /><span className='typed-text' style={{ whiteSpace: 'pre' }} ref={el} /> that suits you.</h1>
        <p>Helping you find the perfect property quickly and securely.</p>
        <div className="header__cta">
          <div className="cta__button">
            <div className="buy">
              <BsArrowUpCircleFill className='icon'/>
              <a href="#buy">Buy</a>
            </div>
            <div className="sell">
              <BsArrowDownCircleFill className='icon'/>
              <a href="#sell">Rent</a>
            </div>
          </div>
          <div className="cta__search">
            <input type="text" placeholder='Location' />
            <input type="text" placeholder='Property Type' />
            <button>Search</button>
          </div>
        </div>
        <p id='discover'><a href="#sth"><BsArrowDownCircleFill /></a> Discover more offers and properties</p>
      </div>
      <div className="image__split--section"></div>
    </div>
  )
}

export default Header