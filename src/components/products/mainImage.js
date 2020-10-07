import React from "react"
import HeaderImage from "../general/headerImage"
import { graphql, useStaticQuery } from "gatsby"

const MainImage = () => {
    const mainImage = useStaticQuery(graphql`
        query {
            file(relativePath: { in: "products/principal.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1750, maxHeight: 1000) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `)
    return (
        <HeaderImage
            fluidImage={mainImage.file.childImageSharp.fluid}
            objectPosition="50% 20%"
        />
    )
}

export default MainImage
