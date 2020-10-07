import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeaderImage = ({ fluidImage }) => {
    const [show, setShow] = useState(false)
    return (
        <div
            className={`h-64 md:h-96 w-full hide-horizontally mb-10 ${
                show ? "appear-horizontally" : "opacity-0"
            }`}
        >
            <Img
                fluid={fluidImage}
                className="h-full w-full object-fill"
                onLoad={() => setShow(true)}
                loading={"eager"}
                placeholderClassName="hidden"
            />
        </div>
    )
}

export default HeaderImage
