import React from "react"
import Layout from "../components/layout"
import MainImage from "../components/about/mainImage"
import Description from "../components/about/description"
import AboutFacts from "../components/about/facts"

const AboutPage = () => {
    return (
        <Layout>
            <MainImage />
            <Description />
            <AboutFacts />
        </Layout>
    )
}

export default AboutPage
