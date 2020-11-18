import propTypes from 'prop-types';
import React from 'react';

import * as S from './SectionHeadline.styles';

const SectionHeadline = ({ text }) => (
  <S.SectionHeadline>
    <h2>{text}</h2>
  </S.SectionHeadline>
);

SectionHeadline.propTypes = {
  text: propTypes.string,
};

export default SectionHeadline;
