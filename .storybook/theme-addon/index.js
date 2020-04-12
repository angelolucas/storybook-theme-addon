import React, { useState } from 'react';
import addons, { makeDecorator } from '@storybook/addons';
import { useAddonState } from '@storybook/api';
import { ThemeProvider } from '@src';
import GlobalStyle from '../global-style';

export default makeDecorator({
  name: 'withMyAddon',
  parameterName: 'myParameter',
  // This means don't run this decorator if the notes decorator is not set
  skipIfNoParametersOrOptions: true,
  wrapper: (getStory, context, { parameters }) => {
    const [theme, setTheme] = useState('clean');
    const channel = addons.getChannel();
    console.log('makeDecorator');
    channel.on('change/setTheme', setTheme);

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {getStory(context)}
        {theme}
      </ThemeProvider>
    );
  },
});
