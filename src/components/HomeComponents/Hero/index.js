import React, { useEffect } from 'react'
import './styles.scss'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
const Hero = (props) => {
  const onLoadHeroAnimation = () => {
    gsap.timeline()
    .from(
      ".hero-logo",
      {
        //état d'arrivé
        scale:0,
        duration:2,
      })
    .from( ".hero-img",
    {
      //état d'arrivé
      scale:0,
      duration:2,
      delay:0.1
    })
  }
  useEffect(()=>{
    onLoadHeroAnimation()
  },[])

  return (
    <section id='hero' className='hero'>
      
      <div className='hero-logo'style={{backgroundImage:`url(${props.logo})`}}/>
      <img className='hero-img'src={props.image}/>
      
    </section>
  )
}

export default Hero;