import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { IoMdArrowRoundForward } from "react-icons/io"

const ProductTab = ({ title, text, image, showcaseImages }) => {
    return (
        <div className="flex flex-wrap lg:flex-no-wrap my-3">
            <div className="w-full lg:w-1/2 h-80 lg:mr-6">
                <Img fluid={image} className="h-full" />
            </div>
            <div className="w-full lg:w-1/2 my-3 lg:my-0 h-auto lg:h-80 relative">
                <h2 className="section-title lg:-mt-2">{title}</h2>
                <p className="text-gray-700 leading-7">
                    {`${text.substring(0, 240).trim()}${
                        text.length > 240 ? "..." : ""
                    }`}
                </p>
                <div className="my-2 flex items-center read-more-container">
                    <Link
                        to="/about/"
                        className="text-primary-500 font-bold flex items-center"
                    >
                        Read More
                        <IoMdArrowRoundForward className="text-primary-500 mt-1 ml-1" />
                    </Link>
                </div>
                <div className="grid grid-cols-4 gap-2 relative lg:absolute w-full bottom-0">
                    {showcaseImages.map((showcaseImage, i) => (
                        <Link
                            to="/about/"
                            key={i}
                            className="col-span-2 md:col-span-1 "
                        >
                            <Img fluid={showcaseImage} className="h-full" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductTab
