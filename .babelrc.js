module.exports = {
  presets: [
    ['@babel/preset-env', { modules: 'commonjs' }],
    '@babel/preset-react',
  ],
  plugins: [
    ['babel-plugin-styled-components'],
    ['babel-plugin-optimize-clsx'],
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: false,
        regenerator: true,
      },
    ],
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          '@theme-addon': './.storybook/theme-addon',
        },
      },
    ],
  ],
};
