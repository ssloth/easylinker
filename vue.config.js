module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://112.74.44.130:2500/", //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
