import React, { useEffect, useState } from "react";
import CrewBtns from "./crewBtns";

export default function Crew(props) {
    const {
        crew
    } = props

    // prints crew prop
    // useEffect(() => {
    //     console.log(crew)
    // }, [crew])

    const [visibleCrew, setVisibleCrew] = useState()
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (!crew?.length) return
        setVisibleCrew(crew[index])
        setActiveDotBtn()
    }, [crew])

    const viewCrewHandler = ({ target }) => {
        setIndex(parseInt(target.dataset.index))
    }

    const setIndexInterval = () => {
        setIndex(prevIndex => {
            if (prevIndex >= crew.length - 1) return prevIndex = 0
            else return prevIndex + 1
        })
    }

    useEffect(() => {
        if (!visibleCrew) return
        const idInterval = setInterval(setIndexInterval, 10000)
        return () => clearInterval(idInterval)
    }, [visibleCrew])

    // adds a class 'active' for dot btn
    const setActiveDotBtn = () => {
        const crewDotBtn = document.querySelectorAll('.crew-dot-btn')
        crewDotBtn.forEach(el => {
            el.classList.remove('active')
        })
        crewDotBtn[index].classList.add('active')
    }

    useEffect(() => {
        if (!visibleCrew) return
        setVisibleCrew(crew[index])
        setActiveDotBtn()
        // console.log(index)   // - to check the index
    }, [index])

    return (
        <div className="crew-container">
            <h5 className="heading-5 page-name"><span className="page-index">02</span> Meet your crew</h5>
            <div className="crew-img-container" data-index = {index} >
                <img className="crew-img"src={visibleCrew?.images.webp ? visibleCrew?.images.webp : visibleCrew?.images.png} alt={visibleCrew?.name} />     
            </div>
            <div className="crew-col-2">
                <section className="crew-detail-container">
                    <h4 className="heading-4 crew-role">{visibleCrew?.role}</h4>
                    <h3 className="heading-3 crew-name">{visibleCrew?.name}</h3>
                    <p className="body-text crew-bio">{visibleCrew?.bio}</p>
                </section>
                <CrewBtns 
                    indexes = {crew?.length && crew?.map((el, i) => i)}
                    length = {crew?.length}
                    method = {viewCrewHandler}
                />
            </div>
        </div>
    )
}