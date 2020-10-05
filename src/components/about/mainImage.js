import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MainImage = () => {
    const mainImage = useStaticQuery(graphql`
        query {
            file(relativePath: { in: "about/principal.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, maxHeight: 2000) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `)

    const [show, setShow] = useState(false)
    return (
        <div
            className={`h-64 md:h-96 w-full hide-horizontally mb-10 ${
                show ? "appear-horizontally" : "opacity-0"
            }`}
        >
            <Img
                fluid={mainImage.file.childImageSharp.fluid}
                className="h-full w-full object-fill"
                onLoad={() => setShow(true)}
                loading={"eager"}
                placeholderClassName="hidden"
            />
        </div>
    )
}

export default MainImage
