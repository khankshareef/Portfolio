import React from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Hero/Hero'
import Skills from './Skills/Skills'
import SkillsCard from './SkillsCard/SkillsCard'

function App() {
  return (
    <>
    <Navbar/>
    <div className='container'>
        <Hero/>
        <Skills/>
        <SkillsCard/>
    </div>
    </>
  )
}

export default App