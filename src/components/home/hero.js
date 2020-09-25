import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Hero = () => {
  const heroImage = useStaticQuery(graphql`
    query {
      file(relativePath: { in: "home/hero-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="relative">
      <Img
        fluid={heroImage.file.childImageSharp.fluid}
        className="h-64 lg:h-auto"
      />
    </div>
  )
}

export default Hero
