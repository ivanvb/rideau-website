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

exports.createPages = async function ({ actions, graphql }) {
    await createCategoriesPages(actions, graphql)
    await createSubcategoriesPages(actions, graphql)
}
