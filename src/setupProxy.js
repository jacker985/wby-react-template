const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        proxy({
            target: 'http://nb.tst-weiboyi.com',
            changeOrigin: true,
        })
    );
};