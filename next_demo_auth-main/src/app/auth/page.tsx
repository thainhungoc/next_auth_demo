"use client";
import React, { useRef } from 'react'
import './auth.scss'
import apis from '@/apis';
import { LoginDTO } from '@/apis/user.api';
import firebase from '../firebase/firebase';
export default function page() {
  const containerRef = useRef<any>();

  function register(e: React.FormEvent) {
    e.preventDefault();
    let newUser = {
      userName: (e.target as any).userName.value,
      email: (e.target as any).email.value,
      password: (e.target as any).password.value
    }
    apis.user.register(newUser)
    .then(res => {
      if(res.status == 200) {
        alert(res.data.message)
        containerRef.current.classList.remove("right-panel-active")
      }
    })
    .catch(err => {
      alert("Lỗi không rõ")
    })
  }

  function login(e: React.FormEvent) {
    e.preventDefault();
    let data: LoginDTO = {
      loginName: (e.target as any).loginName.value,
      password: (e.target as any).password.value
    }
    apis.user.login(data)
    .then(res => {
        console.log("res.data", res.data)
        localStorage.setItem("token", res.data.token)
    })
    .catch(err => {
      alert(err.response.data.message)
    })
  }
  return (
    <>
      <div ref={containerRef} className="container" id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={(e) => {
            register(e)
          }}> 
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <span>or use your email for registration</span>
            <input name='userName' type="text" placeholder="User Name" />
            <input name='email' type="email" placeholder="Email" />
            <input name='password' type="password" placeholder="Password" />
            <button type='submit'>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={(e) => {
            login(e)
          }}>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f" />
              </a>
              <a onClick={()=>{firebase.signIn()}} className="social">
                <i className="fab fa-google-plus-g" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <span>or use your account</span>
            <input name='loginName' type="text" placeholder="Login Name" />
            <input name='password' type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button onClick={() => {
                containerRef.current.classList.remove("right-panel-active")
              }} className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button onClick={() => {
                containerRef.current.classList.add("right-panel-active")
              }} className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
