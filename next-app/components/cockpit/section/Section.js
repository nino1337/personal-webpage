import { useAnimation } from 'framer-motion';
import propTypes from 'prop-types';
import React from 'react';
import handleViewport from 'react-in-viewport';
import { Container } from 'reactstrap';

import CockpitComponents from '../../cockpitComponents/CockpitComponents';
import * as S from './Section.styles';
import SectionHeadline from './sectionHeadline/SectionHeadline';

const Section = ({
  variant,
  componentChildren,
  isFullWidth,
  id,
  headline,
  inViewport,
  forwardedRef,
  enterCount,
}) => {
  const [showComponents, setShowComponents] = React.useState(false);
  const animationControls = useAnimation();

  if (inViewport) {
    animationControls.start('visible');
    setTimeout(() => setShowComponents(true), 200);
  }

  return (
    <S.Section id={id} variant={variant} ref={forwardedRef}>
      <div style={{ opacity: enterCount > 0 ? 1 : 0 }}>
        <Container fluid={isFullWidth}>
          <SectionHeadline
            initial="hidden"
            animate={animationControls}
            variants={{
              hidden: { opacity: 0, right: 100 },
              visible: {
                opacity: 1,
                right: 0,
              },
            }}
            text={headline}
          />
          <CockpitComponents
            components={componentChildren}
            style={{ opacity: showComponents ? 1 : 0 }}
            inView={showComponents}
            asslord="asslord"
          />
        </Container>
      </div>
    </S.Section>
  );
};

Section.propTypes = {
  id: propTypes.string,
  variant: propTypes.oneOf(['white', 'lightGrey', 'dark']),
  componentChildren: propTypes.array,
  isFullWidth: propTypes.bool,
  headline: propTypes.string,
  inViewport: propTypes.bool,
  forwardedRef: propTypes.any,
  enterCount: propTypes.number,
  minHeight: propTypes.string,
};

export default handleViewport(Section, {
  threshold: 0.8,
});
