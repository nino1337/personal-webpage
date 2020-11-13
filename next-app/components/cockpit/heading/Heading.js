import propTypes from 'prop-types';
import React from 'react';

import * as S from './Heading.styles';

const Headline = ({ tag, children }) => <S.Headline as={tag}>{children}</S.Headline>;

Headline.propTypes = {
  tag: propTypes.string,
  children: propTypes.any,
};

export default Headline;
