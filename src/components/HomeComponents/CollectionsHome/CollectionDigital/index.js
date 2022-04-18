import React, { useEffect,  useRef } from 'react';
import Mobile from '../../../mobile';
import './styles.scss'
import closeIcon from './../../../../assets/croix-blanc.svg'
import Photoframe from '../../../Photoframe';
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const CollectionDigital = ({collectionData}) => {

  const {image_1_accueil,image_2_accueil, titre_accueil, mobile} = collectionData
  
  const hStyle = {
        background:`url(${image_1_accueil})`,
        backgroundSize: 'cover',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
  };
  const titleRef = useRef()
  const changeBackgroundColor = () => {
    // fil temporel
    const tl = gsap.timeline(
      {paused: true,
       
      scrollTrigger: {
        trigger: "#digital-collection",
        endTrigger: "#digital-collection",
        scrub: true,
       
        start: 'top 50%',
        end: 'bottom 100%',
      }
    })
    tl.to('#digital-collection',
    {
      
      backgroundColor:"#FFFFFF",
    }).to('.digital-collection-title',{
      opacity:1
    }

    )
  }

  const digitalAnimationScroll = () => {
  
    let digitalTl = gsap
    .timeline({
      // defaults: {
      //     duration: 1
      // },
      paused: true
    })
    .to('.digital-collection-title',{
      x: -titleRef.current.clientWidth/1.3,
    }).to('.digital-collection-photo1',{
      delay:0.2,
      visibility: 'visible',
    }).to('.digital-collection-photo2',{
      delay:0.2,
      visibility: 'visible',
    }).to('.digital-collection-photo3',{
      delay:0.2,
      visibility: 'visible',
    }).to('#digital-collection > .mobile-device',{
      delay:0.2,
      visibility: 'visible',
    });
  
    ScrollTrigger.create({
      // onUpdate: ({progress}) => aboutTl.progress() < progress ? aboutTl.progress(progress) : null,
      animation: digitalTl,
      trigger: "#digital-collection",
    
      start: "top 0",
      end: "=+1500",
      scrub: true,
      pin: true,
      id: "#digital-collection",
      
      //once: true,
        
      onLeave: function(self) {
        //self.disable()
        self.animation.progress(1)
      }
      
    });
  }

  useEffect(()=>{
    changeBackgroundColor();
  },[])

  useEffect(()=>{
    digitalAnimationScroll();
  },[])

  return (
    <section id='digital-collection' className='digital-collection'>

      <div className='wrapper'>
        <h1 className='digital-collection-title'style={hStyle} ref={titleRef}> {titre_accueil}</h1>
      </div>
      <div className='photoframe-group'>
        <div className='photoframe-wrapper digital-collection-photo1'>
          <Photoframe image={image_2_accueil} />
        </div>
        <div className='photoframe-wrapper digital-collection-photo3'>
          <Photoframe image={image_2_accueil} />
        </div>
        <div className='photoframe-wrapper digital-collection-photo2'>
          <Photoframe image={image_2_accueil} />
        </div>
  
      </div>
      <Mobile mobileData= {mobile}/>
    </section>
  )
}




export default CollectionDigital;