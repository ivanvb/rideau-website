import React from "react"
import { Link } from "gatsby"
import { getHumanDate } from "../../util/index"
import Image from "gatsby-image"

const BlogPost = ({ title, date, excerpt, slug, last, image }) => {
    return (
        <React.Fragment>
            <Link to={`/news/${slug}`} className="flex flex-col md:flex-row">
                <Image
                    fluid={image.childImageSharp.fluid}
                    className="h-full w-full md:w-1/3 xl:w-1/5"
                />
                <div className="md:ml-6 w-full md:w-2/3 xl:w-1/2 mt-4 md:mt-0">
                    <h2 className="text-primary-900 font-bold text-xl">
                        {title}
                    </h2>
                    <p className="mb-3 lg:mb-6 text-sm text-primary-700">
                        {getHumanDate(new Date(date))}
                    </p>
                    <p className="text-gray-700 leading-7">{excerpt}</p>
                </div>
            </Link>
            {last ? "" : <hr className="my-3" />}
        </React.Fragment>
    )
}

export default BlogPost
