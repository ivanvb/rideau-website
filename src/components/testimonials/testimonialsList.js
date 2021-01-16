import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TestimonialCard from "./testimonialCard"

const TestimonialsList = () => {
    const { allReviewsJson } = useStaticQuery(graphql`
        query {
            allReviewsJson {
                edges {
                    node {
                        text
                        year
                        reviewer {
                            name
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 500) {
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
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {allReviewsJson.edges.map(({ node }, i) => {
                return <TestimonialCard {...node} key={i} />
            })}
        </div>
    )
}

export default TestimonialsList
