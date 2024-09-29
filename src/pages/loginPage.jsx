import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const LoginPage = () => {
    const navigate = useNavigate
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const [formData, setFormData] = useState({
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
            const response = await axios.post('http://localhost:8000/api/users/login', formData);
            setSuccess(`${response.data.token}`);
            console.log(response.data);
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            setError(`${error}`);
            console.log(error);
        }
    };

    if(error) return <div className='text-red-500 text-center text-2xl flex flex-col mt-20 items-center justify-center '>{error}</div>
    if(success) return (
        <div className='text-green-500 text-center text-2xl flex flex-col mt-20 items-center justify-center '>
            {success}
        </div>
    )


  return (
    <div className='px-2'>
              <div className=' max-w-96 mx-auto mt-12 rounded-lg '>
            <div className='border-b border-b-gray-400 py-4 text-center my-4'>
                <h1 className='lg:text-4xl md:text-3xl sm:text-xl font-bold'>Sign In</h1>
            </div>
            <form className='flex flex-col gap-2 border-b border-gray-400 pb-12 mb-4' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email" className='py-1'>Enter your email</label>
                    <input type="email" id='email' name='email' onChange ={handleChange} value={ formData.email } 
                    className='w-full p-2 border border-gray-400 rounded-lg' placeholder='email' required/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password" className='py-1'>Enter your password</label>
                    <input type="password" id='password' name='password' onChange ={ handleChange } value={ formData.password }
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

export default LoginPage