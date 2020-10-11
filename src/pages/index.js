import React from "react"
import Hero from "../components/home/hero"
import Gallery from "../components/home/gallery"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Categories from "../components/home/categories"
import Review from "../components/home/review"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Hero />
        <Gallery />
        <Categories />
        <Review />
    </Layout>
)

export default IndexPage
