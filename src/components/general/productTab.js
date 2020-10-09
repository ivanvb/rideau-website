import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { IoMdArrowRoundForward } from "react-icons/io"

const ProductTab = ({ title, text, image }) => {
    return (
        <div className="flex flex-wrap lg:flex-no-wrap my-3">
            <div className="w-full lg:w-1/2 h-80 lg:mr-6">
                <Img fluid={image} className="h-full" />
            </div>
            <div className="w-full lg:w-1/2 my-3 lg:my-0">
                <h2 className="section-title lg:-mt-2">{title}</h2>
                <p className="text-gray-700 leading-7">{text}</p>
                <div className="mt-4 flex items-center read-more-container">
                    <Link
                        to="/about"
                        className="text-primary-500 font-bold flex items-center"
                    >
                        Read More
                        <IoMdArrowRoundForward className="text-primary-500 mt-1 ml-1" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductTab
