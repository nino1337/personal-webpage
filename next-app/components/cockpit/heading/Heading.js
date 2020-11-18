import propTypes from 'prop-types';
import React from 'react';

import * as S from './Heading.styles';

const Headline = ({ tag, children, text }) => <S.Headline as={tag}>{children || text}</S.Headline>;

Headline.propTypes = {
  tag: propTypes.string,
  children: propTypes.any,
  text: propTypes.string,
};

export default Headline;
