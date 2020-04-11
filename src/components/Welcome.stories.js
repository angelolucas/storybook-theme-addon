import React from 'react';
import ThemeAddon from '@theme-addon';

const Welcome = () => <h1>Welcome</h1>;

export default {
  title: 'Welcome',
  component: Welcome,
  decorators: [ThemeAddon],
};

export const example = () => <Welcome />;

example.story = {
  parameters: {
    myParameter: { data: 'awesome' },
  },
};
