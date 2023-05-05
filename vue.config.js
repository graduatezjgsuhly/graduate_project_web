module.exports = {
  devServer: {
    proxy:{
            '/api':{
                target: 'http://10.50.32.42:4000',
                changeOrigin:true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
  }
}
