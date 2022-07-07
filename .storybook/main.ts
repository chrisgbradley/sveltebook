const { mergeConfig } = require('vite');

const { svelte } = require('@sveltejs/vite-plugin-svelte');
const sveltePreprocess = require('svelte-preprocess');
const { typescript: svelteTS } = require('svelte-preprocess');

const path = require('path');

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.svelte",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)",
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  svelteOptions: {
    preprocess: sveltePreprocess({ typescript: true }),
  },
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-controls',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  async viteFinal(config, { configType }) {
    const svelteIndex = config.plugins.findIndex(
      ({ name }) => name === 'vite-plugin-svelte'
    );
    config.plugins[svelteIndex] = svelte({
      preprocess: [svelteTS()],
    });

    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      resolve: {
        alias: { },
      },
    });
  }
};