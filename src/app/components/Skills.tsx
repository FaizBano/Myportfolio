import React from 'react'
import Image from 'next/image'
import { FaHtml5 } from "react-icons/fa6";
import { BsFiletypeCss } from "react-icons/bs";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import "aos/dist/aos.css";

const Skills = () => {
  return (
    <div>

    <div className='feature-section'data-aos="flip-left">
      <div className='container'>
        <div className='main'>
        <div className='main-heading'>
          <h3> Skills</h3>
          </div>
              <div className="card">
              <Image src='/skills.png'
               alt='skills' 
               width='245' height='180' />

              <div className="card-containt">
                <h2>
                  <b>
                    <u >My Skills</u>
                  </b>{" "}
                </h2>

                <div className="badge-parent">
                  <div className="badge">
                    <p>2024</p>
                  </div>
                  <p>next.js project</p>
                </div>
                
                  <ul>
                 
                    <li><FaHtml5 /><strong> HTML</strong></li>
                    <li><BsFiletypeCss /><strong>CSS</strong></li>
                    <li><SiTypescript /><strong>Typescript</strong></li>
                    <li><RiNextjsFill /><strong>Next.js</strong></li>
                    <li><RiNodejsLine /><strong>Node js</strong></li>
                    <li><RiTailwindCssFill /><strong>Tailwind.css</strong></li>
                    
                  </ul>
                  
                
                
              </div>
            </div>
            </div>
            </div>
            </div>

    </div>
    
  )
}

export default Skills