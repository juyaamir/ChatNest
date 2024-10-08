import React from 'react'
import {Routes, Route } from 'react-router-dom'
import HomePage from '../pages/homePage'
import ContactPage from '../pages/contactPage'
import LoginPage from '../pages/loginPage'
import RegisterPage from '../pages/registerPage'
import Chats from '../pages/Chats'
import ChatApp from '../components/ChatApp'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/chatapp" element={<ChatApp />} />
      </Routes>
    </div>
  )
}

export default AppRoutes