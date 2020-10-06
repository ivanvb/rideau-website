import React from "react"

const AboutFact = ({ number, text, className = "" }) => {
    return (
        <div className={`${className}`}>
            <h3 className="text-primary-900 font-extrabold text-6xl -mb-2">
                {number}
            </h3>
            <span className="text-gray-700">{text}</span>
        </div>
    )
}

export default AboutFact
