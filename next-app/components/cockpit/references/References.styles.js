import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import mq from '../../../styles/mq';

export const ReferencesContainer = styled(motion.ul)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Reference = styled(motion.li)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 3px;
  max-width: 350px;
  margin-bottom: 6rem;
  width: 100%;
  position: relative;

  ${mq.md} {
    margin-right: 2rem;
  }
`;

export const TeaserContent = styled.div`
  padding: 1.6rem;
`;

export const TeaserImage = styled.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ShowMoreButton = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

export const TeaserText = styled.p``;

export const TeaserHeadline = styled.h3``;

export const CtaContainer = styled.div`
  display: flex;

  a {
    margin-right: 1.6rem;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;
