import React, { useEffect, useState } from "react";
import "./header.css";
import { MdMenu } from "react-icons/md";
import {  IoMdCloseCircle } from "react-icons/io";
export default function Header() {
   
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode"));
// let close=false
  const k=()=>{
    setClose(true);
    console.log(5);
        }
        // --------change theme----------
        useEffect(() => {
          if(theme==="light"){
            document.body.classList.remove("dark")
            document.body.classList.add("light")
          }else{
            document.body.classList.remove("light")
            document.body.classList.add("dark")
          }
  
          // Cleanup the event listener on component unmount
          
      }, [theme]);
      const changeMood=()=>{
        // send mood to local storage
        localStorage.setItem("currentMode",theme==="dark"?"light":"dark")
        // send mood to local storage
        setTheme(localStorage.getItem("currentMode"))

      }
  return (
      <div className="container">
    <header>

      <MdMenu  className="menue" onClick={()=>{setShowModal(true)}}  style={{ fontSize: "30px"}} />
       <div className="fixed" onClick={()=>{setShowModal(false)}}
        style={{left:showModal?"0":"-100%"}}>

        <nav className='phoneNav'>
      {/* <MdMenu className="menue" onClick={()=>{setShowModal(false)}} /> */}
          <h3><IoMdCloseCircle style={{fontSize:"2rem",color:"grey" }} />
            </h3>
          <a href="#about">about</a>
          <a href="#services">services</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact me</a>
        </nav>
      
        </div>
      <nav>
        <ul>
          <li>
            <a href="#">about</a>
          </li>
          
          <li>
            <a href="#projects">projects</a>
          </li>
          
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>

  <button className="mood" onClick={changeMood}>
       {theme==="dark"? <div className="icon-moon-o"></div>:
      <div className="icon-sun" style={{color:"orange",boxShadow:"1px 1px 40px rgba(35,35,0.165)"}}></div> }
  </button>
        
    </header>
      </div>
  );
}
