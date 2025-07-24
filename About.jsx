import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import web from '../../assets/web.jpg'
import java from '../../assets/java.jpg'
import php from '../../assets/php.jpg'
import oop from '../../assets/oop.png'
import dsa from '../../assets/dsa.webp'
import dbms from '../../assets/dbms.jpg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger) // Register ScrollTrigger plugin for scroll-based animations



const About = () => {

useGSAP(()=>{
  gsap.from(".circle",{
    x: -100,
    duration: 1,
    opacity: 0,
    stragger: 1,
    scrollTrigger: {  // Trigger the animation when the element comes into view
      trigger: ".circle",
      scroll:"body", // Use the body as the scroll container
      scrub: 2, // Smooth scrubbing for the animation
      start: "top 60%", // Start the animation when the top of the element is at 80% of the viewport height
      end: "top 30%" // End the animation when the bottom of the element is at 20% of the viewport height
    }
  })

  gsap.from(".line",{
    x: -100,
    duration: 1,
    opacity: 0,
    stragger: 1, // Stagger the animation for each line
    scrollTrigger: {  // Trigger the animation when the element comes into view
      trigger: ".line",
      scroll:"body",
      scrub:2,
      start: "top 60%", // Start the animation when the top of the element is at 80% of the viewport height
      end: "top 30%" // End the animation when the bottom of the element is at 20% of the viewport height
    }
  })

  gsap.from(".aboutdetails h1",{
    x: -100,
    duration: 1,
    opacity: 0,
    stragger: 1, // Stagger the animation for each line
    scrollTrigger: {  // Trigger the animation when the element comes into view
      trigger: ".aboutdetails h1",
      scroll:"body",
      scrub:2,
      start: "top 60%", // Start the animation when the top of the element is at 80% of the viewport height
      end: "top 30%" // End the animation when the bottom of the element is at 20% of the viewport height
    }
  })

  gsap.from(".aboutdetails li",{
    y: 100,
    duration: 1,
    opacity: 0,
    stragger: 1, // Stagger the animation for each line
    scrollTrigger: {  // Trigger the animation when the element comes into view
      trigger: ".aboutdetails li",
      scroll:"body",
      scrub:2,
      
      start: "top 60%", // Start the animation when the top of the element is at 80% of the viewport height
      end: "top 30%" // End the animation when the bottom of the element is at 20% of the viewport height
    }
  })

  gsap.from(".rightabout",{
    x: 100,
    duration: 1,
    opacity: 0,
    stragger: 1, // Stagger the animation for each line
    scrollTrigger: {  // Trigger the animation when the element comes into view
      trigger: ".rightabout",
      scroll:"body",
      scrub:2,
      
      start: "top 60%", // Start the animation when the top of the element is at 80% of the viewport height
      end: "top 30%" // End the animation when the bottom of the element is at 20% of the viewport height
    }
  })
})

  return (
    <div id='about'>

      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>

        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li><span>NAME</span> : TUMPA BISWAS</li>
              <li><span>AGE</span> : 22</li>
              <li><span>GENDER</span> : FEMALE</li>
              <li><span>LANGUAGE KNOWN</span> : BENGALI, HINDI,ENGLISH</li>
            </ul>
          </div>
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li><span>DEGREE</span> : BTECH</li>
              <li><span>BRANCH</span> : INFORMATION TECHNOLOGY</li>
              <li><span>CGPA</span> : 8.28</li>
            </ul>
          </div>
          <div className="skills">
            <h1>SKILLS</h1>
            <ul>
              <li>WEB DEVELOPMENT</li>
              <li>JAVA</li>
              <li>PHP</li>
              <li>DBMS</li>
              <li>OOP</li>
              <li>DSA</li>
            </ul>
          </div>

        </div>
      </div>
      <div className="rightabout">
        <Card title="WEB DEVELOPMENT" image={web} />
        <Card title="JAVA" image={java} />
        <Card title="PHP" image={php} />
        <Card title="DBMS" image={dbms} />
      </div>

    </div>

  )
}

export default About
