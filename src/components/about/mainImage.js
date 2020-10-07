import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import HeaderImage from "../general/headerImage"

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

    return <HeaderImage fluidImage={mainImage.file.childImageSharp.fluid} />
}

export default MainImage
