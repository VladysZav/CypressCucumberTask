const { defineConfig } = require('cypress');
const webpack = require('@cypress/webpack-preprocessor');
const {
    addCucumberPreprocessorPlugin
} = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
    e2e: {
      specPattern: "**/*.feature",
      viewportWidth: 1600,
      viewportHeight: 900,
      pageLoadTimeout: 90000,
      defaultCommandTimeout: 15000,
      chromeWebSecurity: false,
        setupNodeEvents: async function (on, config) {
            await addCucumberPreprocessorPlugin(on, config);
            on(
                'file:preprocessor',
                webpack({
                    webpackOptions: {
                        resolve: { extensions: ['.ts', '.js'] },
                        module: {
                            rules: [
                                {
                                    test: /\.feature$/,
                                    use: [
                                        {
                                            loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                                            options: config
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                })
            );
            return config;
        }
    }
});