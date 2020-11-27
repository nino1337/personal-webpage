import { css } from '@emotion/core';
import styled from '@emotion/styled';

import mq from '../../../styles/mq';

export const Section = styled.section`
  padding: 2.4rem 0;
  width: 100%;

  ${mq.md} {
    padding: 12rem 0;
  }

  ${({ variant, theme }) =>
    variant === 'white' &&
    css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.text};
    `}

  ${({ variant, theme }) =>
    variant === 'lightGrey' &&
    css`
      background-color: ${theme.colors.sections.lightGrey.background};
      color: ${theme.colors.sections.lightGrey.text};
    `}
`;
