import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const RegisterPage = () => {

    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");

    const registeruser = async (event) => {
        console.log("inside register user");
        event.preventDefault();
        await axios.post('/register', {
            name,
            email,
            password,
        });
        alert("Registration successfull. Now you can login!!!");
    };

  return (
    <div className='mt-4 grow flex items-center justify-around'>
        <div className='mb-64'>

            <h1 className='text-4xl text-center mb-4'>Register</h1>
            <form className='max-w-md mx-auto ' onSubmit={registeruser}>
                <input 
                type='text' 
                placeholder='Your Name Please  ...' 
                value={name} 
                onChange={event => setName(event.target.value)}></input>
                
                <input 
                type='email' 
                placeholder='Your Email Please ...' 
                value={email} 
                onChange={event => setEmail(event.target.value)}></input>
                
                <input 
                type='password' 
                placeholder='Your Password Please ...'
                value={password} 
                onChange={event => setPassword(event.target.value)}></input>
                
                <button className='primary'>Register</button>

                <div className='text-center py-2 text-gray-500'>
                    Already a member? <Link className="underline text-black" to={'/login'}>Login</Link>
                </div>
            </form>


        </div>
        

    </div>
  )
}

export default RegisterPage