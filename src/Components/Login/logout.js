


import React, { useState } from 'react'
import { toast } from 'react-toastify';
import "./Signup.css";
import fire from "../firebase"
import { useNavigate } from 'react-router-dom';
function SignUp() {
   
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const navigator=useNavigate();
   
  
    const handleSubmit=(e)=>{
           e.preventDefault();
           fire.auth.createUserWithEmailAndPassword(email,password)
           .then(()=>{
               toast.success("user Created Sucessfully");
           }).catch(()=>{
               toast.error("User Not created,please Try Again")
           })
           navigator("/login")
          }
    return (
        <div>
              <form onSubmit={handleSubmit}>
                <div className="signupcontainer">

   
                 <label htmlFor="useremail"><b>Email</b></label>
                    <input 
                        className="inputNameSign"
                        type="email"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        name="useremail" required />


                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password"
                        className='inputNameSign'
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        name="password" required />

                   

                    <button className='loginbtn' type="submit" onClick={handleSubmit}>SignUp</button><br />
                    


                </div>
            </form>

        </div>
    )
}

export default SignUp
