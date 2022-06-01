import React, { useRef } from "react";
import { useNavigate, useHistory } from "react-router-dom";
import axios from "axios";

import "./register.css";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords don't match.");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>LamaSocial</h3>
          <span className='loginDesc'>
            Connect with your friends and the world around you on LamaSocial.
          </span>
        </div>

        <div className='loginRight'>
          <form className='loginBox' onSubmit={handleClick}>
            <input
              type='text'
              placeholder='Username'
              ref={username}
              className='loginInput'
              required
            />
            <input
              type='email'
              placeholder='Email'
              ref={email}
              className='loginInput'
              required
            />
            <input
              type='password'
              placeholder='Password'
              ref={password}
              className='loginInput'
              required
              minLength={6}
            />
            <input
              type='password'
              placeholder='Re-enter Password'
              ref={passwordAgain}
              className='loginInput'
              required
              minLength={6}
            />
            <button className='loginButton' type='submit'>
              Sign Up
            </button>

            <button className='loginRegisterButton' onClick={handleLogin}>
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
