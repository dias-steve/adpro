

import React from 'react'
import './styles.scss'

const Hero = (props) => {
  return (
    <section className='hero'>
      
      <div className='hero-logo'style={{backgroundImage:`url(${props.logo})`}}/>
      <img className='hero-img'src={props.image}/>
      
    </section>
  )
}

export default Hero;