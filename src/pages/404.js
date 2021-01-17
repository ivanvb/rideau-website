import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <section className="std-padding-x">
            <h1 className="text-primary-900 font-bold tracking-wider text-6xl text-center mt-16">
                Oops!
            </h1>
            <p className="text-gray-700 mt-0 md:mt-4 text-center text-base md:text-xl mb-32">
                We were not able to find what you are looking for
            </p>
        </section>
    </Layout>
)

export default NotFoundPage
