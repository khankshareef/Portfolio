import React from 'react'
import SkillsCard from '../SkillsCard/SkillsCard'
import { SKILLS } from '../Urls/data'
import './Skills.css'

function Skills() {
  return (
    <section className='skills-container'>
    <h5>Technical Proficiency</h5>

    <div className='skills-content'>
        <div className='skills'>
                {SKILLS.map=(item)=>{
                    <SkillsCard
                    key={item.title}
                    iconUrl={item.icon}
                    title={item.skills}/>
                }}
        </div>

        <div className='skills-info'></div>
    </div>
    </section>
  )
}

export default Skills;