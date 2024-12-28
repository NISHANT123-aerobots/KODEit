import React from 'react'
import { useState  } from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
  const[username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="flex items-center justify-center h-screen bg-[#a4e4ff] ">
    <form className='bg-white p-6 rounded-lg shadow-md w-full max-w-md justify-center-flex items-center mr-10 px-15 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'>

      <h2 className='text xl font-bold text-center mb-6'>Signup</h2>
       <div className="input-box mb-5">
        <label htmlFor="username" className='block text-sm font-medium text-gray-800 mb-1 group-hover:text-sky-500 transition duration-300'>Username</label>
        <input onChange={(e)=>{setUsername(e.target.value)}} value={username}type="text" id='username' placeholder='Username'
        className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2'  ></input>
       </div>

       <div className="input-box mb-5">
        <label htmlFor="Name" className='block text-sm font-medium text-gray-800 mb-1'>Name</label>
        <input onChange={(e)=>{setName(e.target.value)}} value={name}type="text" id='Name' placeholder='Name'
        className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2'  ></input>
       </div>
       <div className="input-box mb-5">
        <label htmlFor="Email" className='block text-sm font-medium text-gray-800 mb-1'>Email</label>
        <input onChange={(e)=>{setEmail(e.target.value)}} value={email}type="text" id='Email' placeholder='Email'
        className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2'  ></input>
       </div>
       <div className="input-box mb-5">
        <label htmlFor="Password" className='block text-sm font-medium text-gray-800 mb-1'>Password</label>
        <input onChange={(e)=>{setPassword(e.target.value)}} value={password}type="text" id='Password' placeholder='Password'
        className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2'  ></input>
       </div>
       

       <p className='mb-4'> Already have an account ?  <Link to ='/login' className='text-blue-800'> Login</Link></p>
       <button
          type="submit"
          className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-transform duration-300"
        >
          Sign Up  
        </button>
    </form>
      {/* <div className="input-box">
      <input type="text" placeholder='username'>
      </input>
      </div>
      <div className="input-box">
      <input type="text" placeholder='name'>
      </input>
      </div>
      <div className="input-box">
      <input type="text" placeholder='email id'>
      </input>
      </div>
      <div className="input-box">
      <input type="text" placeholder='password'>
      </input>
      </div> */}
    </div>
  )
}

export default Signup