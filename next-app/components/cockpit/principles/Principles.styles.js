import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Principles = styled.ul`
  display: flex;
`;

export const PrincipleContainer = styled(motion.li)`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;

  img,
  h3 {
    margin-bottom: 2rem;
  }

  p {
    margin-top: 0;
  }
`;
