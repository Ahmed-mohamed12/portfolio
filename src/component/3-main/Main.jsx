import React, { useState } from "react";
import "./main.css";
import ProjectsArray from './ProjectsArray';

export default function Main() {
    const[project,setProject]=useState("all")
    // filter and loop on ProjectsArray
  const showProjects = ProjectsArray.filter(pro => 
    pro.key && pro.key.includes(`${project}`) // تحقق مما إذا كانت الخاصية key موجودة وتحتوي على "re"
  ).map((pro) => {
    return (
      <>
      <div className="box">
      <a key={pro.id}href={pro.demo} target="-blank" >
        <div style={{width:"100%",height:"40%",minHeight:"40%"}}>

        <img className="main-img" src={pro.img} alt="Project" style={{minHeight:"100%",height:"100%"}} />
        </div>
        
        <div className="content">
          <h2>{pro.title}</h2>
          <p>
            {pro.description}
          </p>
        </div>
       </a>

        <div className="info" >
          <span className="icons">
            <a target="_blank" href={pro.repo}><span className="icon-github"></span></a>
          </span>
          <a className="link" href={pro.demo} target="-blank">Live Demo <span style={{alignSelf:"end",marginLeft:"2px"}} className="icon-arrow-right"></span></a>
        </div>
      </div>
      </>


    );
  });
  const changeProject = (e) => {
    setProject(e);
    
    // إضافة الكلاس النشط للأزرار
    const buttons = document.getElementsByClassName("btn");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active"); // إزالة الكلاس النشط من جميع الأزرار
    }
    
    // إضافة الكلاس النشط للزر الذي تم الضغط عليه
    const activeButton = Array.from(buttons).find(btn => btn.innerText.toLowerCase() === e.toLowerCase());
    if (activeButton) {
      activeButton.classList.add("active");
    }
  };

  return (
    <div className="container" id="projects">
      <div className="main-projects">
        <div className="left-sec">
          <button onClick={()=>changeProject("all projects")}   className="btn active" >all projects</button>
          <button onClick={()=>changeProject("react")} className="btn" >react</button>
          <button  onClick={()=>changeProject("javascript")} className="btn" >javascript</button>
          <button onClick={()=>changeProject("html & css")} className="btn" >html & css</button>
        </div>
        <div className="right-sec">
          {showProjects}
        </div>
      </div>
    </div>
  );
}