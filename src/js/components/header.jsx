import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";

import logo from '../../assets/shared/logo.svg'
import hamburger from '../../assets/shared/icon-hamburger.svg'
import NavBar from "./navBar";

export default function Header () {
    const { pathname }  = useLocation()

    // sets the attribute of the current page for the outer-container to change background image
    useEffect(() => {
        const outerContainer = document.querySelector('.outer-container')
        outerContainer.setAttribute('current-page', pathname.split('/')[1])
    }, [pathname])

    const navHamburgerResizeHandler = () => {
        const navHamburgerBtn = document.querySelector('#navHamburgerBtn')
        if (window.innerWidth >= 768) {
            navHamburgerBtn.setAttribute('disabled', '')
        } else navHamburgerBtn.removeAttribute('disabled')
    }

    const openNavHandler = () => {
        const navContainer = document.querySelector('.nav-container')
        navContainer.setAttribute('open-nav', '')
    }

    const closeNavHandler = () => {
        const navContainer = document.querySelector('.nav-container')
        navContainer.removeAttribute('open-nav')
    }

    useEffect(() => {
        navHamburgerResizeHandler()
        window.addEventListener('resize', navHamburgerResizeHandler)
        return () => window.removeEventListener('resize', navHamburgerResizeHandler)
    }, [])

    return (
        <header className="header-container">
            <img className="header-logo" src={logo} alt="logo" />
            <NavBar closeMethod = {closeNavHandler}/>
            <button type="button" id="navHamburgerBtn" onClick={openNavHandler}><img src={hamburger} alt="hamburger nav menu icon" /></button>
        </header>
    )
}