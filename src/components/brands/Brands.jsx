import React from 'react'
import './brands.css'
import Netflix from '../../assets/netflix.png'
import Oracle from '../../assets/oracle.png'
import Paypal from '../../assets/paypal.png'
import Visa from '../../assets/visa.png'
const Brands = () => {
  return (
    <div className='brands brands__container'>
      <div className="brand__content">
        <div className="brand"><img src={Netflix} alt="netflix" /></div>
        <div className="brand"><img src={Oracle} alt="oracle" /></div>
        <div className="brand"><img src={Paypal} alt="paypal" /></div>
        <div className="brand"><img src={Visa} alt="visa" /></div>
      </div>
    </div>
  )
}

export default Brands