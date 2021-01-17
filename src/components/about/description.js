import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import MultiparagraphText from "../general/multiparagraphText"

const Description = () => {
    const {
        aboutJson: { description },
    } = useStaticQuery(graphql`
        query {
            aboutJson {
                description
            }
        }
    `)
    return (
        <section className="std-padding-x mb-12">
            <h2 className="section-title">About us</h2>
            <MultiparagraphText text={description} className="leading-8" />
        </section>
    )
}

export default Description
