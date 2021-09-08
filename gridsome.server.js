// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.createPages(async ({ graphql, createPage }) => {
    /* const { data } = await graphql(`
      {
        allStrapiPortafolio {
          edges {
            node {
              descripcion
              categorias {
                id
                titulo
                icono
                descripcion
              }
            }
          }
        }
      }
    `) */

    // Create pages.
    /* const categorias = data.allStrapiPortafolio.edges[0].node.categorias */
    /* const categories = data.strapi.categories */

    /* categorias.forEach(categoria => {
      createPage({
        path: `/portafolio/categoria/${categoria.titulo}`,
        component: './src/templates/Categoria.vue',
        context: {
          id: categoria.id,
        },
      })
    }) */

    /* categories.forEach((category) => {
      createPage({
        path: `/category/${category.slug}`,
        component: "./src/templates/Category.vue",
        context: {
          slug: category.slug,
        },
      });
    }); */
  })
}
