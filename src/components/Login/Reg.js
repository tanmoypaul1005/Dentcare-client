import React, { useState } from 'react'
import './Reg.css'
import { FaFacebook, FaTwitter, FaTwitch, FaYoutube,FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Adduser } from '../../Redux/Actions/AuthAction';
import { useNavigate } from 'react-router-dom';

function Reg() {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const auth=useSelector((state)=>state.auth);
  console.log(auth);
  const [state, setstate] = useState({
    name:'',
    email:'',
    password:'',
    contactNumber:''
  });
  const handleInputs = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value })
  }
  const userRegistration=(e)=>{
    e.preventDefault();
    console.log(state);
    dispatch(Adduser(state));

    setTimeout(function(){
      navigate('/');
    }, 3000);
  }
    return (
   <div className="body">

        <div className="contactWrapper">
        <header className="login-cta">
          <h2>Account Register</h2>
        </header>

        <form onSubmit={userRegistration}>
        <div className="form-row">
            <input onChange={handleInputs} value={state.name} name="name" type="text" required />
            <span>Your Name</span>
        </div>

        <div className="form-row">
            <input onChange={handleInputs} value={state.contactNumber} name="contactNumber" type="number" required />
            <span>Your Contact  Number</span>
        </div>

          <div className="form-row">
            <input onChange={handleInputs} value={state.email} name="email"  type="email" required />
            <span>Your Email</span>
          </div>
          <div className="form-row">
            <input onChange={handleInputs} value={state.password} name="password" type="password" required />
            <span>Password</span>
          </div>

          <div className="form-row"></div>
          <div className="form-row">
            <input className="loginbutton" type="submit" value="Login to your Account!"></input>
          </div>
        </form>
        <p><a href="/login">Login Your Account</a></p>
        <div className="socials-wrapper">
          <header>
          <h2><a href="/login">Login with your Social Account</a></h2>  
              </header>
          <ul>
          <li><a href="#" class="facebook"><FaFacebook /></a></li>
            <li><a href="#" class="twitter"><FaTwitter /></a></li>
            <li><a href="#" class="twitch"><FaTwitch /></a></li>
            <li><a href="#" class="youtube"><FaGoogle /></a></li>
          </ul>
        </div>
      </div>
      </div>
    )
}

export default Reg;