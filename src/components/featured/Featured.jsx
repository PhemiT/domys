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
  property6
} from './imports'

const Featured = () => {
  return (
    <div className='featured container'>
      <h1>Featured Properties</h1>
      <div className="featured__listings">
        <Listing price='$650,000' title='Plaza by the Sea' address='2051 Echo Lane, Grand Rapids' image={property1} owner='Ernest Taylor' ownerImage={owner1}/>
        <Listing price='$900,000' title='Quaint Modern Home' address='1755 Glendale Avenue, Woodland Hills' image={property2} owner='Richard Doe' ownerImage={owner2}/>
        <Listing price='$3,000,000' title='Smart Luxury Duplex' address='3975 Yorkshire Circle, Greenville' image={property3} owner='Walter Lay' ownerImage={owner3}/>
        <Listing price='$3,450,000' title='Glass Dome' address='1054 Randall Drive, Honolulu' image={property4} owner='Sophia Gonzales' ownerImage={owner4}/>
        <Listing price='$2,000,000' title='Boulevard Mansion' address='1600 Eagle Street, Belleville' image={property5} owner='Karen Gilmore' ownerImage={owner5}/>
        <Listing price='$4,000,000' title='Sunlit Glass Plaza' address='2619 Maud Street, Wilmington' image={property6} owner='Peggy Ullery' ownerImage={owner6}/>
      </div>
      <div className="ff__cta">
        <a href="#discover" className='featured__cta'>Discover More</a>
      </div>
    </div>
  )
}

export default Featured