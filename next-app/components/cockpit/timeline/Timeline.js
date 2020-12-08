import propTypes from 'prop-types';
import React from 'react';

import Image from '../image/Image';
import * as S from './Timeline.styles';

const Timeline = ({ item }) => {
  return (
    <S.Timeline>
      {item.map(({ value }, index) => (
        <S.TimelineItem
          key={value.fromTo}
          animate={{ opacity: 1, x: 0 }}
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
      <S.TimelineLine />
    </S.Timeline>
  );
};

Timeline.propTypes = {
  item: propTypes.array,
};

export default Timeline;
