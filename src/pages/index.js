import "../css/tailwind.build.css"
import React from "react"
import Hero from "../components/home/hero"
import Gallery from "../components/home/gallery"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Categories from "../components/home/categories"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Hero />
        <Gallery />
        <Categories />
    </Layout>
)

export default IndexPage
