import React from "react";
import "./hero.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Lottie from "lottie-react";
import devanimation from "../../animation/devanimation.json";
import { RiTranslate } from "react-icons/ri";
export default function Hero() {
  return (
    <>
      <div className="container">
        <div className="main-hero" style={{}}>
          <div className="content">
            <img
              className="main-img"
              src={"../../../mi-modified.png"}
              
            />
            <h1>hi,im ahmed mohamed I build things for the web.</h1>
            <p>
              I’m a front-end web Developer who focuses on the React.js
              framework, I have a passion for Learning About new tech, To grow
              my skills.
            </p>
            <div className="social">
              <a target="_blank" href="https://www.linkedin.com/in/ahmed-mohamed-115421215/">
                <FaLinkedin
                  className="icon"
                  style={{ width: "100%", flex: "1" }}
                />
              </a>
              <a target="_blank" href="https://github.com/Ahmed-mohamed12">
                
                <FaGithub className="icon git" />
              </a>
              <a target="_blank" href="https://www.facebook.com/profile.php?id=100053607078479">
                
                <FaFacebook className="icon" />
              </a>
              
            </div>
              <button class="main-title">download me resme</button>
          </div>
          <div className="image-div">
            <Lottie className="div-animation"
              animationData={devanimation}
              loop={true}
              style={{ height: "500px", width: "90%", }}
            />
            {/* <img src={'../../../public/hero-img.jpeg'}  style={{with:"150px"}}/> */}
          </div>
        </div>
      </div>
    </>
  );
}
