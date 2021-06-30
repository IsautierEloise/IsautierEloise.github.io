const fs = require('fs')

module.exports = {  
    publicPath: process.env.NODE_ENV === 'production'
      ? '/form'
      : '/',
    css: {
      loaderOptions: {
        sass: {
            additionalData: `@import "@/styles/_variables.scss";`
        }
      }
    },
  };
