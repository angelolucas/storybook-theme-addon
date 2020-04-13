import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import ThemeAddon from '@theme-addon';
import Wrapper from './wrapper';

addDecorator(Wrapper);

addDecorator(ThemeAddon);

addParameters({
  backgrounds: [
    { name: 'twitter', value: '#00aced', default: true },
    { name: 'facebook', value: '#3b5998' },
  ],
});

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module);
