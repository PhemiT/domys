import React from 'react'
import './process.css'
import Vintage  from '../../assets/vintage.jpg'
import Dinner from '../../assets/dinner.jpg'
import Minimalist from '../../assets/minimalist.jpg'

const Process = () => {
  return (
    <div className='process container'>
      <div className="process__title">
        <div className='sect__line' />
        <p>OUR BLOG</p>
      </div>
      <div className="subtitle">
        <h1>Latest housing information.</h1>
        <p>Get up-to-date information on real estate trends and activity that influence pricing.</p>
        <a href="#seeall">See All Articles</a>
      </div>
      <div className="process__content">
        <article>
          <img src={Vintage} alt="vintage home" />
          <h6>26, January 2022</h6>
          <p>A guide to Vintage Homes</p>
          <a href="#rdm">Read More</a>
        </article>

        <article>
          <img src={Dinner} alt="dinner table" />
          <h6>20, July 2021</h6>
          <p>How to set up a snazzy looking dining section</p>
          <a href="#rdm">Read More</a>
        </article>
        
        <article>
          <img src={Minimalist} alt="minimalist home" />
          <h6>21, December 2021</h6>
          <p>Minimalist Decor? Yes or...?</p>
          <a href="#rdm">Read More</a>
        </article>
      </div>
    </div>
  )
}

export default Process