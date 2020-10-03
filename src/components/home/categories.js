import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { useInView } from "react-intersection-observer"

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

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    })

    return (
        <section
            className="std-padding-x std-section-m-bottom std-section-m-top"
            ref={ref}
        >
            <h2 className="section-title mb-2">Our Categories</h2>
            <div className="grid grid-cols-12 gap-4">
                {categories.map((category, i) => {
                    return (
                        <Link
                            className={`block col-span-12 md:col-span-4 h-16 md:h-full w-full relative rounded md:rounded-none overflow-hidden transform  ${
                                inView
                                    ? "opacity-100 translate-y-0 visible"
                                    : "opacity-0 translate-y-20 invisible"
                            } transition-all duration-700`}
                            key={i}
                            to="/about"
                            style={{ transitionDelay: `${i * 250}ms` }}
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
