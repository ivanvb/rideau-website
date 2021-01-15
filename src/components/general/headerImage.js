import React, { useState } from "react"
import Img from "gatsby-image"

const HeaderImage = ({ fluidImage, objectPosition = "center", darken }) => {
    const [show, setShow] = useState(false)
    return (
        <div
            className={`h-64 md:h-96 w-full hide-horizontally mb-10 ${
                show ? "appear-horizontally" : "opacity-0"
            }`}
        >
            <Img
                fluid={fluidImage}
                className="h-full w-full"
                onLoad={() => setShow(true)}
                loading={"eager"}
                placeholderClassName="hidden"
                imgStyle={{
                    objectPosition: objectPosition,
                    objectFit: "cover",
                    filter: `darken ? "brightness(80%)" : ""`,
                }}
            />
        </div>
    )
}

export default HeaderImage
