import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import HeaderImage from "../components/general/headerImage"

const CategoryPage = ({ data: { categoriesJson: categoryData } }) => {
    return (
        <Layout>
            <SEO title={categoryData.name} />
            <HeaderImage
                fluidImage={categoryData.headerImage.childImageSharp.fluid}
            />
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
        }
    }
`

export default CategoryPage
