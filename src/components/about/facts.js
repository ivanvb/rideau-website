import React from "react"
import AboutFact from "../general/aboutFact"
import { useStaticQuery, graphql } from "gatsby"

const AboutFacts = () => {
    const {
        aboutJson: { facts },
    } = useStaticQuery(graphql`
        query {
            aboutJson {
                facts {
                    title
                    description
                    data {
                        number
                        text
                    }
                }
            }
        }
    `)
    return (
        <section className="std-padding-x bg-gray-200 text-center py-8 mb-8">
            <h2 className="font-bold text-3xl mb-3 font text-primary-900">
                {facts.title}
            </h2>
            <p className="text-lg px-6 md:px-16 text-gray-700 mb-6">
                {facts.description}
            </p>
            <div className="px-4 grid grid-cols-4 gap-4">
                {facts.data.map((fact, i) => (
                    <AboutFact
                        key={i}
                        text={fact.text}
                        number={fact.number}
                        className="col-span-4 md:col-span-2 lg:col-span-1"
                    />
                ))}
            </div>
        </section>
    )
}

export default AboutFacts
