import React from "react";
import Image from "next/image";

const Expereience = () => {
  return (
    <div>
      
      <div className="feature-section" data-aos="flip-left">
        <div className="container">
          <div className="main">
            <div className="main-heading">
              <h3> Featured Work</h3>
            </div>
            <div className = 'card'>
              <Image src = '/experience.jpg'
                alt='Education'
                width='245'
                height='180'
              />

              <div className='card-containt'>
                <h2>
                  <b>
                    <u>My Experience </u>
                  </b>{" "}
                </h2>

                <div className="badge-parent">
                  <div className="badge">
                    <p>2024</p>
                  </div>
                  <p>next.js project</p>
                </div>
                <p>
                   Basically I am a Teacher , so I have good experience of
                  teaching, I am new in the field of Information Technology /
                  Aritificial Intellegience , by the time I will get good
                  experience in field of Artificial Intellegence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expereience;
