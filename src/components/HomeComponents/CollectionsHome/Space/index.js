import React, {useEffect} from 'react';
import './styles.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
const Space = ({colorchangeto}) => {
  const changeBackgroundColor = () => {
    // fil temporel
    const tl = gsap.timeline(
      {paused: true,
       
      scrollTrigger: {
        trigger: "#space",
        endTrigger: "#space",
        scrub: true,
       
        start: 'top 50%',
        end: 'bottom 100%',
      }
    })
    tl.to('#space',
    {
      
      backgroundColor:'#000000',
    }

    )
  }

  


  
  useEffect(()=>{
    changeBackgroundColor();
  },[]);

  return (
    <section id='space'className='space'>

      <div className='div-in-space'>

      </div>
    </section>
  )
}

export default Space;