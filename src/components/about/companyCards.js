import React from "react"
import AboutCard from "../general/aboutCard"
import { useStaticQuery, graphql } from "gatsby"

const CompanyCard = () => {
    const cardsInfo = useStaticQuery(graphql`
        {
            aboutJson {
                whyTheyPickUs {
                    title
                    text
                }
            }
        }
    `)

    return (
        <section className="std-padding-x mb-12">
            <h2 className="section-title mb-3">Why They Pick Us</h2>
            <div className="grid grid-cols-2 gap-6">
                {cardsInfo.aboutJson.whyTheyPickUs.map((card, i) => (
                    <AboutCard
                        className="col-span-2 lg:col-span-1"
                        {...card}
                        key={i}
                    />
                ))}
            </div>
        </section>
    )
}

export default CompanyCard
