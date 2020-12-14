import { useAnimation } from 'framer-motion';
import propTypes from 'prop-types';
import React from 'react';

import Image from '../image/Image';
import * as S from './Timeline.styles';

const Timeline = ({ item, inView }) => {
  const animationControls = useAnimation();
  const animationControlsTimeline = useAnimation();

  if (inView) {
    animationControls.start({ opacity: 1, x: 0 });
    animationControlsTimeline.start({ height: 1000 });
  }

  return (
    <S.Timeline>
      {item.map(({ value }, index) => (
        <S.TimelineItem
          key={value.fromTo}
          animate={animationControls}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.4, delay: index * 0.15, ease: 'easeOut' }}
        >
          <S.TimelineMeta>
            {value.fromTo} / {value.type}
          </S.TimelineMeta>

          <S.TimelineJobtitle>{value.jobTitle}</S.TimelineJobtitle>

          <S.TimelineCompany>{value.company}</S.TimelineCompany>
          <S.TimelineImage grayscale={index !== 0}>
            <Image image={value.icon} />
          </S.TimelineImage>
        </S.TimelineItem>
      ))}
      <S.TimelineLine
        animate={animationControlsTimeline}
        initial={{ height: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
      />
    </S.Timeline>
  );
};

Timeline.propTypes = {
  item: propTypes.array,
  inView: propTypes.bool,
};

export default Timeline;
