import React, {useEffect} from 'react'
import './styles.scss'
import closeIcon from './../../../../assets/croix-blanc.svg';
import Mobile from '../../../mobile';
import Photoframe from '../../../Photoframe';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const CollectionComputer = ({collectionData}) => {
  const {image_1_accueil,image_2_accueil,image_3_accueil, titre_accueil, mobile} = collectionData
  const divRightStyle = {
    background:`url(${image_1_accueil})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const changeBackgroundColor = () => {
    // fil temporel
    const tl = gsap.timeline(
      {paused: true,
       
      scrollTrigger: {
        trigger: "#computer-collection",
        endTrigger: "#computer-collection",
        scrub: true,
       
        start: 'top 50%',
        end: 'bottom 100%',
      }
    })
    tl.to('#computer-collection',
    {
      
      backgroundColor:"#000000",
    }

    )
  }



  const ComputerAnimationScroll = () => {
  
    let digitalTl = gsap
    .timeline({
      // defaults: {
      //     duration: 1
      // },
      paused: true
    })
    .to('.computer-right',{
     visibility: 'visible',
     
    }).to('.computer-right',{
      scale:2.5
     }).to('.photoframe1',{
      visibility:'visible'
     }).to('.photoframe2',{
      visibility:'visible'
     }).to('#computer-collection > .mobile-device',{
      visibility:'visible'
     })

    ScrollTrigger.create({
      // onUpdate: ({progress}) => aboutTl.progress() < progress ? aboutTl.progress(progress) : null,
      animation: digitalTl,
      trigger: "#computer-collection",
    
      start: "top 0",
      end: "=+1500",
      scrub: true,
      pin: true,
      id: "#computer-collection",
      
      //once: true,
        
      onLeave: function(self) {
        //self.disable()
        self.animation.progress(1)
      }
      
    });
  }

  useEffect(()=>{
    //changeBackgroundColor();
  },[]);
  useEffect(()=>{
    ComputerAnimationScroll();
  },[]);
  return (
    <section id='computer-collection' className='computer-collection'>
    <div className='container-left'>
      <div className='wrapper-photoframe photoframe1'>
        <Photoframe image={image_2_accueil}/>
      </div>
      <div className='wrapper-photoframe photoframe2'>
        <Photoframe image={image_3_accueil}/>
      </div>

      
    </div>
    <div className='container-right computer-right' style={divRightStyle}>
      <img src={closeIcon}/>
      
    </div>
    <Mobile mobileData= {mobile}/>
    
    </section>
  )
}

export default CollectionComputer;