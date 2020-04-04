import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle(
  ({ theme }) => `
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap');

  body {
    background: ${theme.color.document};
    font-family: ${theme.fontFamily};
    margin: 0;
  }
`
);
