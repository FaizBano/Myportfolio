import React from "react";
import "aos/dist/aos.css";


const About = () => {
  return (
    <div className="recent-post">
      <div className="container" data-aos="flip-left">
        <div className="main">
          <div className="heading">
            <h3> About me </h3>
            <button className="viewAll-btn">My Project</button>
          </div>

          <div className="card-parent">
            <div className="card">
              <h2 className="card-heading">
                <b>
                  <u>A short Review about me</u>
                </b>
              </h2>
              <p className="date-text"> 05 Nov 2024 | Project: Next.js </p>
              <p className="paragraph"  >
                I am student of Goveronor Sindh IT iniciative Course web-3 and
                metaverse. where I have learnt Typescript, and now recently we
                are learning next.js and after this course if I cleared my
                Quarter-2 in sha Allah, we will promote in Quarter-3 where we
                learn Python and web3 I am waiting for that time when I will
                become a full stake developer
              </p>
            </div>
            
            <div className="card">
              <h2 className="card-heading">
                <b>
                  <u>About the Course of GIAIC</u>
                </b>
              </h2>
              <p className="date-text"> 05 Nov 2024 | My Remarks</p>
              <p className="paragraph">
                No. doubt that the course which I am learning form Governor
                House , needs full attention and hard work. who wants to achieve
                the goal must work hard and try to update yourself about
                programming. this is the key of your success in practical life
                and can give you better response in the world of coding. May
                Allah help me to achieve goal of my life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
