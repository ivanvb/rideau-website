import React from "react"
import MainImage from "../components/products/mainImage"
import Description from "../components/products/description"
import Layout from "../components/layout"
import ProductCategories from "../components/products/productCategories"

const Products = () => {
    return (
        <Layout>
            <MainImage />
            <Description />
            <ProductCategories />
        </Layout>
    )
}

export default Products
