const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    cssModules: true,
    env: {
        site: {
            name: 'Helen ♥️ 27',
            description: 'Helen turns 27. Oh my deer, she is so old...'
        },
        auth: {
            password: 'baubau'
        }
    }
})
