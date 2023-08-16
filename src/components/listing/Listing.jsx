import React from 'react';
import './listing.css';

const Listing = ({price, title, address, image, imageWebp, owner, ownerImage, ownerImageWebp}) => {
  return (
    <div className='listing'>
      <div className="listing__card">
        <div className="listing__image">
        <img
          className='img'
          src={image}
          alt='property'
        />
          <h4>{price}</h4>
        </div>
        <h2>{title}</h2>
        <p>{address}</p>
        <div className="owner__detail">
          <img
            className='img'
            src={ownerImage}
            alt='realtor'
          />
          <p>{owner}</p>
        </div>
      </div>
    </div>
  )
}

export default Listing