import React from "react";

export default function TechnologyBtns(props) {
    const {
        method, 
        indexes, 
    } = props

    return (
        <div className="technology-btn-container">
            {
                indexes?.length && indexes.map((index, index2) => (
                    <button 
                        key={`technology-circle-btn-key-${index}`}
                        type="button" 
                        className="technology-circle-btn"
                        onClick={method}
                        data-index = {index2}>
                        {index}
                    </button>
                ))
            }
        </div>
    )
}