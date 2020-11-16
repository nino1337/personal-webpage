import { css } from '@emotion/core';
import styled from '@emotion/styled';

import mq from '../../../styles/mq';

export const Section = styled.section`
  padding: 2.4rem 0;
  width: 100%;
  min-height: 100vh;

  ${mq.md} {
    padding: 3.2rem 0;
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
