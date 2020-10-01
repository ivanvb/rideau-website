import "../css/tailwind.build.css"
import React from "react"
import Hero from "../components/home/hero"
import Gallery from "../components/home/gallery"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Hero />
        <Gallery />
    </Layout>
)

export default IndexPage
