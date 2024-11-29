import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
       <div className="hero-section"data-aos="flip-right">
        <div className="container">
        <div className="main">
        <div className="text-container">

        <h1 className="main-text"data-aos="flip-down"> Hi! I am Faiz Bano  FrontEnd Developer </h1>
          <p className="main-para">
                {" "}
                I am front end developer and going to be full stack developer,
                hope I will get my goal soon, Insha Allah, May Allah help me to
                achieve my goal{" "}
              </p>
              <button className="resume">Download Resume</button>
            
            </div>
            
            <div className="img">
              <Image
                src="/photo.png"
                alt="computer"
                width="300"
                height="300"
                className='rounded-3xl w-35 h-35'
              />
            </div>
          </div>
        </div>
      </div>
      </>
    
  )
}

export default Hero