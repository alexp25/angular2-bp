var proxy = require('http-proxy-middleware');


/**
 * Configure proxy middleware
 */
var apiProxy = proxy('/api/*', {
    target: 'http://localhost:8090',
    changeOrigin: true,
    logLevel: 'debug'
  })

module.exports = {
    server: {
        // middleware: {
        //     1: proxy('/api/*', {
        //         target: 'http://localhost:8090',
        //         changeOrigin: true   // for vhosted sites, changes host header to match to target's host
        //     }),
        //     2: require('connect-history-api-fallback')({ index: '/index.html', verbose: true })
        // },
        middleware: [apiProxy],
        baseDir: "src",
        port: 3000,
        routes: {
            "/node_modules": "node_modules"
        }

    }
};