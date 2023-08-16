import React from 'react'
import './featured.css'
import { Listing } from '../index'
import {
  property1,
  property2,
  property3,
  property4,
  property5,
  property6,
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
        <Listing price='$900,000' title='Modern Manor' address='1755 Glendale Avenue, Woodland Hills' image={property2} owner='Joan Summers' ownerImage={realtor2} />
        <Listing price='$3,000,000' title='Smart Luxury Duplex' address='3975 Yorkshire Circle, Greenville' image={property3} owner='Abbie Ablo' ownerImage={realtor3} />
        <Listing price='$1,200,000' title='Poolside Mansion' address='1274 Lake Drive, Sunshine Valley' image={property4} owner='Ruth Smith' ownerImage={realtor2} />
        <Listing price='$2,500,000' title='Not Haunted Villa' address='6597 Pine Hill Road, Misty Peaks' image={property5} owner='Mia Ablo' ownerImage={realtor3} />
        <Listing price='$800,000' title='Urban Loft' address='992 Downtown Street, Metro City' image={property6} owner='Arnett Taylor' ownerImage={realtor1} />
      </div>
      <div className="ff__cta">
        <a href="#discover" className='featured__cta'>Discover More</a>
      </div>
    </div>
  )
}

export default Featured