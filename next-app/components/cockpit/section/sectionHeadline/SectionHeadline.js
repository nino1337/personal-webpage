import propTypes from 'prop-types';
import React from 'react';

import * as S from './SectionHeadline.styles';

const SectionHeadline = (props) => (
  <S.SectionHeadline {...props}>
    <h2>{props.text}</h2>
  </S.SectionHeadline>
);

SectionHeadline.propTypes = {
  text: propTypes.string,
};

export default SectionHeadline;
