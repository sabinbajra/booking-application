import axios from 'axios';
import React, { useState } from 'react';
import { Link, Navigate, redirect } from 'react-router-dom';


const LoginPage = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [reDirect, setReDirect] = useState(false);

  
  const handleLoginSubmit = async(event) => {
    event.preventDefault();
    try{
    await axios.post("/login", {email, password});
    alert("Login Successful");
    setReDirect(true);
    }
    catch(err){
      alert("Login Failed");
    }
  };

  if(reDirect){
    return <Navigate to={'/'} />;
  }

  return (
    <div className='mt-4 grow flex items-center justify-around'>
        <div className='mb-64'>

            <h1 className='text-4xl text-center mb-4'>Login</h1>
            <form className='max-w-md mx-auto ' onSubmit={handleLoginSubmit}>
                <input type='email' 
                placeholder='Your Email Please ...' 
                value={email} 
                onChange={(event) => setEmail(event.target.value)}></input>
                
                <input type='password' 
                placeholder='Your Password Please ...' 
                value={password} 
                onChange={(event) => setPassword(event.target.value)}></input>

                <button className='primary'>Login</button>
                <div className='text-center py-2 text-gray-500'>
                    Don't have an account yet? <Link className="underline text-black" to={'/register'}>Register now</Link>
                </div>
            </form>


        </div>
        

    </div>
  )
}

export default LoginPage