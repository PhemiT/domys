import React from 'react'
import './featured.css'
import { Listing } from '../index'
import {
  property1,
  property2,
  property3,
  realtor1,
  realtor2,
  realtor3
} from './imports'

const Featured = () => {
  return (
    <div className='featured container'>
      <h1>Featured Properties</h1>
      <div className="featured__listings">
        <Listing price='$650,000' title='Plaza by the Sea' address='2051 Echo Lane, Grand Rapids' image={property1} owner='Ernest Taylor' ownerImage={realtor1} />
        <Listing price='$900,000' title='Modern Home' address='1755 Glendale Avenue, Woodland Hills' image={property2} owner='Joan Summers' ownerImage={realtor2} />
        <Listing price='$3,000,000' title='Smart Luxury Duplex' address='3975 Yorkshire Circle, Greenville' image={property3} owner='Abbie Ablo' ownerImage={realtor3} />
      </div>
      <div className="ff__cta">
        <a href="#discover" className='featured__cta'>Discover More</a>
      </div>
    </div>
  )
}

export default Featured