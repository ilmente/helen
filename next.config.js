const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    distDir: 'build',
    cssModules: true,
    env: {
        site: {
            name: 'Test',
            description: 'Bla bla bla'
        },
        auth: {
            my: 'deer'
        }
    },
    exportPathMap: async () => {
        return {
            '/': { page: '/index' },
            '/baba': { page: '/baba' }
        }
    }
})
