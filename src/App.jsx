import React from 'react'
import Navbar from './compound/Navbar'
import Hero from './compound/Hero'
import Advantage from './compound/Advantage'
import Feature from './compound/Feature'
import FAQ from './compound/FAQ'
import End from './compound/End'
import APKSection from './compound/APK'


const App = () => {
  return (
    <div className='font-Montserrat overflow-hidden'>

    <Navbar />
    <Hero />
    <Advantage />
    <Feature />
    <APKSection />
    <FAQ />
    <End />

    </div>
  )
}

export default App