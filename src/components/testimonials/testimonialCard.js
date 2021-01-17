import React from "react"
import Image from "gatsby-image"

const TestimonialCard = ({ text, reviewer, result, year }) => {
    const [move, setMove] = React.useState(false)

    return (
        <button
            className="cursor-pointer overflow-hidden shadow-md focus:outline-none"
            onClick={() => setMove(prev => !prev)}
        >
            <Image
                fluid={result.childImageSharp.fluid}
                className="h-64 rounded-t-md"
            />
            <div className="h-40 w-full shadow-md relative">
                <Image
                    fluid={reviewer.image.childImageSharp.fluid}
                    style={{
                        left: `${move ? "50px" : "50%"}`,
                        position: "absolute",
                    }}
                    className={`w-32 h-32 rounded-full absolute top-0 transform -translate-y-1/2 -translate-x-1/2 border-4 border-white shadow-md transition-all duration-700 ${
                        move ? "scale-50" : ""
                    }`}
                />
                <div
                    className={`absolute bottom-0 w-full pb-12 transition-transform transform duration-700 ${
                        move ? "translate-y-56" : ""
                    }`}
                >
                    <h2 className="text-center font-bold text-primary-500">
                        {reviewer.name}
                    </h2>
                    <span className="text-center text-sm block text-gray-600">
                        {year}
                    </span>
                </div>
                <div
                    className={`absolute top-0 w-full pt-1 transition-transform transform duration-700 delay-300  ${
                        move
                            ? "translate-y-0 opacity-100"
                            : "translate-y-56 opacity-0"
                    }`}
                >
                    <h2
                        className="text-left font-bold text-primary-500 absolute"
                        style={{ left: "88px" }}
                    >
                        {reviewer.name}
                        <span className="inline-block ml-2 text-sm text-gray-700 font-light">
                            {year}
                        </span>
                    </h2>
                    <p className="pl-8 pr-4 text-sm pt-8 text-gray-700 text-left">
                        {text}
                    </p>
                </div>
            </div>
        </button>
    )
}

export default TestimonialCard
