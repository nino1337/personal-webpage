import { useAnimation } from 'framer-motion';
import propTypes from 'prop-types';
import React, { useRef } from 'react';

import Slider from '../../slider/Slider';
import Image from '../image/Image';
import * as S from './Skills.styles';

const Skills = ({ mainSkills, moreSkills, inView }) => {
  const animationMainSkill = useAnimation();
  const animationSubHeading = useAnimation();
  const animationMoreSkills = useAnimation();
  const slider = useRef(null);

  if (inView) {
    animationMainSkill.start({ opacity: 1 });
    animationSubHeading.start({ opacity: 1, x: 0 });
    animationMoreSkills.start({ opacity: 1, y: 0 });
    slider.current.slickPlay();
  }

  return (
    <S.Skills>
      <S.MainSkillsContainer>
        {mainSkills.map(({ value }, index) => (
          <S.MainSkill
            key={value.title}
            animate={animationMainSkill}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
          >
            <S.MainSkillIcon>
              <Image image={value.icon} />
            </S.MainSkillIcon>

            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </S.MainSkill>
        ))}
      </S.MainSkillsContainer>

      <S.SkillsSubheading
        animate={animationSubHeading}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
      >
        ...und viele Weitere
      </S.SkillsSubheading>
      <S.MoreSkills
        animate={animationMoreSkills}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
      >
        <Slider
          items={moreSkills}
          settings={{
            slidesToShow: 8,
            slidesToScroll: 1,
            autoplay: false,
            pauseOnHover: true,
            arrows: false,
          }}
          slideWidth={80}
          hoverOnImage
          ref={slider}
        />
      </S.MoreSkills>
    </S.Skills>
  );
};

Skills.propTypes = {
  mainSkills: propTypes.array,
  moreSkills: propTypes.array,
  inView: propTypes.bool,
};

export default Skills;
