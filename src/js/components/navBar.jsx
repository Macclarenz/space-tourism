import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import close from '../../assets/shared/icon-close.svg'

export default function NavBar (props) {
    const {
        closeMethod
    } = props

    const navResizeHandler = () => {
        const navContainer = document.querySelector('.nav-container')
        const navCloseBtn = document.querySelector('#navCloseBtn')
        if (window.innerWidth < 768) {
            navContainer.setAttribute('mobile', '')
            navCloseBtn.removeAttribute('disabled')
        } else {
            navContainer.removeAttribute('mobile')
            navCloseBtn.setAttribute('disabled', '')
        }
    }

    useEffect(() => {
        navResizeHandler()
        window.addEventListener('resize', navResizeHandler)
        return () => window.removeEventListener('resize', navResizeHandler)
    }, [])

    return (
        <nav className="nav-container">
            <button id="navCloseBtn" type="button" onClick={closeMethod}><img src={close} alt="close icon" /></button>
            <NavLink className='nav-text nav-link' data-index = {0} to='/'> Home</NavLink>
            <NavLink className='nav-text nav-link' data-index = {1} to='/destination'> Destination</NavLink>
            <NavLink className='nav-text nav-link' data-index = {2} to='/crew'> Crew</NavLink>
            <NavLink className='nav-text nav-link' data-index = {3} to='/technology'> Technology</NavLink>
        </nav>
    )
}