import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='px-2'>
              <div className=' max-w-96 mx-auto mt-12 rounded-lg '>
            <div className='border-b border-b-gray-400 py-4 text-center my-4'>
                <h1 className='lg:text-4xl md:text-3xl sm:text-xl font-bold'>Sign In</h1>
            </div>
            <form className='flex flex-col gap-3
              border-b border-gray-400 pb-12 mb-4'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email" className='py-1'>Enter your email</label>
                    <input type="email" id='email' className='w-full p-2 border border-gray-400 rounded-lg' placeholder='email' required/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password" className='py-1'>Enter your password</label>
                    <input type="password" id='password' className='w-full p-2 border border-gray-400 rounded-lg' placeholder='password' required/>
                </div>
                <button className='bg-blue-500 hover:bg-blue-700 py-2  text-white font rounded-full mt-4'>
                    Register
                </button>
                <div>
                  <p className='my-4 flex flex-wrap justify-between'><Link className='hover:underline py-1'>Forget password?</Link> 
                  <Link to='/register' className='border border-gray-400 px-4 py-1 rounded-full hover:bg-blue-700 hover:text-white'>Sign Up</Link></p>
                </div>
            </form>

            <div>
                <p><Link to='#' className='hover:underline'>Data Protection Policy</Link> | <Link to='#' className='hover:underline'>End-User Agreement</Link></p>
            </div>
        </div>
    </div>
  )
}

export default LoginPage