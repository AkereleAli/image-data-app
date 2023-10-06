import React from 'react'
import './landingpage.css'


const LandingPage = () => {
  return (
    <div className='container'>
        <div className='logo'>
            <h1>IMG-APP</h1>
        </div>
        <div className='navlist'>
            <p className="title" href='/'>
                Home
            </p>
            <p className="title" href='/'>
                About
            </p>
            <p className="title" to='/'>
                Faq
            </p>
        </div>
    </div>
  )
}

export default LandingPage