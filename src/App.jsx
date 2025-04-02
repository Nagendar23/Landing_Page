import React from 'react'
import './App.css'
import ButtonGradient from './assets/svg/ButtonGradient'
import Button from './Components/Button'
import Header from './Components/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import Hero from './Components/Hero'
import Benefits from '../src/Components/Benefits'
import Collaboration from '../src/Components/Collaboration'
import Services from './Components/Services'
import Pricing from './Components/Pricing'
import Roadmap from './Components/Roadmap'
import Footer from './Components/Footer'
import { service2 } from './assets'

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center bg-black text-white pt-[4.75rem] lg:pt-[5.25rem] min-h-screen w-full overflow-hidden">
        <Router>
          
          <Header />
          <Hero />
          <Benefits />
          <Collaboration />
          <Services />
          <Pricing/>
          <Roadmap/>
          <Footer/>
        </Router>
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
