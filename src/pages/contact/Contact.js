import React, { useState } from 'react'
import "./Contact.css"
import emailjs from "emailjs-com";

const Contact = () => {
  const initialvalue = {
    name: "",
    email: "",
    message: ""
  }
  const[formData , setFormData] = useState(initialvalue);
  const[isSubmit , setIsSubmit] = useState(false)
  const[error , setError] = useState({});

  function handlechange(e){
    const{name, value} = e.target;
    setFormData((prev) => {
      return {...prev , [name]: value}
    })
  }

  function handlesubmit(e){
        e.preventDefault();
        setError(validation(formData))
        setIsSubmit(true);
        setError((state) => {
          if(Object.keys(state).length === 0){
              emailjs.send("service_42zzk77", "template_jla6wsb", formData, "ifHuhkRbojBEq_zrT")
          }
          return state;
        });
  }


  

  function validation(data){
    const error = {}
    const nameregx = /^[a-zA-Z ]*$/;
    const emailregx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(data.name === ""){
        error.name = "Please enter your name"
    }else if(!nameregx.test(data.name)){
        error.name = "Please enter valid name"
    }

    if(data.email === ""){
        error.email = "Please enter your email"
    }else if(!emailregx.test(data.email)){
        error.email = "Please enter valid email"
    }

    if(data.message === ""){
        error.message = "Please enter your address"
    }else if(data.message.trim().length < 15){
        error.message = "Minimum 15 character required"
    }

    return error;

  }

  return (
    <div className='collection'>
      <div className='main-contact'>
        <div className='contact-section'>
        {
          Object.keys(error).length === 0 && isSubmit ?
          
           (
            <div className='send-msg'>
            <h1>Your message have reach us.✔</h1>
            <h1>😊</h1>
            <h3>We will have an answer on that shortly.</h3>
            </div>
            
          ) : 
          (
            <form onSubmit={handlesubmit}>
                        <label>Your name : </label>
                        <input type="text" 
                            placeholder='Enter your name'
                            name='name'
                            value={formData.name} 
                            onChange={handlechange}
                        />
                        <p>{error.name}</p>
                        <label>Email : </label>
                        <input type="text" 
                            placeholder='Enter email address'
                            name='email'
                            value={formData.email}
                            onChange={handlechange}
                        />
                        <p>{error.email}</p>
                        <label>Message : </label>
                        <textarea type="text"
                            placeholder='Enter your message'
                            name='message'
                            value={formData.message}
                            onChange={handlechange}/>
                        <p>{error.message}</p>
                        <button type='submit'>Send</button>
                </form>
          )
        }
                
        </div>
      </div>
    </div>
  )
}

export default Contact