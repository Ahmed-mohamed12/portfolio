import React, { useEffect, useState } from "react";
import "./contact.css";
// import { useFormspree } from "@formspree/react";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import contacanimation from "../../animation/contacanimation";

export default function Contact() {
  // send email---------------
  const [state, handleSubmit] = useForm("mgvvpljd");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
}
  // send email---------------
  const[showTopBtn,setShowTopBtn]=useState(false)
  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      if (window.scrollY > 300) {
        setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
    })
}, []);
const scrollToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
};

  return (
    <div className="container" id="contact">
      <div className="contact">
        {/* <h2 className="main-title">contact</h2> */}
        <h1>
          <span className="icon-envelope"></span>
          contact me
        </h1>
        <p className="sub-title">
          My inbox is always open. Whether you have a new opportunity, a
          question or just want to say hi, I’ll try my best to get back to you!
        </p>
        <div className="dev-contact">
           <form action="#" method="post" onSubmit={handleSubmit}>

    <div className="form-group">
      <input required autoComplete="off" type="email" id="email" name="email" placeholder="Your email..." />
      <label htmlFor="email">Your email</label>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
    </div>
    <div className="form-group">

      <textarea id="message" name="message" placeholder="Your message goes here..." required></textarea>
    <label htmlFor="email">Your message</label>
    <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
    </div>
    <button type="submit" disabled={state.submitting} className="submit-button">{state.submitting?"submitting...":"submit"}</button>
  {state.succeeded&&(
    <p style={{fontSize:"18px",marginTop:"1.7rem"}}>Your message has been sent successfully</p>
  )}
  </form>
          
      <div className="animation">
      <Lottie className="div-animation"
              animationData={contacanimation}
              loop={true}
              style={{ height: "250px", width: "90%", }}
            />
      </div>
        </div>
      </div>
      {showTopBtn?<botton className="icon-arrow-up" onClick={scrollToTop}></botton>:""}
    </div>
  );
}
