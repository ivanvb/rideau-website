import React from "react"
import MagicTabs from "../general/magicTabs"
import ProductTab from "../general/productTab"
import { graphql, useStaticQuery } from "gatsby"

const ProductCategories = () => {
    const categories = useStaticQuery(graphql`
        query {
            allCategoriesJson {
                edges {
                    node {
                        name
                        description
                        image {
                            childImageSharp {
                                fluid(maxWidth: 800, maxHeight: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        showcaseImages {
                            childImageSharp {
                                fluid(maxHeight: 300, maxWidth: 300) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const tabs = categories.allCategoriesJson.edges.map(
        ({ node: category }, i) => ({
            tabName: category.name,
            item: (
                <ProductTab
                    key={i}
                    title={category.name}
                    text={category.description}
                    image={category.image.childImageSharp.fluid}
                    showcaseImages={category.showcaseImages.map(
                        showcaseImage => showcaseImage.childImageSharp.fluid
                    )}
                />
            ),
        })
    )

    return (
        <section className="std-padding-x">
            <MagicTabs tabs={tabs} />
        </section>
    )
}

export default ProductCategories
