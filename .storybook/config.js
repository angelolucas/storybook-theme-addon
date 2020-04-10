import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import Wrapper from './wrapper';

addDecorator(Wrapper);

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module);
