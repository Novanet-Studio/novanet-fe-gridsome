// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/assets/scss/_global.scss')],
    })
}

module.exports = {
  runtimeCompiler: true,    
  siteName: 'Novanet web app',
  siteUrl: process.env.DEPLOY_URL || 'https://novanet.studio',
  metadata: {
    siteName: 'Novanet web app',
    title: "Novanet",
    titleTemplate: "%s · Estudio de diseño",
    siteDescription: 'Estudio de diseño dedicado al diseño gráfico, al desarrollo web y al marketing online.',
    siteUrl: process.env.DEPLOY_URL || 'https://novanet.studio',
    author: "Novanet Studio",
    image: "https://novanet.studio/site/img/og-thumbnail.png",
    twitter: {
      site: '@novanetstudio',
      creator: '@flaex_'
    }
  },
  
  plugins: [
    'gridsome-plugin-seo',
    'gridsome-plugin-ogp',
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/privacy', '/legal']
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.NODE_ENV === 'production'
        ? process.env.API_URL
        : 'https://novanet-be.herokuapp.com/',
        queryLimit: 1000, // Defaults to 100
        contentTypes: [`articulos`, `proyectos`, `categorias`],
        singleTypes: [
          'blog',
          'contacto',
          'inicio',
          'nosotros',
          'portafolio',
          'servicios',
        ],
        loginData: {
          identifier: process.env.API_USER,
          password: process.env.API_USER_PASSWORD,
        },
      },
    },       
  ],
  chainWebpack(config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type =>
      addStyleResource(config.module.rule('scss').oneOf(type)),
    )
  },
}
