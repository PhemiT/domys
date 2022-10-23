import React from 'react'
import './header.css'
import { BsArrowUpCircleFill, BsArrowDownCircleFill, BsFillHouseFill } from 'react-icons/bs'
import { MdLocationPin } from 'react-icons/md'
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

  const toggleActive = () => {
    console.log('working')
  }

  return (
    <div className='header container'>
      <div className="header__content">
        <h1>Buy and Rent the Perfect <br /><span className='typed-text' style={{ whiteSpace: 'pre' }} ref={el} />that suits you.</h1>
        <p>Helping you find the perfect property quickly and securely.</p>
        <div className="header__cta">
          <div className="cta__button">
            <div className="buy active" onClick={toggleActive} >
              <BsArrowUpCircleFill className='icon'/>
              <a href="#buy">Buy</a>
            </div>
            <div className="rent" onClick={toggleActive}>
              <BsArrowDownCircleFill className='icon'/>
              <a href="#rent">Rent</a>
            </div>
          </div>
          <div className="cta__search">
            <span><MdLocationPin className='cta__icon' /><input type="text" placeholder='Location' /></span>
            <span><BsFillHouseFill className='cta__icon' /><input type="text" placeholder='Property Type' /></span>
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