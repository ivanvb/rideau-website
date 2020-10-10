const path = require("path")

exports.createPages = async function ({ actions, graphql }) {
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
