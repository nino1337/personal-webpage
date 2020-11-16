import propTypes from 'prop-types';
import React from 'react';
import { Container } from 'reactstrap';

import CockpitComponents from '../../cockpitComponents/CockpitComponents';
import * as S from './Section.styles';

const Section = ({ variant, componentChildren, isFullWidth, id }) => (
  <S.Section id={id} variant={variant}>
    <Container fluid={isFullWidth}>
      <CockpitComponents components={componentChildren} />
    </Container>
  </S.Section>
);

Section.propTypes = {
  id: propTypes.string,
  variant: propTypes.oneOf(['white', 'lightGrey']),
  componentChildren: propTypes.array,
  isFullWidth: propTypes.bool,
};

export default Section;
