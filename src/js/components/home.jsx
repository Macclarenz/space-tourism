import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home-container">

            <section className="home-detail-container">
                <h5 className="heading-5">So, you want to travel</h5>
                <h1 className="heading-1">Space</h1>
                <p className="body-text">
                    Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!
                </p>
            </section>
            <Link to='/destination' id="homeExploreBtn">Explore</Link>
        </div>
    )
}