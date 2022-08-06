const { defineConfig } = require('cypress');

module.exports = defineConfig({
  component: {
    devServer: {
      bundler: 'vite',
      framework: 'react',
    },
  },
  screenshotOnRunFailure: false,
  video: false,
});
