import React, { useState } from 'react'
import email_icon from '../../public/email.png'
import password_icon from '../../public/password.png'
import firebase from '../firebaseConfig'
import { Link} from "react-router-dom";

function LogIn() {

  const [action, setAction] = useState("Log-In")
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submit = async(e) => {
    e.preventDefault()
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password)
      if (user) {
        alert("Log In successfully")
        window.location.href = "/main";
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <div className='container'>
        <div className="header">
          <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
            <div className="inputs">
              <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder="Введіть email" onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Введіть пароль" onChange={(e) => setPassword(e.target.value)}/>
              </div>
            </div>
            <div className="forgot-password">Lost Password? <span><Link>Click Here!</Link></span></div>
            <div className="btn">
              <div onClick={submit}>{action}</div>
            </div>
            <div className="sumbit-container">
              <div className={action === "Log-In" ? "submit gray" : "submit"} ><Link className='LogIn' to="/SignUp">Sign Up</Link></div>
              <div className={action === "Sign-Up" ? "submit gray" : "submit"}>{action}</div>
            </div>
      </div>
    </>
  )
}

export default LogIn
