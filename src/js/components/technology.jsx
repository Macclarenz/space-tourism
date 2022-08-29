import React, { useEffect, useState } from "react";
import TechnologyBtns from "./technologyBtns";

export default function Technology(props) {
    const {
        technology
    } = props

    // prints technology prop
    // useEffect(() => {
    //     console.log(technology)
    // }, [technology])

    const [visibleTechnology, setVisibleTechnology] = useState()

    useEffect(() => {
        if (!technology?.length) return
        setVisibleTechnology(technology[0])
        setActiveCircleBtn()
    }, [technology])

    const viewTechnologyHandler = ({ target }) => {
        setVisibleTechnology(technology[target.dataset.index])
        setActiveCircleBtn(target)
    }

    const setActiveCircleBtn = (target) => {
        const circleBtns = document.querySelectorAll('.technology-circle-btn')
        circleBtns.forEach(btn => btn.classList.remove('circle-active'))
        if (!target) return circleBtns[0].classList.add('circle-active')
        else return target.classList.add('circle-active')
    }

    const imageResizeHandler = () => {
        const technologyImg = document.querySelector('.technology-img')
        if (window.innerWidth < 1024) {
            return technologyImg.src = visibleTechnology.images.landscape
        } else {
            return technologyImg.src = visibleTechnology.images.portrait
        }
    }

    // I set the image here
    useEffect(() => {
        if (!visibleTechnology) return
        imageResizeHandler()
        window.addEventListener('resize', imageResizeHandler)
        return () => window.removeEventListener('resize', imageResizeHandler)
    }, [visibleTechnology])

    return (
        <div className="technology-container">
            <h5 className="heading-5 page-name"><span className="page-index">03</span>  Space Launch 101</h5>
            <img    // - I purposely didn't set the src here instead, I set it in the useEffect() when the data for the images has loaded
                className="technology-img" 
                alt={visibleTechnology?.name} />
            <div className="technology-col-1">
                <TechnologyBtns 
                    indexes = {technology?.length && technology.map((el, i) => i + 1)}
                    method = {viewTechnologyHandler} />
                <section className="technology-detail-container">
                    <p className="nav-text">The technology...</p>
                    <h3 className="heading-3 technology-name">{visibleTechnology?.name}</h3>
                    <p className="body-text technology-description">{visibleTechnology?.description}</p>
                </section>
            </div>
        </div>
    )
}