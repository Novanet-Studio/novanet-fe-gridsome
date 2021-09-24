// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
      {
        allStrapiCategorias {
          edges {
            node {
              id
              slug
            }
          }
        }
        allStrapiProyectos {
          edges {
            node {
              id
              slug
              categorias {
                slug
              }
            }
          }
        }
        allStrapiArticulos {
          edges {
            node {
              id
              slug
              tag
            }
          }
        }
      }
    `)

    // Create pages for Categorias, Proyectos y Blog
    const categorias = data.allStrapiCategorias.edges
    const proyectos = data.allStrapiProyectos.edges
    const articulos = data.allStrapiArticulos.edges

    categorias.forEach(categoria => {
      createPage({
        path: `/portafolio/${categoria.node.slug}`,
        component: './src/templates/Categoria.vue',
        context: {
          id: categoria.node.id,
        },
      })
    })

    proyectos.forEach(proyecto => {
      createPage({
        path: `/portafolio/${proyecto.node.categorias.slug}/${
          proyecto.node.slug
        }`,
        component: './src/templates/Proyecto.vue',
        context: {
          id: proyecto.node.id,
        },
      })
    })

    articulos.forEach(articulo => {
      createPage({
        path: `/blog/${articulo.node.tag}/${articulo.node.slug}`,
        component: './src/templates/Articulo.vue',
        context: {
          id: articulo.node.id,
        },
      })
    })
  })
}
