import React from "react";
import Image from "next/image";

const Education = () => {
  return (
    <div>
      
      <div className="feature-section" data-aos="flip-left">
        <div className="container">
          <div className="main">
            <div className="main-heading">
              <h3> Featured Work</h3>
            </div>
            <div className="card-parent">
              <div className="card">
                
                <Image
                  src="/studies.png"
                  alt="Education"
                  width="245"
                  height="180"
                />

                <div className="card-containt">
                  <h2>My Education</h2>
                  <div className="badge-parent">
                    <div className="badge">
                      <p>2024</p>
                    </div>
                    <p>next.js project</p>
                  </div>
                  <p>
                     I want to tell you about my Education Status. As I did
                    Masters in Economic. except this I also learned Typescript ,
                    HTML, CSS, and recently Iam learning next.js , I also learn
                    about Ms Office and did diploma in computer science.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
