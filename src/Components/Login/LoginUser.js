import React, { useState } from 'react'
import "./Login.css"
import {useDispatch} from "react-redux"
import auth from "../firebase"
import {login} from "../features/UserSlice"

function LoginUser() {

   const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[profilePic,setProfilePic]=useState("");

    const dispatch =useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        console.log("Logined")
        auth.auth.signInWithEmailAndPassword(email,password).then(
            (userAuth)=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:userAuth.user.displayName,
                    photoUrl:userAuth.user.photoUrl
                }))
           }).catch((error)=>alert(error))
    }


    const register = () => {
        if(!name){
            return alert("please Enter the Full Name")
        }
       
        console.log("register suceefully")
        auth.auth.createUserWithEmailAndPassword(email,password).then(
            (userAuth)=>{
                userAuth.user
                .updateProfile({
                    displayName:name,
                    photoURL:profilePic,
                })
                .then(()=>{
                    dispatch(login({
                        email:userAuth.user.email,
                        uid:userAuth.user.uid,
                        displayName:name,
                        photoUrl:profilePic,
                    }))
                })
            }).catch((error)=>alert(error))

        }


    return (
        <div className='login'>
            <img className='loginimg'
                src='https://i2.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Linkedin-full-logo.png' />

            <form>
                <input
                 type="text" 
                 placeholder='Full Name (required if Registering)'
                 value={name}
                 onChange={(e)=>setName(e.target.value)}
                  />
                <input type="text" 
                placeholder='Profile Pic (optional)' 
                    value={profilePic}
                    onChange={(e)=>setProfilePic(e.target.value)}
                />
                <input type="email"
                 placeholder='email'
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                  />

                <input 
                type="password"
                 placeholder='password'
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                  />
                <button onClick={loginToApp}>Login</button>
                <p>Not a memeber?{" "}
                    <span className='login-register' onClick={register} >RegisterNow</span>
                </p>

            </form>


        </div>
    )
}

export default LoginUser
