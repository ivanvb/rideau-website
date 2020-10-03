import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Categories = () => {
    const categoriesQuery = useStaticQuery(graphql`
        {
            allCategoriesJson {
                edges {
                    node {
                        name
                        image {
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
    const categories = categoriesQuery.allCategoriesJson.edges.map(
        category => category.node
    )

    return (
        <section className="std-padding-x std-section-m-bottom std-section-m-top">
            <h2 className="mb-2 font-bold text-2xl text-primary-900">
                Our Categories
            </h2>
            <div className="grid grid-cols-12 gap-4">
                {categories.map((category, i) => {
                    return (
                        <Link
                            className="col-span-12 md:col-span-4 h-16 md:h-full w-full relative block rounded md:rounded-none overflow-hidden"
                            key={i}
                            to="/about"
                        >
                            <Img
                                fluid={category.image.childImageSharp.fluid}
                                key={i}
                                imgStyle={{
                                    objectFit: "cover",
                                }}
                                className="h-full"
                            />
                            <div className="overlay absolute h-full w-full bg-primary-700 opacity-50 top-0 hover:opacity-75 transition-opacity duration-500" />
                            <h3 className="text-white absolute-center text-2xl md:text-3xl">
                                {category.name}
                            </h3>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Categories
