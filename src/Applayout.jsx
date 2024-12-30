import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

const Applayout = () => {
  const navigation = useNavigation()
  console.log(`Navigation state:`, navigation)
  if(navigation.state === 'loading') {
    return <h1>Loading...</h1>
  }
  
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Applayout
