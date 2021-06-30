const fs = require('fs')

module.exports = {  
    publicPath: '/',
    css: {
      loaderOptions: {
        sass: {
            additionalData: `@import "@/styles/_variables.scss";`
        }
      }
    },
  };
