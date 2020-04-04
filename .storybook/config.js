import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from '@src';
import GlobalStyle from './global-style';
import ThemeAddon from '@theme-addon';

// Apply global style to stories
const withGlobal = storyFn => (
  <ThemeProvider theme="clean">
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
);

addDecorator(withGlobal);

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module);
