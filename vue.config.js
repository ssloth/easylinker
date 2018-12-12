module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://118.178.59.56:2500/", //对应自己的接口
        // target: "http://192.168.1.106:2500/", //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
