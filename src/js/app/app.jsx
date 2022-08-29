import '../../style/app.scss'

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { loadCrew, selectCrew } from "../features/crew/crewSlice";
import { loadDestinations, selectDestinations } from "../features/destinations/destinationsSlice";
import { loadTechnology, selectTechnology } from "../features/technology/technologySlice";

import Header from "../components/header";
import Destination from "../components/destination";
import Home from "../components/home";
import Crew from "../components/crew";
import Technology from "../components/technology";


export default function App() {
    const dispatch = useDispatch()
    const crew = useSelector(selectCrew)
    const destinations = useSelector(selectDestinations)
    const technology = useSelector(selectTechnology)

    useEffect(() => {
        dispatch(loadCrew())
        dispatch(loadDestinations())
        dispatch(loadTechnology())
    }, [])

    // prints crew, destination and technology state
    // useEffect(() => {
    //     console.log(crew)
    //     console.log(destinations)
    //     console.log(technology)
    // }, [crew, destinations, technology])

    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element = {<Home />}></Route>
                    <Route path='/destination' element = {<Destination destinations = {destinations} />}></Route>
                    <Route path='/crew' element = {<Crew crew = {crew}/>}></Route>
                    <Route path='/technology' element = {<Technology technology = {technology}/>}></Route>
                </Routes>
            </main>
            <footer></footer>
        </Router>
    )
}