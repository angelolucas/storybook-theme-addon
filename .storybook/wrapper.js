import React from 'react';
import GlobalStyle from './global-style';
import { ThemeProvider } from '@src';

const Wrapper = storyFn => (
  <ThemeProvider theme="clean">
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
);

export default Wrapper;
