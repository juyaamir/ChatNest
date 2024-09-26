import React, {useState} from 'react'
import { Link } from 'react-router-dom'
const RegisterPage = () => {
    const [formDate, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...FormData,
            [name]: value,
        })
    };
    const handleSubmit = (e) => {
        e.preventDefault();

    } 
  return (
    <div className='px-2'>
        <div className=' max-w-96 mx-auto mt-12 rounded-lg '>
            <div className='border-b border-b-gray-400 py-4 text-center my-4'>
                <h1 className='lg:text-4xl md:text-3xl sm:text-xl font-bold'>Sign Up</h1>
            </div>
            <form className='flex flex-col gap-2 border-b border-gray-400 pb-12 mb-4' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name" className='py-1'>Enter your name</label>
                    <input type="text" id='name' onClick={handleChange}
                    className='w-full p-2 border border-gray-400 rounded-lg' placeholder='name' required/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email" onClick={handleChange}
                    className='py-1'>Enter your email</label>
                    <input type="email" id='email' className='w-full p-2 border border-gray-400 rounded-lg' placeholder='email' required/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password" className='py-1'>Enter your password</label>
                    <input type="password" id='password' onClick={handleChange}
                    className='w-full p-2 border border-gray-400 rounded-lg' placeholder='password' required/>
                </div>
                <button className='bg-blue-500 hover:bg-blue-700 py-2  text-white font rounded-full mt-4'>
                    Register
                </button>
            </form>
            <div>
                <p><Link to='#' className='hover:underline'>Data Protection Policy</Link> | <Link to='#' className='hover:underline'>End-User Agreement</Link></p>
            </div>
        </div>

    </div>
  )
}

export default RegisterPage