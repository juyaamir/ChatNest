import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context'
const HomePage = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div>
        <div className='flex flex-col justify-center items-center mt-16'>
            <p className='lg:text-4xl md:text-3xl sm:text-xl '>Make free, secure messages </p> 
            <p className='lg:text-4xl md:text-3xl sm:text-xl '> to anyone, anywhere.</p> 
            <p className='my-4'> Stay connected and continue your conversations wherever you are.</p>
            <div className='mt-8 hover:scale-105 transform translate-x-2 ease-in-out'>
            <Link to={ isAuthenticated ? '/chats' : '/login'} className='bg-blue-500 hover:bg-blue-700  text-white px-4 py-2 rounded-lg '>
                  Get Started Now &gt;&gt;&gt;
                </Link> 
            </div>
        </div>
    </div>
  )
}

export default HomePage