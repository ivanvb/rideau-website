import React from "react"
import MainImage from "../components/products/mainImage"
import Description from "../components/products/description"
import Layout from "../components/layout"
import ProductCategories from "../components/products/productCategories"
import SEO from "../components/seo"

const Products = () => {
    return (
        <Layout>
            <SEO
                title="Products"
                description="Rideau offers over 100 different blinds variations. Check out the available categories and see which one suits best your case, there will always be a style of blinds that will suit your needs."
            />
            <MainImage />
            <Description />
            <ProductCategories />
        </Layout>
    )
}

export default Products
