import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import BlogPost from "../components/news/BlogPost"

const News = () => {
    const { allMarkdownRemark: news } = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                sort: { fields: frontmatter___date, order: DESC }
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                            excerpt
                            slug
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 500) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <SEO
                title="News"
                description="Get updated with the latest Rideau News! The leader company in interior design for over 30 years"
            />
            <section className="std-padding-x mb-16">
                <h1 className="section-title mt-3 mb-4">Recent News</h1>
                {news.edges.map(({ node }, i) => {
                    const { frontmatter } = node
                    return (
                        <BlogPost
                            {...frontmatter}
                            key={i}
                            last={i === news.edges.length - 1}
                        />
                    )
                })}
            </section>
        </Layout>
    )
}

export default News
