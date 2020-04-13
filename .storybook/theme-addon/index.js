import React, { useState, useEffect } from 'react';
import addons, { makeDecorator } from '@storybook/addons';
import { useChannel } from '@storybook/api';
import { ThemeProvider } from '@src';
import GlobalStyle from '../global-style';

export default makeDecorator({
  name: 'withMyAddon',
  parameterName: 'myParameter',

  wrapper: (getStory, context, { parameters }) => {
    const [theme, setTheme] = useState('clean');
    const channel = addons.getChannel();

    channel.on('change/setTheme', setTheme);

    useEffect(() => {
      const themeName = localStorage.getItem('design-box-theme');
      setTheme(themeName);
    }, []);

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {getStory(context)}
        {theme}
      </ThemeProvider>
    );
  },
});
