import './SuperAdminLogin.scss';
import * as AiIcon from 'react-icons/all';
import React, {useEffect} from 'react';
import axios from 'axios';

export default function SuperAdminLogin() {
  useEffect(()=>{
    axios.get("http://localhost:5000/users").then((response)=>
    {
      console.log(response.data);
    })
  })
  return (
    <div>
            <div className="container">
  <div className="forms-container">
    <div className="signin-signup">
      <form action className="sign-in-form">
        <h2 className="title"><AiIcon.AiOutlineUser/>Login</h2>
        <div className="input-field">
          <i className="fas fa-User" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input type="password" placeholder="password" />
        </div>
        <input type="submit" defaultValue="Login" className="btn solid" />
        <p className="social-text">Or Login with social platforms</p>
        
      </form>
    </div>
  </div>
  <div className="panels-container">
    <div className="panel left-panel">
      <div className="content">
        <h3>New here ?</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
          ex ratione. Aliquid!
        </p>
        <button className="btn transparent" id="sign-up-btn">
          Sign up
        </button>
      </div>
    </div>
    <div className="panel right-panel">
      <div className="content">
        <h3>One of us ?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          laboriosam ad deleniti.
        </p>
        <button className="btn transparent" id="sign-in-btn">
          Sign in
        </button>
      </div>
     
    </div>
  </div>
</div>
    </div>
  )
}


