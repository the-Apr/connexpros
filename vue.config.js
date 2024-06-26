const { defineConfig } = require('@vue/cli-service');
const { DefinePlugin } = require('webpack'); 
const Dotenv = require('dotenv-webpack');

module.exports = {
  ...defineConfig({
    transpileDependencies: true,
  }),
  
  configureWebpack: {
    plugins: [
      new Dotenv(),
      
      new DefinePlugin({
        __VUE_PROD_DEVTOOLS__: false, 
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
      })
    ]
  }
}
