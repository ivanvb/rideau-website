import React from "react"

const AboutCard = ({ className = "", text, title, icon }) => {
    return (
        <div
            className={`bg-gray-200 px-4 py-6 md:p-6 flex flex-col md:flex-row w-full items-center ${className} rounded shadow-md`}
        >
            <div className="h-20 w-20 bg-primary-700 rounded-full flex-shrink-0 mr-3 flex justify-center items-center">
                {icon}
            </div>
            <div className="flex items-center md:items-start flex-col justify-center">
                <h3 className="font-bold text-lg text-primary-900 my-1 md:my-0">
                    {title}
                </h3>
                <p className="text-gray-700 text-center md:text-left">{text}</p>
            </div>
        </div>
    )
}

export default AboutCard
