import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import MultiparagraphText from "../components/general/multiparagraphText"
import HeaderImageWithText from "../components/general/HeaderImageWithText"

const subcategoryPage = ({
    data,
    pageContext: { subcategory: subcategoryName },
}) => {
    const { categoriesJson: categoryData } = data
    const images = data.allFile.edges.map(({ node }) => node)
    const subcategory = categoryData.subcategories.find(
        item => item.name === subcategoryName
    )

    return (
        <Layout>
            <SEO title={subcategory.name} />
            <HeaderImageWithText
                text={subcategory.name}
                image={subcategory.picture.childImageSharp.fluid}
            />
            <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 std-padding-x">
                <div className="col-span-1">
                    <h2 className="section-title mb-2">The Favorite</h2>
                    <MultiparagraphText text={subcategory.description} />
                </div>
                <div className="col-span-1 h-64 lg:h-128 mb-8">
                    <Image
                        className="h-full"
                        fluid={subcategory.picture.childImageSharp.fluid}
                        imgStyle={{ height: "100%" }}
                    />
                </div>
            </section>
            <section className="mb-16 std-padding-x">
                <h2 className="section-title mb-2">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, i) => {
                        return (
                            <Link key={i} to={`${image.publicURL}`}>
                                <Image
                                    fluid={image.childImageSharp.fluid}
                                    className="h-64"
                                    style={{ height: "100%" }}
                                />
                            </Link>
                        )
                    })}
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query($subcategory: String!, $regex: String!) {
        categoriesJson(
            subcategories: { elemMatch: { name: { eq: $subcategory } } }
        ) {
            subcategories {
                name
                description
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
        allFile(filter: { relativePath: { regex: $regex } }) {
            edges {
                node {
                    publicURL
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

export default subcategoryPage
