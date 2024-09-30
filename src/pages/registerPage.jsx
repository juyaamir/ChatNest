import React, {useState} from 'react'
import axios from 'axios'
import { redirect, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { set } from 'mongoose'
const RegisterPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/users/register', formData);
            setSuccess(`${response.data.user.email} has been registered successfully!`);
            console.log(response.data);
        } catch (error) {
            setError(`${error.response.data.error}  ${error.response.status} ${error.response.statusText}`);
            console.log(error.response);

            setTimeout(() => {
                setError('');
            }, 2000);
        }
    };

    if(error) return <div className='text-red-500 text-center text-2xl flex flex-col mt-20 items-center justify-center '>{error}</div>
    if(success) return <div className='text-green-500 text-center text-2xl flex items-center justify-center'>{success}</div>
  return (
    <div className='px-2'>
        <div className=' max-w-96 mx-auto mt-12 rounded-lg '>
            <div className='border-b border-b-gray-400 py-4 text-center my-4'>
                <h1 className='lg:text-4xl md:text-3xl sm:text-xl font-bold'>Sign Up</h1>
            </div>
            <form className='flex flex-col gap-2 border-b border-gray-400 pb-12 mb-4' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name" className='py-1'>Enter your name</label>
                    <input type="text" id='name' name='name' onChange ={handleChange} value={formData.name}
                    className='w-full p-2 border border-gray-400 rounded-lg' placeholder='name' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email" className='py-1'>Enter your email</label>
                    <input type="email" id='email' name='email' onChange ={handleChange} value={ formData.email } 
                    className='w-full p-2 border border-gray-400 rounded-lg' placeholder='email' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password" className='py-1'>Enter your password</label>
                    <input type="password" id='password' name='password' onChange ={ handleChange } value={ formData.password }
                    className='w-full p-2 border border-gray-400 rounded-lg' placeholder='password' />
                </div>
                <button className='bg-blue-500 hover:bg-blue-700 py-2  text-white font rounded-md mt-4'>
                    Register
                </button>
                    <p className='mt-2'>Already have an account? <Link to='/login'                         className='hover:underline'>Login</Link>
                    </p>
            </form>
            <div className=''>
                <p><Link to='#' className='hover:underline'>Data Protection Policy</Link> | <Link to='#' className='hover:underline'>End-User Agreement</Link></p>
            </div>
        </div>

    </div>
  )
}

export default RegisterPage