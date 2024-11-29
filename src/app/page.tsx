"use client"

import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Home() {
  useEffect(()=>{
    AOS.init({
      easing: "ease-out-back",
      duration :1200,
      delay: 120,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160

    });
    AOS.refresh ()
  },[] );
  return (
    <>
      <div>
        <Hero />
        <br />
        <About />
        <br />
        <Education />
        <br />
        <Skills />
        <br />
        <Experience />
        
      </div>
    </>
  );
}
