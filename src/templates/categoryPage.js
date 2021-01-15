import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import HeaderImage from "../components/general/headerImage"
import MultiparagraphText from "../components/general/multiparagraphText"
import Img from "gatsby-image"

const CategoryPage = ({ data }) => {
    const { categoriesJson: categoryData } = data
    return (
        <Layout>
            <SEO title={categoryData.name} />
            <HeaderImage
                fluidImage={categoryData.headerImage.childImageSharp.fluid}
            />
            <section className="std-padding-x mb-6">
                <MultiparagraphText text={categoryData.description} />
            </section>
            <section className="std-padding-x mb-6">
                <div className="grid grid-cols-12 gap-4">
                    {categoryData.subcategories.map((subcategory, i) => {
                        return (
                            <div className="col-span-6 md:col-span-4" key={i}>
                                <Link
                                    to={`/products/${categoryData.name.toLowerCase()}/${subcategory.name.toLowerCase()}`}
                                    className="overflow-hidden block relative"
                                >
                                    <Img
                                        fluid={
                                            subcategory.picture.childImageSharp
                                                .fluid
                                        }
                                        className="hover:scale-110 transition-transform transform duration-500 cursor-pointer"
                                    />
                                    <div
                                        className="absolute w-full h-8 lg:h-20 bottom-0 left-0 flex justify-start items-center pl-3 lg:pl-4"
                                        style={{
                                            backgroundColor: "rgba(0,0,0,0.35)",
                                            backdropFilter: "blur(5px)",
                                        }}
                                    >
                                        <h3
                                            className="text-base lg:text-2xl text-white font-bold tracking-wider"
                                            style={{
                                                textShadow:
                                                    "-1px 1px rgba(0, 0, 0, 0.25)",
                                            }}
                                        >
                                            {subcategory.name}
                                        </h3>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query($name: String!) {
        categoriesJson(name: { eq: $name }) {
            name
            headerImage {
                childImageSharp {
                    fluid(maxWidth: 1440, maxHeight: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            description
            subcategories {
                name
                slug
                picture {
                    childImageSharp {
                        fluid(maxWidth: 500, maxHeight: 400) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
        }
    }
`

export default CategoryPage
