import React from "react"
import Layout from "../components/layout"
import TestimonialsList from "../components/testimonials/testimonialsList"

const Testimonials = () => {
    return (
        <Layout>
            <section className="std-padding-x">
                <h1 className="section-title mb-4">Success Stories</h1>
                <TestimonialsList />
            </section>
        </Layout>
    )
}

export default Testimonials
