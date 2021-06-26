module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // method of SCSS to use variables globally
        /**
         * Warning!
         *
         * Do not import actual styles
         *
         * Only import variables, mixins, function because they won't appear in actual build
         * Importing style will include them in every components
         *
         */
        data: `
            @import 'node_modules/npm-ui-package-demo/src/assets/styles/variables.scss';
          `,
      },
    },
  },
};
