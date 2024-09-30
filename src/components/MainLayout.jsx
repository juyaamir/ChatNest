import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import AppRoutes from '../routes/AppRoutes.jsx'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow '>
        <AppRoutes />
      </main>
      
     {/*  <Footer />
 */}    </div>
  )
}

export default MainLayout