import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Person = styled(motion.div)``;

export const PersonImage = styled.div`
  border-radius: 50%;
  overflow: hidden;
  max-width: 260px;
  margin-bottom: 1.6rem;
`;

export const PersonSocialMedia = styled.ul`
  display: flex;
`;

export const PersonSocialMediaItem = styled.li`
  display: flex;
  margin-right: 1.6rem;
  width: 35px;
`;

export const PersonSocialMediaLink = styled.a`
  display: flex;
`;

export const PersonText = styled.p``;
