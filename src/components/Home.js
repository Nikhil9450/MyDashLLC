import React, { useState } from 'react'
import graphImage from "../resources/graph.jpg"
import "./Sass/Home.scss"
import validator from 'validator'

function Home() {

    const [name,setName]=useState("");
    const [emailError,setEmailError]= useState("");
    const [Email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [passwordError,setPasswordError]=useState("");
    const [phone,setPhone]=useState("");
    const [phoneError,setPhoneError]=useState("");
    const [check,setCheck]=useState("");
     
    // const emailHandler=(event)=>{
    //     setEmail(event.target.value);
    // }

    const emailValidate=(event)=>{
        setEmail(event.target.value);
        const email =event.target.value;
        if (validator.isEmail(email)){
            setEmailError('')
        }else{
            setEmailError('Enter valid Email')
        }
    }

    const passwordHandler=(event)=>{
      setPassword(event.target.value);
    }
    const confirmPasswordHandler=(event)=>{
        setConfirmPassword(event.target.value);
    }
    
    const nameHandler=(event)=>{
        setName(event.target.value);
    }
   const contactHandler=(event)=>{
       setPhone(event.target.value);
   }
   const checkHandler=(event)=>{
       setCheck(event.target.value);
   }
    const submitHandler=(event)=>{
          event.preventDefault();
    
          if (password===confirmPassword){
              setPasswordError("")
          }else{
              setPasswordError("Password is not matching")
          };

          if(phone.trim().length!==10 ){
              setPhoneError("Invalid phone number")
          }

          if(Email.trim().length===0){
              alert('Enter your email');
              return;
          }
          if(password.trim().length===0){
              alert('Enter your password');
              return;
          }
          if(confirmPassword.trim().length===0){
              alert('Confirm your password');
              return;
          }
          if( password!==confirmPassword){
              alert('Passwords are not matching');
          }
          if (name.trim().length===0){
              alert('Enter your full name');
              return;
          }
          if(phone.trim().length!==10){
              alert('Invalid phone number')
          }
          
          if(check!=="on"){
              alert('Please check the Terms and condition');
          }
          


          alert("Your account is created");
        //   setEmail("");
    }

  return (
    <div className='Form' >
        <div className='Form-left'>
            <img className='Form-image' src={graphImage} alt="graph_image"></img>
            <h2>Choose a date range</h2>
            <p>Lorem Ipsum is simply dummy text<br/>
             of the printing and typesetting</p>
        </div>
        
            <form onSubmit={submitHandler} className='Form-right'>
                <div>
                    <h3>Create an account</h3>
                </div>
               <div className='Form-input'>
                   <label>Your email address</label>
                   <input type='text' onChange={emailValidate} value={Email}></input>
                   <p className='Form-email-error'>{emailError}</p>
               </div>
               <div className='Form-input'>
                   <label>Your password</label>
                   <input type='password' onChange={passwordHandler}></input>
               </div>
               <div className='Form-input'>
                      <label>Confirm your password</label>
                      <input type='password' onChange={confirmPasswordHandler}></input>
                      <p className='Form-password-error'>{passwordError}</p>
               </div >
               <div className='Form-input'>
                   <label>Your full name</label>
                   <input type='text' onChange={nameHandler}></input>
               </div>
               <div className='Form-input'>
                   <label>Your Phone number</label>
                   <input type='number' onChange={contactHandler}></input>
                   <p className='Form-contact-error'>{phoneError}</p>
               </div>
               <div className='Form-input'>
               <input className='Form-checkbox' id='agree' type='checkbox' onChange={checkHandler}></input>
               <label className='Form-checkboxlabel'> I read and agree Terms and Conditions</label>
               </div>

               <div>
                   <button type='submit'>Create account</button>
               </div>
            </form>
    </div>
  )
}

export default Home;