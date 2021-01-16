import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
import { getHumanDate } from "../util/index"

const BlogPostPage = ({ data }) => {
    const {
        markdownRemark: { frontmatter: postData },
    } = data
    return (
        <Layout>
            <section className="std-padding-x mb-16">
                <h1 className="section-title mt-3 mb-4">{postData.title}</h1>
                <Image
                    fluid={postData.image.childImageSharp.fluid}
                    className="w-full h-128"
                    imgStyle={{
                        objectFit: `${postData.fitImg ? "cover" : "contain"}`,
                    }}
                />
                <p className="text-gray-700 mt-2 mb-6">
                    {getHumanDate(new Date(postData.date))}
                </p>
                <div
                    className="markdown-post lg:w-11/12"
                    dangerouslySetInnerHTML={{
                        __html: data.markdownRemark.html,
                    }}
                ></div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
                excerpt
                image {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                fitImage
            }
            html
        }
    }
`
export default BlogPostPage
