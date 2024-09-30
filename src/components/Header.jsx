import React from 'react'
import logo from '../assets/logo.png'
import Chats from '../pages/Chats'
import { useAuth } from '../Context'
import { useNavigate, Link } from 'react-router-dom'
const Header = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/');
  };
  return (
    <div className='h-20 border-gray-500 border px-6' >
        <div className='flex justify-between items-center h-full flex-wrap'>
          <div>
            <Link to = '/'>
            <img src={logo} alt="logo" className='h-16' />
            </Link>
            
          </div>
          <div>
            <ul className='flex space-x-4 flex-wrap'>
              <li><Link to='/chats'>Chats</Link></li>
              <li><Link to='/' >Features</Link></li>
              <li><Link to='/contact-us' >Contact Us</Link></li>
              {!isAuthenticated ? 
                <li><Link to='/login'>Login</Link></li> : 
                <li><button onClick={handleLogout}>Logout</button></li>
              }
              <li><Link to='/chatapp'>ChatApp</Link></li>
              
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Header