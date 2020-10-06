import React from "react"
import AboutFact from "../general/aboutFact"

const AboutFacts = () => {
    return (
        <section className="std-padding-x bg-gray-200 text-center py-8">
            <h2 className="font-bold text-3xl mb-3 font text-primary-900">
                We grow in all directions
            </h2>
            <p className="text-lg px-6 md:px-16 text-gray-700 mb-6">
                Rideau is always looking to expand to new clients and associates
                while providing a premium experience like no other blinds
                company out there.
            </p>
            <div className="px-4 grid grid-cols-4 gap-4">
                <AboutFact
                    number="33"
                    text="different nationailities have worked with us"
                    className="col-span-4 md:col-span-2 lg:col-span-1"
                />
                <AboutFact
                    number="+119K"
                    text="clients all over the world"
                    className="col-span-4 md:col-span-2 lg:col-span-1"
                />
                <AboutFact
                    number="17"
                    text="Forbes 500 companies have chosen Rideau over other
                        alternatives"
                    className="col-span-4 md:col-span-2 lg:col-span-1"
                />
                <AboutFact
                    number="+100"
                    text="different blinds that can be adjusted to your specific
                        requirements"
                    className="col-span-4 md:col-span-2 lg:col-span-1"
                />
            </div>
        </section>
    )
}

export default AboutFacts
