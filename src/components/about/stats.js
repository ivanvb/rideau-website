import React from "react"
import AboutFact from "../general/aboutFact"

const Stats = () => {
    return (
        <section className="std-section-m-bottom">
            <h2 className="std-padding-x section-title mb-2">
                About Our Clients
            </h2>
            <div className="std-padding-x bg-gray-200 py-20 grid grid-cols-12 gap-y-20 lg:gap-20">
                <AboutFact
                    className="col-span-12 lg:col-span-4"
                    topText="Over"
                    number={74000}
                    bottomText="Satisfied clients in the last year"
                />
                <AboutFact
                    className="col-span-12 lg:col-span-4"
                    topText="More than"
                    number={25}
                    bottomText="Years delivering premium service"
                />
                <AboutFact
                    className="col-span-12 lg:col-span-4"
                    topText="Operations in"
                    number={33}
                    bottomText="In every corner of the world"
                />
            </div>
        </section>
    )
}

export default Stats
