import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const CategoryPage = ({ data }) => {
    return <Layout>{data.categoriesJson.name}</Layout>
}

export const query = graphql`
    query($name: String!) {
        categoriesJson(name: { eq: $name }) {
            name
        }
    }
`

export default CategoryPage
