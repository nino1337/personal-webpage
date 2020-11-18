import propTypes from 'prop-types';
import React from 'react';
import { Container } from 'reactstrap';

import CockpitComponents from '../../cockpitComponents/CockpitComponents';
import * as S from './Section.styles';
import SectionHeadline from './sectionHeadline/SectionHeadline';

const Section = ({ variant, componentChildren, isFullWidth, id, headline }) => (
  <S.Section id={id} variant={variant}>
    <Container fluid={isFullWidth}>
      {headline && <SectionHeadline text={headline} />}
      <CockpitComponents components={componentChildren} />
    </Container>
  </S.Section>
);

Section.propTypes = {
  id: propTypes.string,
  variant: propTypes.oneOf(['white', 'lightGrey']),
  componentChildren: propTypes.array,
  isFullWidth: propTypes.bool,
  headline: propTypes.string,
};

export default Section;
