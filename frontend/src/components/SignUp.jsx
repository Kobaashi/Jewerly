import React, { useState } from 'react'
import user_icon from '../../public/person.png'
import email_icon from '../../public/email.png'
import password_icon from '../../public/password.png'
import firebase from '../firebaseConfig'
import { Link} from "react-router-dom"

function SignUp() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submit = async(e) => {
    e.preventDefault()
    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
      if (user) {
        alert("Account Created successfully")
      }
    } catch (error) {
      alert(error)
    }
  }
  const [action, setAction] = useState("Sign-Up")

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
          <div className="underline"></div>
      </div>
          <div className="inputs">
            {action === "Log In" ? <div></div> : <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" value={name} placeholder="Введіть ім'я" onChange={(e) => setName(e.target.value)}/>
            </div>}
            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" value={email} placeholder="Введіть email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input type="password" value={password} placeholder="Введіть пароль" onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </div>
          <div className="already">You already have account? <span><Link to="/LogIn">Click Here!</Link></span></div>
          <div className="btn">
            <div onClick={submit}>Sign Up</div>
          </div>
          <div className="sumbit-container">
            <div className={action === "Log-In" ? "submit gray" : "submit"} >Sign Up</div>
            <div className={action === "Sign-Up" ? "submit gray" : "submit"} ><Link className='SignUp' to="/LogIn">Log In</Link></div>
          </div>
    </div>
  )
}

export default SignUp
