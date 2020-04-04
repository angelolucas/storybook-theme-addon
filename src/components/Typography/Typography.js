import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Typography.style';

const Typography = ({ children, ...props }) => (
  <S.Typography {...props}>{children}</S.Typography>
);

Typography.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Typography;
