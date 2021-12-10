module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-designs",
    "storybook-dark-mode",
    "@storybook/addon-a11y",
  ],
  "core": {
    "builder": "webpack5"
  }
}
