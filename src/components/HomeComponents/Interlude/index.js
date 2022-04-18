import React, {useEffect} from 'react';
import './styles.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
const Interlude = ({text}) => {
  const changeBackgroundColor = () => {
    // fil temporel
    const tl = gsap.timeline(
      {paused: true,
       
      scrollTrigger: {
        trigger: "#interlude",
        endTrigger: "#interlude",
        scrub: true,
       
        start: 'top 80%',
        end: 'bottom 100%',
      }
    })
    tl.to('#interlude',
    {
      
      backgroundColor:"#000000",
    }

    )
  }

  const moveText = (textClass, x, y,rz) => {
    // fil temporel
    const tl = gsap.timeline(
      {paused: true,
       
      scrollTrigger: {
        trigger: "#interlude",
        endTrigger: "#interlude",
        scrub: true,
      
        start: 'top 100%',
        end: "=+1900",
      }
    })
    tl.to(textClass,
    {
      x: x,
      y:y,
      rotateX: rz,
      rotateY: rz,
    }

    )
  }
  const interludeAnimationScroll = (textclass, x, y) => {
  
    let digitalTl = gsap
    .timeline({
      // defaults: {
      //     duration: 1
      // },
      paused: true
    })
   

    ScrollTrigger.create({
      // onUpdate: ({progress}) => aboutTl.progress() < progress ? aboutTl.progress(progress) : null,
      animation: digitalTl,
      trigger: "#interlude",
    
      start: "top 0",
      end: "=+900",
      scrub: true,
      pin: true,
      id: "#interlude",
      
      //once: true,
        
      onLeave: function(self) {
        //self.disable()
        self.animation.progress(1)
      }
      
    });
  }

  useEffect(()=>{
    changeBackgroundColor()
  },[]);
  useEffect(()=>{
    moveText('.text-big-2', -1000, 0, 0);
  },[]);
  useEffect(()=>{
    moveText('.text-big-1', -1000, 0, 0);
  },[]);
  useEffect(()=>{
    moveText('.text-small-1', +2000, 0,0);
  },[]);
  return (
    <section id='interlude'className='interlude'>

      <div className='text-wrapper'>
        <h2 className='interlude-text  text-big-1'>{text}</h2>
        <h2 className='interlude-text text-small-1'>{text} - {text} - {text} - {text} - {text} - {text}</h2>
        <h2 className='interlude-text text-big-2'>{text}</h2>
      </div>
    </section>
  )
}

export default Interlude;