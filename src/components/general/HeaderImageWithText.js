import React from "react"
import HeaderImage from "./headerImage"

const HeaderImageWithText = ({ image, text }) => {
    return (
        <div className="relative">
            <HeaderImage fluidImage={image} darken />
            <h1 className="absolute bottom-0 ml-4 md:ml-12 lg:ml-20 pb-4 lg:pb-6 text-white text-3xl md:text-52xl lg:text-6xl uppercase tracking-wide">
                {text}
            </h1>
        </div>
    )
}

export default HeaderImageWithText
