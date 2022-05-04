import React from 'react'
import './featured.css'
import { Listing } from '../index'
import {
  owner1,
  owner2,
  owner3,
  owner4,
  owner5,
  owner6,
  property1,
  property2,
  property3,
  property4,
  property5,
  property6,
  owner1webp,
  owner2webp,
  owner3webp,
  owner4webp,
  owner5webp,
  owner6webp,
  property1webp,
  property2webp,
  property3webp,
  property4webp,
  property5webp,
  property6webp
} from './imports'

const Featured = () => {
  return (
    <div className='featured container'>
      <h1>Featured Properties</h1>
      <div className="featured__listings">
        <Listing price='$650,000' title='Plaza by the Sea' address='2051 Echo Lane, Grand Rapids' image={property1} imageWebp={property1webp} owner='Ernest Taylor' ownerImage={owner1} ownerImageWebp={owner1webp} />
        <Listing price='$900,000' title='Quaint Modern Home' address='1755 Glendale Avenue, Woodland Hills' image={property2} imageWebp={property2webp} owner='Richard Doe' ownerImage={owner2} ownerImageWebp={owner2webp} />
        <Listing price='$3,000,000' title='Smart Luxury Duplex' address='3975 Yorkshire Circle, Greenville' image={property3} imageWebp={property3webp} owner='Walter Lay' ownerImage={owner3} ownerImageWebp={owner3webp} />
        <Listing price='$3,450,000' title='Glass Dome' address='1054 Randall Drive, Honolulu' image={property4} imageWebp={property4webp} owner='Sophia Gonzales' ownerImage={owner4} ownerImageWebp={owner4webp} />
        <Listing price='$2,000,000' title='Boulevard Mansion' address='1600 Eagle Street, Belleville' image={property5} imageWebp={property5webp} owner='Karen Gilmore' ownerImage={owner5} ownerImageWebp={owner5webp} />
        <Listing price='$4,000,000' title='Sunlit Glass Plaza' address='2619 Maud Street, Wilmington' image={property6} imageWebp={property6webp} owner='Peggy Ullery' ownerImage={owner6} ownerImageWebp={owner6webp} />
      </div>
      <div className="ff__cta">
        <a href="#discover" className='featured__cta'>Discover More</a>
      </div>
    </div>
  )
}

export default Featured