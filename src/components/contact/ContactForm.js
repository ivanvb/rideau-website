import React from "react"

const InputField = ({ name, title, type = "text", textarea }) => {
    return (
        <div className="block mb-4">
            <label
                className="font-bold text-primary-900 block mb-1"
                htmlFor={name}
            >
                {title}
            </label>
            {textarea ? (
                <textarea
                    required
                    id={name}
                    name={name}
                    rows={8}
                    className="border border-b-2 rounded py-2 px-4 w-full border-primary-500 text-gray-700"
                />
            ) : (
                <input
                    required
                    type={type}
                    id={name}
                    name={name}
                    className="border border-b-2 rounded px-4 py-2 border-primary-500 w-full text-gray-700"
                />
            )}
        </div>
    )
}
const ContactForm = ({ setSubmitted }) => {
    function handleSubmit(e) {
        e.preventDefault()
        setSubmitted(true)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
                <InputField title={"Your Name"} name="name" />
                <InputField title={"Your Email"} name="email" type="email" />
            </div>
            <InputField title={"Subject"} name="subject" />
            <InputField title="Message" name="message" textarea />
            <button
                className="rounded bg-primary-900 text-white px-10 py-2 tracking-wider mt-2 mb-6"
                type="submit"
            >
                Submit
            </button>
        </form>
    )
}

export default ContactForm
