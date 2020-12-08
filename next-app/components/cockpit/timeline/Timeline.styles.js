import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import mq from '../../../styles/mq';

export const Timeline = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
`;

export const TimelineLine = styled.span`
  animation: timeline 1s ease-out 0.4s;
  animation-fill-mode: forwards;
  background-color: ${({ theme }) => theme.colors.primary};
  pointer-events: none;
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 0;
  transform: translateX(-50%);
  width: 3px;
  z-index: -1;

  @keyframes timeline {
    from {
      max-height: 0;
      height: 100%;
    }
    to {
      max-height: 1000px;
      height: 100%;
    }
  }
`;

export const TimelineItem = styled(motion.li)`
  border-radius: 3px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  margin-bottom: 2.6rem;
  padding: 1.6rem 8rem 1.6rem 1.6rem;
  position: relative;

  &:last-of-type {
    margin-bottom: 0;
  }

  ${mq.md} {
    margin-bottom: 6rem;
  }
`;

export const TimelineJobtitle = styled.h3`
  margin-bottom: 3rem;
  hyphens: auto;
`;

export const TimelineCompany = styled.p`
  margin: 0;
`;

export const TimelineMeta = styled.p`
  margin: 0 0 1.6rem 0;
`;

export const TimelineImage = styled.div`
  width: 60px;
  position: absolute;
  right: 1.6rem;
  top: 1.6rem;

  ${({ grayscale }) =>
    grayscale &&
    css`
      img {
        filter: grayscale();
      }
    `}
`;
