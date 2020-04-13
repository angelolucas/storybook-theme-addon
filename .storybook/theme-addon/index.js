import React, { useState, useEffect } from 'react';
import addons, { makeDecorator } from '@storybook/addons';
import { ThemeProvider } from '@src';
import GlobalStyle from '../global-style';

export default makeDecorator({
  name: 'withMyAddon',
  parameterName: 'myParameter',

  wrapper: (getStory, context, themes) => {
    const storedTheme = localStorage.getItem('design-box-theme');
    const [theme, setTheme] = useState(storedTheme);
    const channel = addons.getChannel();

    channel.on('design-box/theme', setTheme);

    useEffect(() => {
      return () => channel.off('design-box/theme', setTheme);
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
