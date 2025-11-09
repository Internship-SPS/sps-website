import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

function App() {


  return (
    <>

  <div className="container-fluid mx-5">
      <Navbar />
      <HeroSection/>
      <Footer/>
  </div>
    </>
  )
}

export default App
