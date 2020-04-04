import React from 'react';
import { Typography } from '@src';
import ThemeAddon from '@theme-addon';

export default {
  title: 'Typography',
  component: Typography,
  decorators: [ThemeAddon],
};

export const example = () => <Typography>Hello World</Typography>;

example.story = {
  parameters: {
    myParameter: { data: 'awesome' },
  },
};
