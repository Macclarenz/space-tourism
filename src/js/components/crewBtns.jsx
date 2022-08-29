import React from "react";

export default function CrewBtns (props) {
    const {
        indexes,
        method
    } = props

    return (
        <div className="crew-btn-container">
            {
                Array.isArray(indexes) && indexes.map((index, i) =>  (
                    <button key = {`crew-dot-btn-key-${i}`} 
                        type="button" 
                        className='crew-dot-btn' 
                        data-index = {index}
                        onClick = {method}></button>
                ))
            }
        </div>
    )
}