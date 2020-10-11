import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import MultiparagraphText from "../general/multiparagraphText"

const Description = () => {
    const {
        productsJson: { description },
    } = useStaticQuery(graphql`
        query {
            productsJson {
                description
            }
        }
    `)

    return (
        <section className="std-padding-x mb-12">
            <h2 className="section-title">Products</h2>
            <MultiparagraphText text={description} />
        </section>
    )
}

export default Description
