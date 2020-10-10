import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"

const CategoryPage = ({ data }) => {
    return (
        <Layout>
            <SEO title={data.categoriesJson.name} />
            {data.categoriesJson.name}
        </Layout>
    )
}

export const query = graphql`
    query($name: String!) {
        categoriesJson(name: { eq: $name }) {
            name
        }
    }
`

export default CategoryPage
