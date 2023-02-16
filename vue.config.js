module.exports = {
    devServer: {
        open: true,
        // host: 'localhost',   
        proxy: {
            /**
             * 综合来说，这段代码的作用是将 webpack-dev-server 运行在本地主机，
             * 当请求的路径以 /api 开头时，将其代理到远程服务器地址 http://1.116.64.64:5004/api2 上，
             * 同时去除路径中的 /api 前缀，以便远程服务器能够正确处理请求。
             */
            '/api': {
                target: 'http://1.116.64.64:5004/api2',
                changeOrigin: true,  // 允许跨域
                // logLevel: 'debug',   // 允许在控制台中打印代理后的请求地址，在浏览器是看不到的
                pathRewrite: {
                    '^/api': ''     // 这里正则不能写错了，写成 '^api/' 会导致不匹配代理失败
                }
            }
        }
    }
}