import React, { useEffect, useState } from "react";
import DestinationBtns from "./destinationBtns";

export default function Destination(props) {
    const {
        destinations
    } = props

    // prints destination prop
    // useEffect(() => {
    //     console.log(destinations)
    // }, [destinations])

    const [visibleDestination, setVisibleDestination] = useState()

    useEffect(() => {
        if (!destinations?.length) return
        setVisibleDestination(destinations[0])
        setActiveTabBtn()
    }, [destinations])

    const viewDestinationHandler = ({ target }) => {
        setVisibleDestination(destinations[target.dataset.index])
        setActiveTabBtn(target)
    }

    const setActiveTabBtn = (target) => {
        const tabBtns = document.querySelectorAll('.destination-tab-btn')
        tabBtns.forEach(btn => btn.classList.remove('tab-active'))

        if (!target) return tabBtns[0].classList.add('tab-active')
        else return target.classList.add('tab-active')
    }

    return (
        <div className="destination-container">
            <h5 className="heading-5 page-name"><span className="page-index">01</span> Pick your destination</h5>
            <img className="destination-img" src={visibleDestination?.images.webp ? visibleDestination?.images.webp : visibleDestination?.images.png} alt={visibleDestination?.name} />
            <div className="destination-col-2">
                <DestinationBtns 
                    method = {viewDestinationHandler}
                    data = {destinations?.length && destinations.map((el, index) => ({name: el.name, index}))}
                />
                <section className="destination-detail-container">
                    <h2 className="heading-2 destination-name">{visibleDestination?.name}</h2>
                    <p className="body-text destination-description">{visibleDestination?.description}</p>
                    <div className="distance-travel-container">
                        <section className="distance-container">
                            <p className="subheading-2 destination-distance-subheading">avg. distance</p>
                            <p className="subheading-1 destination-distance-text">{visibleDestination?.distance}</p>
                        </section>
                        <section className="travel-container">
                            <p className="subheading-2 destination-travel-subheading">est travel time</p>
                            <p className="subheading-1 destination-travel-text">{visibleDestination?.travel}</p>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    )
}