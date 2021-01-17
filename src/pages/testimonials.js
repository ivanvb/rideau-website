import React from "react"
import Layout from "../components/layout"
import TestimonialsList from "../components/testimonials/testimonialsList"
import SEO from "../components/seo"

const Testimonials = () => {
    return (
        <Layout>
            <SEO
                title="Testimonials"
                description="Rideau's customers have always been our most important priority. Check what they are saying and how our business has improved their home decor experience"
            />
            <section className="std-padding-x mb-16">
                <h1 className="section-title mb-4 mt-3">Success Stories</h1>
                <TestimonialsList />
            </section>
        </Layout>
    )
}

export default Testimonials
