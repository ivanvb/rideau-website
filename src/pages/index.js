import "../css/tailwind.build.css"
import React from "react"
import { Link } from "gatsby"
import Hero from "../components/home/hero"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
  </Layout>
)

export default IndexPage
