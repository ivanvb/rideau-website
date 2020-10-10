import React from "react"
import Layout from "../components/layout"
import MainImage from "../components/about/mainImage"
import Description from "../components/about/description"
import AboutFacts from "../components/about/facts"
import CompanyCards from "../components/about/companyCards"
import SEO from "../components/seo"

const AboutPage = () => {
    return (
        <Layout>
            <SEO
                title="About"
                description="Rideau has been the leading company selling blinds since its foundation in 1980. Learn more about its history and why clients choose them over other competitors."
            />
            <MainImage />
            <Description />
            <AboutFacts />
            <CompanyCards />
        </Layout>
    )
}

export default AboutPage
