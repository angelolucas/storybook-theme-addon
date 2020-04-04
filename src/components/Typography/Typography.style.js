import styled from 'styled-components';

export const Typography = styled.p(
  ({ theme }) => `
      text-align: center;
      font-family: ${theme.fontFamily};
      font-size: 40px;
      color: ${theme.color.primary};
      margin-top: 300px auto;
    `
);
