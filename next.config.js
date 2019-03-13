const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    cssModules: true,
    env: {
        site: {
            name: 'Test',
            description: 'Bla bla bla'
        },
        auth: {
            password: 'baubau'
        }
    }
})
