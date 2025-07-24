import React from 'react'
import './Contect.css'
import con from '../../assets/con.webp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger) // Register ScrollTrigger plugin for scroll-based animations

const Contect = () => {

  useGSAP(()=>{
    gsap.from(".leftcontact img",{
    x: -100,
    duration: 1,
    opacity: 0,
    stragger: 1, 
    scrollTrigger: {  
      trigger: ".leftcontact img",
      scroll:"body",
      scrub:2,
      start: "top 80%", 
      end: "top 30%" 
    }
  })

  gsap.from("form ",{
    y: 100,
    duration: 1,
    opacity: 0,
    stragger: 1, 
    scrollTrigger: {  
      trigger: "form",
      scroll:"body",
      scrub:2,
      start: "top 80%", 
      end: "top 30%" 
    }
  })
  })

  return (
    <div id='contact'>

      <div className="leftcontact">
        <img src={con} alt="" />
      </div>

      <div className="rightcontact">

        <form action="https://formspree.io/f/xjkrdged" method="POST">
          <input name='username' type="text" placeholder='Name'/>
          <input name="email" type="email" placeholder='Email' />
          <textarea name="message" id="textarea" placeholder='message me'></textarea>
          <input type="submit" id='btn' value="Submit"/>
        </form>

      </div>
      
    </div>
  )
}

export default Contect
