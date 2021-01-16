import React from "react"
import Image from "gatsby-image"

const TestimonialCard = ({ text, reviewer, result, year }) => {
    return (
        <div className="cursor-pointer">
            <Image
                fluid={result.childImageSharp.fluid}
                className="h-64 rounded-t-md"
            />
            <div className="h-32 w-full shadow-md relative">
                <Image
                    fluid={reviewer.image.childImageSharp.fluid}
                    style={{ left: "50%", position: "absolute" }}
                    className="w-32 h-32 rounded-full absolute top-0 transform -translate-y-1/2 -translate-x-1/2 border-4 border-white shadow-md"
                />
                <div className="absolute bottom-0 w-full pb-4">
                    <h2 className="text-center font-bold text-primary-500">
                        {reviewer.name}
                    </h2>
                    <span className="text-center text-sm block text-gray-600">
                        {year}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
