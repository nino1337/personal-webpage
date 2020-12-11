import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import mq from '../../../styles/mq';

export const Skills = styled.div``;

export const MainSkill = styled(motion.li)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;

  ${mq.md} {
    width: calc(33% - 16px);
  }
`;

export const SkillsSubheading = styled(motion.h3)`
  margin-bottom: 6rem;
`;

export const MainSkillsContainer = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 6rem;
`;

export const MainSkillIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
`;

export const MoreSkills = styled(motion.div)``;
