import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { generateRandomNumber } from "../../util/index"

const Review = () => {
    const reviews = useStaticQuery(graphql`
        query {
            allReviewsJson {
                edges {
                    node {
                        text
                        reviewer {
                            name
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 300, maxHeight: 300) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        result {
                            childImageSharp {
                                fluid(maxWidth: 500) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const randomIndex = generateRandomNumber(
        0,
        reviews.allReviewsJson.edges.length
    )
    const review = reviews.allReviewsJson.edges[randomIndex].node

    return (
        <div className="std-padding-x py-8 bg-primary-100 grid grid-cols-12 grid-rows-2 gap-6">
            <div className="col-span-12 md:col-span-6 xl:col-span-7 row-span-2 h-80 md:h-80">
                <div className="h-full flex flex-col justify-center items-center mx-0 lg:mx-4 xl:mx-20 md:relative">
                    <Img
                        fluid={review.reviewer.image.childImageSharp.fluid}
                        className="h-32 w-32 rounded-full border-2 border-white shadow-xl"
                    />
                    <p className="bg-white px-4 py-8 md:p-8 -mt-8 text-center rounded shadow-md text-gray-700">
                        {review.text}
                    </p>
                </div>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-5 row-span-2 row-start-1 md:row-start-auto">
                <Img
                    fluid={review.result.childImageSharp.fluid}
                    className="h-80 shadow-xl"
                />
            </div>
        </div>
    )
}

export default Review
