module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://45.40.194.63:2500/", //对应自己的接口
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
