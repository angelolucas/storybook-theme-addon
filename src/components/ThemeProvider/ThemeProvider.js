import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as BaseThemeProvider } from 'styled-components';
import { dark, clean } from '@src/themes';

const themeObject = themeName =>
  ({
    default: clean,
    dark: dark,
  }[themeName] || clean);

const ThemeProvider = ({ theme, children }) => (
  <BaseThemeProvider theme={themeObject(theme)}>{children}</BaseThemeProvider>
);

ThemeProvider.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ThemeProvider.defaultProps = {
  theme: 'clean',
};

export default ThemeProvider;
