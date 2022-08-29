import React from "react";

export default function DestinationBtns(props) {
    const {
        data,
        method
    } = props
    return (
        <div className="destination-btn-container">
            {
                data?.length && data.map(el => (
                    <button
                        key={`destination-tab-btn-key-${el.index}`}
                        type="button"
                        onClick={method}
                        data-index = {el.index}
                        className = 'nav-text destination-tab-btn'
                    >{el.name}</button>
                ))
            }
        </div>
    )
}
