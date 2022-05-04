import React from 'react'
import './listing.css'
import Image from 'react-image-webp'

const Listing = ({price, title, address, image, imageWebp, owner, ownerImage, ownerImageWebp}) => {
  return (
    <div className='listing'>
      <div className="listing__card">
        <div className="listing__image">
        <Image
          className='img'
          src={image}
          webp={imageWebp}
        />
          <h4>{price}</h4>
        </div>
        <h2>{title}</h2>
        <p>{address}</p>
        <div className="owner__detail">
          <Image
            className='img'
            src={ownerImage}
            webp={ownerImageWebp}
          />
          <p>{owner}</p>
        </div>
      </div>
    </div>
  )
}

export default Listing