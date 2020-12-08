import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const SectionHeadline = styled(motion.div)`
  text-align: center;
  margin-bottom: 6.4rem;
  position: relative;

  h2 {
    position: relative;
    display: inline;

    &::after {
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.borderRadius};
      content: '';
      left: 0;
      bottom: -8px;
      position: absolute;
      width: 70px;
      height: 5px;
    }
  }
`;
