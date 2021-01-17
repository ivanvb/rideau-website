import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AnimatedGallery from "../general/animatedGallery"

const Gallery = () => {
    const images = useStaticQuery(graphql`
        query {
            allFile(filter: { relativePath: { regex: "/gallery/.*/" } }) {
                edges {
                    node {
                        childImageSharp {
                            fluid(maxWidth: 500, maxHeight: 500) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `)
    const galleryImages = images.allFile.edges.map(image => image.node)

    return (
        <div className="flex flex-wrap std-margin-x items-stretch lg:h-80 mb-80 lg:mb-12">
            <AnimatedGallery
                className="w-full lg:w-1/2 order-2 lg:order-1 h-full mt-6 lg:mt-2"
                slideDuration={5000}
                galleryImages={galleryImages}
            />
            <div className="lg:pl-12 text w-full lg:w-1/2 order-1 lg:order-2">
                <h2 className="section-title">Sun Protection, Everywhere</h2>
                <p className="text-gray-700 leading-7">
                    Get the best value solar protection for your house. Each
                    time you pick Rideau, you're picking the best not only for
                    you and your family, but also for the environment. Rideau is
                    backed by SolarEdge, the global leader in intelligent solar
                    power control technology, featuring smart inverters that
                    have transformed the market.
                    <br></br>
                    <br></br>
                    Rideau has a strong commitment to help the environment, that
                    is why all our smart solutions for home automation are
                    certified by the Green Alliance to be 100% environment
                    friendly and produce zero waste. Here at Rideau we use smart
                    inverters that have transformed the market and today have
                    installed our solutions in more than 74,000 homes in U.S
                    alone.
                </p>
            </div>
        </div>
    )
}

export default Gallery
