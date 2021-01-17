import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contact/ContactForm"
import { SiMinutemailer } from "react-icons/si"

const Contact = () => {
    const [submitted, setSubmitted] = React.useState(false)
    console.log(submitted)
    return (
        <Layout>
            <section className="px-8  md:px-32 lg:px-64 xl:px-80">
                {submitted === false ? (
                    <>
                        <h1 className="section-title mt-3">Contact Us!</h1>
                        <p className="text-gray-700 mb-6">
                            Have any questions? Interested on getting Rideau for
                            your house or business? Leave us a message and we
                            will be reaching out to you soon!
                        </p>
                        <ContactForm setSubmitted={setSubmitted} />
                    </>
                ) : (
                    <div className="flex flex-col justify-center items-center mt-20 lg:mt-28">
                        <SiMinutemailer
                            size={128}
                            className="mb-6"
                            color="2B4164"
                        />
                        <p className="text-primary-900 text-center text-xl md:text-3xl font-bold tracking-wider mb-32">
                            We will be reaching out soon!
                        </p>
                    </div>
                )}
            </section>
        </Layout>
    )
}

export default Contact
