import React, { useState } from 'react'
import './Login.css'
import { FaFacebook, FaTwitter, FaTwitch, FaYoutube,FaGoogle } from "react-icons/fa";
import { Modal,Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { UserLogin } from '../../Redux/Actions/AuthAction';
import { NavLink } from 'react-router-dom';


function Login() {
  const dispatch=useDispatch();
  const auth=useSelector((state)=>state.auth);
  console.log(auth);
  const [state, setstate] = useState({
    email:'',
    password:'',
  });

  const handleInputs = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value })
  }
  const UserLoginSubmit=(e)=>{
    e.preventDefault();
    console.log(state)
    dispatch(UserLogin(state))
  }

    return (
   <div className="body">
        <div className="contact-wrapper">
        <header className="login-cta">
          <h2>Account Login</h2>
        </header>
        <form onSubmit={UserLoginSubmit}>
          <div className="form-row">
            <input value={state.email} onChange={handleInputs} name='email' type="text" required />
            <span>Enter Email</span>
          </div>
          <div className="form-row">
            <input value={state.password} onChange={handleInputs} name='password' type="password" required />
            <span>Password</span>
          </div>
          <div className="form-row"></div>
          <div className="form-row">
            <input className="loginbutton" type="submit" value="Login to your Account!"></input>
          </div>
        </form>
        <div className="socials-wrapper">
          <header>
           <h2><a href="/registrar">Login with your Social Account</a></h2>
            </header>
          <ul>
          <li><a href="#" className="facebook"><FaFacebook /></a></li>
            <li><a href="#" className="twitter"><FaTwitter /></a></li>
            <li><a href="#" className="twitch"><FaTwitch /></a></li>
            <li><a href="#" className="youtube"><FaGoogle /></a></li>
          </ul>
        </div>
      </div>

      </div>
    )
}

export default Login;