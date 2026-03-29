import { Button } from '@mui/material'
import hero from "/IMAGE.png"
import "./hero.css"
import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className="container">
            <div className="left_hero">
                <h1>Your everyday tasks, automated.</h1>
                <p>Whirl lets you design and streamline your everyday tasks and workflows in just a few clicks.</p>
                <div style={{display:"flex", gap: "10px"}}>
                    <Button variant='contained' sx={{backgroundColor: "#0070A0"}}>Book a demo</Button>
                <Button sx={{color: "#0070A0"}}>Learn more</Button> 
                </div>
            </div>
            <div className="right_hero">
                <img src={hero} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero