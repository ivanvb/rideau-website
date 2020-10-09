import React from "react"
import Img from "gatsby-image"

const ProductTab = ({ title, text, image }) => {
    return (
        <div className="flex flex-wrap lg:flex-no-wrap my-3">
            <div className="w-full lg:w-1/2 h-80 lg:mr-6">
                <Img fluid={image} className="h-full" />
            </div>
            <div className="w-full lg:w-1/2 my-3 lg:my-0">
                <h2 className="section-title lg:-mt-2">{title}</h2>
                <p className="text-gray-700 leading-7">{text}</p>
            </div>
        </div>
    )
}

export default ProductTab
