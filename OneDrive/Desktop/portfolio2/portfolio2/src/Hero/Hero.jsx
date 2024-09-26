import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
<section className='hero-contaner'>
    <div className='hero-content'>
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
            Possionate Frontend Developer | Tranforming Ideas into Seamless and
            Visually Stunning web Solutions with knowledge in python,java,SQL,Server,IPNetworks and Ai.
        </p>
    </div>
    <div className='hero-img'>
        <div className='profile'>
            <img src='https://scontent.fhyd11-2.fna.fbcdn.net/v/t39.30808-6/448064132_358891503878397_5532354280910745226_n.jpg?stp=c0.213.526.526a_dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=mS3JwU3LeTUQ7kNvgFQVv8Q&_nc_ht=scontent.fhyd11-2.fna&_nc_gid=ADmVQoN2kJUEEZqm1WLZuNQ&oh=00_AYCMl3P9-x5tN5zXbXi4DuP21iohwOwzXjG04WORY9flNw&oe=66F033A3' width={180} height={200}/>
        </div>
        <img className="tech-icon1" src='data:image/jpeg;base64,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' width={30}/>
    </div>
    <div>
        <div className="tech-icons">
        <div className='tech-icon2'>
            <img src='data:image/png;base64,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' width={30}/>
        </div>
        <div className='tech-icon3'>
            <img src='data:image/png;base64,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' width={30}/>
        </div>
        <div className='tech-icon4'>
            <img src='data:image/png;base64,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' width={30}/>
        </div>
        </div>
    </div>

</section>
  )
}
