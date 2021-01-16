import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const subcategoryPage = ({
    data,
    pageContext: { subcategory: subcategoryName },
}) => {
    const { categoriesJson: categoryData } = data
    const subcategory = categoryData.subcategories.find(
        item => item.name === subcategoryName
    )

    return (
        <Layout>
            <SEO title={subcategory.name} />
            <p>{subcategory.name}</p>
        </Layout>
    )
}

export const query = graphql`
    query($subcategory: String!) {
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
    }
`

export default subcategoryPage
