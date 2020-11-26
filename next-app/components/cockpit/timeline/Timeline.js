import propTypes from 'prop-types';
import React from 'react';

import Image from '../image/Image';
import * as S from './Timeline.styles';

const Timeline = ({ item }) => {
  return (
    <S.Timeline>
      {item.map(({ value }, index) => (
        <S.TimelineItem key={value.fromTo}>
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
    </S.Timeline>
  );
};

Timeline.propTypes = {
  item: propTypes.array,
};

export default Timeline;
