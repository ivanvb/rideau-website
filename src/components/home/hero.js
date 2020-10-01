import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Hero = () => {
  const heroImage = useStaticQuery(graphql`
    query {
      file(relativePath: { in: "home/hero-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, maxHeight: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="relative flex flex-wrap mt-12 md:mt-0">
      <div className="w-full md:w-1/2 px-8 md:pl-12 xl:pl-48 md:pr-8 flex flex-col justify-center mb-16">
        <h1 className="font-bold text-3xl text-gray-900 mb-6 md:mb-4 leading-8 text-center md:text-left">
          Find The Right Blinds.<br></br>For The Right Place.
        </h1>
        <p className="text-gray-700 mb-8 text-center md:text-left">
          Picking the right blinds can be a long and daunting task.<br></br>
          That's why we're here to guide you through the entire process, from
          deciding which one to choose to installing it into your home!
        </p>
        <button className="btn w-1/2 lg:w-5/12 mx-auto md:mx-0">
          See our catalog
        </button>
      </div>
      <Img
        fluid={heroImage.file.childImageSharp.fluid}
        className="h-80 md:h-140 w-full md:w-1/2 object-fill"
      />
    </section>
  )
}

export default Hero
