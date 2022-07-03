import React from "react"
import image from "../Images/globe.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src= {image}
                className="header--image"
                alt="globe"
            />
            <h2 className="header--title">Countries</h2>
        </header>
    )
}