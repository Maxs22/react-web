import React from 'react'
import "./Navbar.css"

const Navbar = ({ isCrolling }) => {
    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth"})
    }

    return (
        <nav className={ `navBar ${ isCrolling > 20 ? "scrolling" : null}`}>
            <div className="navBar-logo" onClick={toTheTop}>Your Name</div>
            
        </nav>
    )
}

export default Navbar
