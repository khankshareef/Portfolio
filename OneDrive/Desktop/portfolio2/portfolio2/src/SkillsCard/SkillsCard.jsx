import React from 'react';
import './SkillsCard.css';

const SkillsCard = ({title,iconUrl,isActive,onclick})=> {
  return (
        <div className={`skill-card ${isActive ? "active" : ""}`} 
        onClick={()=> onclick={}}>

        <div className='skills-icon'>
        <img src='iconUrl' alt='{title}'/>
        </div>
        <span>{title}</span>
        </div>
  )
}

export default SkillsCard;
