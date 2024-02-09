import React from 'react'

const Summary = ({ image, title, number1, number2, bgcolor }) => {
    return (
        <div className={`${bgcolor} h-[3.5rem] rounded-summaryR flex items-center px-2 justify-between w-summary`}>
            <div className="flex flex-row">
                <img className="px-2" src={image} alt="" />
                <h3>{title}</h3>
            </div>
            <p>
                <span>{number1}</span>
                <span>{number2}</span>
            </p>
        </div>
    )
}

export default Summary