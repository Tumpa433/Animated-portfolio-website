import React from 'react'
import "./Home.css"
import {Typewriter} from "react-simple-typewriter"
import profile from "../../assets/tumpa.jpg"
import resume from "../../assets/Tumpa.pdf"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = () => {

  useGSAP(()=>{
    let tl1=gsap.timeline();
    tl1.from(".line1",{
        y:80,
        duration:1,
        opacity:0,
    })
    tl1.from(".line2",{
        y:80,
        duration:1,
        opacity:0,
    })
    tl1.from(".line3",{
        y:80,
        duration:1,
        opacity:0,
    })
    tl1.from(".righthome img",{
        x:200,
        duration:1,
        opacity:0,
    })
  })

  return (
    <div id="home">

      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">TUMPA BISWAS</div>
          <div className="line3">
          <Typewriter
          words={["WEB DEVELOPER","SOFTWARE DEVELOPER","JAVA DEVELOPER"]}
          loop={true}
          typeSpeed={100}
          deleteSpeed={200}
          delaySpeed={500}
          cursor
          /><br></br>
          </div>
          <a href={resume} target="_blank" rel="noopener noreferrer">
          <button>HIRE ME</button>
          </a>
        </div>
        

      </div>

      <div className="righthome">

        <img src={profile} alt="profile" />

      </div>
      
    </div>
  )
}

export default Home
