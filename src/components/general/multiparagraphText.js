import React from "react"

const MultiparagraphText = ({ text, className = "" }) => {
    function isNotLastParagraph(i, paragraphs) {
        return i !== paragraphs.length - 1
    }
    const paragraphs = text.split("\n")
    return (
        <>
            {paragraphs.map((p, i) => (
                <React.Fragment key={i}>
                    <p className={`${className} text-gray-700`}>{p}</p>
                    {isNotLastParagraph(i, paragraphs) && <br></br>}
                </React.Fragment>
            ))}
        </>
    )
}

export default MultiparagraphText
