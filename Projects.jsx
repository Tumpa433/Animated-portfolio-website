import React from 'react'
import Card from '../Card/Card'
import "./Projects.css"
import project1 from "../../assets/project1.png"
import project2 from "../../assets/supreme.png"
import project3 from "../../assets/flower.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger) // Register ScrollTrigger plugin for scroll-based animations

const Projects = () => {

  useGSAP(()=>{
    gsap.from("#projects h1",{
    y: 100,
    duration: 1,
    opacity: 0,
    stragger: 1, 
    scrollTrigger: {  
      trigger: "#projects h1",
      scroll:"body",
      scrub:2,
      start: "top 80%", 
      end: "top 30%" 
    }
  })

  gsap.from("#projects .slider",{
    y: 100,
    duration: 1,
    opacity: 0,
    stragger: 1, 
    scrollTrigger: {  
      trigger: "#projects .slider",
      scroll:"body",
      scrub:2,
      start: "top 80%", 
      end: "top 30%" 
    }
  })
  })

  return (
    <div id='projects'>
      <h1 >PROJECTS</h1>
      <div className="slider">

        <Card title="PORTFOLIO WEBSITE" image={project1}/>
        <Card title="Supreme Court India (homepage) " image={project2}/>
        <Card title="E-COMMERCE FLOWER SHOP WEBSITE" image={project3}/>
        
        

      </div>
    </div>
  )
}

export default Projects
