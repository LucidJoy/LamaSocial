import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  const handleCreate = () => {
    navigate("/register");
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
              type='email'
              placeholder='Email'
              className='loginInput'
              ref={email}
              required
            />
            <input
              type='password'
              placeholder='Password'
              className='loginInput'
              ref={password}
              required
              minLength={6}
            />
            <button className='loginButton' disabled={isFetching}>
              {isFetching ? "Loading..." : "Log In"}
            </button>
            <span className='loginForgot'>Forgot Password</span>
            <button
              className='loginRegisterButton'
              onClick={handleCreate}
              disabled={isFetching}
            >
              {isFetching ? "Loading..." : "Create Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
