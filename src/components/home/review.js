import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Review = () => {
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

    const image = images.allFile.edges[0].node.childImageSharp.fluid
    return (
        <div className="std-padding-x py-8 bg-primary-100 grid grid-cols-12 grid-rows-2 gap-6">
            <div className="col-span-12 md:col-span-6 xl:col-span-7 row-span-2 h-80 md:h-80">
                <div className="h-full flex flex-col justify-center items-center mx-0 lg:mx-4 xl:mx-20 md:relative">
                    <Img
                        fluid={image}
                        className="h-32 w-32 rounded-full border-2 border-white shadow-xl"
                    />
                    <p className="bg-white px-4 py-8 md:p-8 -mt-8 text-center rounded shadow-md text-gray-700">
                        The quality of the service was something I had never
                        came across in any other company. From day one they made
                        sure I was getting the best service possible.
                        <Link
                            to="/about"
                            className="block mt-4 font-bold -mb-4"
                        >
                            Read full review
                        </Link>
                    </p>
                </div>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-5 row-span-2 row-start-1 md:row-start-auto">
                <Img fluid={image} className="h-80 shadow-xl" />
            </div>
        </div>
    )
}

export default Review
