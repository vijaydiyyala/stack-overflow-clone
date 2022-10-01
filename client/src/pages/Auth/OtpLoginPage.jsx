import React from "react"; 
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth,signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import './Auth.css'
import { OtpLogin } from "../../actions/auth";
import firebase from "../../firebase";

const OtpLoginPage = () => {
 const [mobile, setMobile] = useState('')
 const [otp , setOtp] = useState()
 const navigate = useNavigate()
 const dispatch = useDispatch()

  

  const configureCaptcha = () => {
      const auth = getAuth();
      window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
      onSignInSubmit();
      
      },
      defaultCountry:"IN"
      }, auth);
  }
  const onSignInSubmit = (e) => {
      e.preventDefault()
      if(mobile.length !== 10){
        alert("Enter Valid Phone Number")
      }


      const phoneNumber = "+91" + mobile
      
      try{
        configureCaptcha();
        const appVerifier = window.recaptchaVerifier;
  
        const auth = getAuth();
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;

      })
      }
      
      catch(error) {
        console.log(error)
    console.log("SMS not sent")
      };
  }
  const onSubmitOtp = (e) => {
      e.preventDefault()
      try{
        const code = otp
        
        window.confirmationResult.confirm(code).then((result) => {
        const user = result.user;
        alert("User is Verified");
        dispatch(OtpLogin(mobile,navigate))
  
        
          
        })
      }
        catch(error){

      
      
          alert("Enter valid Phone Number")
       
      };

  }
    
      return(
        
      <section className="auth-section">

        <div className="auth-container-2">
          <h1 id="otp-header">LOGIN WITH OTP</h1>
            <form onSubmit={onSignInSubmit}>
             <label>
                <div id = "sign-in-button"></div>

                <h4>Enter your Mobile number</h4>
                <input type="text"  placeholder = "Number...." onChange = {(e) => {setMobile(e.target.value)}} />
                <button type="submit" className="auth-btn" >Send OTP</button>
            </label>

            </form> <br />
            <form onSubmit={onSubmitOtp}>
             <label>
                <div id = "sign-in-button"></div>

                <h4>Enter otp number</h4>
                <input type="text"  placeholder = "OTPNumber...." onChange = {(e) => {setOtp(e.target.value)}}/>
                <button type="submit" className="auth-btn" >Confirm OTP</button>
            </label>

            </form>
        </div>
    </section>
  )
}

export default OtpLoginPage;