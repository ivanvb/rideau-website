const path = require("path")

async function createCategoriesPages(actions, graphql) {
    const { data } = await graphql(`
        query {
            allCategoriesJson {
                edges {
                    node {
                        name
                    }
                }
            }
        }
    `)

    data.allCategoriesJson.edges.forEach(({ node }) => {
        actions.createPage({
            path: `/products/${node.name.toLowerCase()}/`,
            component: path.resolve("./src/templates/categoryPage.js"),
            context: {
                name: node.name,
            },
        })
    })
}

async function createSubcategoriesPages(actions, graphql) {
    const { data } = await graphql(`
        query {
            allCategoriesJson {
                edges {
                    node {
                        name
                        subcategories {
                            name
                        }
                    }
                }
            }
        }
    `)

    data.allCategoriesJson.edges.forEach(({ node }) => {
        node.subcategories.forEach(({ name: subcategoryName }) => {
            actions.createPage({
                path: `/products/${node.name.toLowerCase()}/${subcategoryName.toLowerCase()}`,
                component: path.resolve("./src/templates/subcategoryPage.js"),
                context: {
                    name: node.name,
                    subcategory: subcategoryName,
                    regex: new RegExp(
                        `${subcategoryName.replace(/ /, "-").toLowerCase()}/.*`
                    ).toString(),
                },
            })
        })
    })
}

async function createPostsPages(actions, graphql) {
    const { data } = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `)

    data.allMarkdownRemark.edges.forEach(({ node }) => {
        console.log(node.frontmatter.slug)
        actions.createPage({
            path: `/news/${node.frontmatter.slug}/`,
            component: path.resolve("./src/templates/blogPostPage.js"),
            context: {
                slug: node.frontmatter.slug,
            },
        })
    })
}

exports.createPages = async function ({ actions, graphql }) {
    await createCategoriesPages(actions, graphql)
    await createSubcategoriesPages(actions, graphql)
    await createPostsPages(actions, graphql)
}
