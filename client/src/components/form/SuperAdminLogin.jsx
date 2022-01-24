import './SuperAdminLogin.scss';
import * as AiIcon from 'react-icons/all';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config/config'


export default function SuperAdminLogin() {


  const apiURL = config.API_URL;
  const [username, setUsername] = useState();

  const [api, setApi] = useState();

  const navigate = useNavigate();

  const [password, setPassword] = useState();

  const login = async (event) => {
    event.preventDefault();
    const data = { username: username, password: password }
    axios.post(`${apiURL}/auth/login`, data).then((response) => {
      // response.header("auth",JSON.stringify(response.data));
      try {
        if (response != null || response != undefined) {
          // response.setHeader("auth" , JSON.stringify(response.data.token));
          localStorage.setItem("auth", JSON.stringify(response.data.token));
          // console.log(response);
          navigate('homepage');

        }
        else{
          console.log("token is not generated")
        }
      } catch (error) {
        console.log("login error", error);
      }
    });
  };


  return (
    <div>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form className="sign-in-form" >
              <h2 className="title"><AiIcon.AiOutlineUser />Login</h2>
              <div className="input-field">
                <i className="fas fa-User" />
                <input type="text" placeholder="Username"
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <input type="submit" defaultValue="Login" className="btn solid" onClick={login}
              />
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


