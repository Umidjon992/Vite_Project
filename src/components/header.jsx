import React from 'react'
import "./header.css"
import logo from "/IMAGE.png"
import { Button } from '@mui/material'

const Header = () => {
  return (
    <div>
        <div className="top">
            <p>A Webflow template for SaaS products. <span>See all templates</span></p>
        </div>
        <header>
            <div className="left">
              <div>
                <img src={logo} alt="Logo" />
              </div>
              <ul className="nav">
                <li className="nav_li">Features</li>
                <li className="nav_li">Pricing</li>
                <li className="nav_li">Integrations</li>
                <li className="nav_li">Learn</li>
              </ul>
            </div>
            <div className="right">
              <Button variant='text' className='sing'>Sign in</Button>
              <Button sx={{backgroundColor: "#0070A0"}} variant='contained' className='demo'>Book a demo</Button>
            </div>
        </header>
    </div>
  )
}

export default Header