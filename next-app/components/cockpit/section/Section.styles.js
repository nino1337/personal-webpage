import { css } from '@emotion/core';
import styled from '@emotion/styled';

import mq from '../../../styles/mq';

export const Section = styled.section`
  padding: 6rem 0;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;

  ${mq.md} {
    padding: 12rem 0;
    min-height: ${({ minHeight }) => `${minHeight}vh` || '100vh'};
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

    .container {
    transition: visibility 0.1s;
  }
`;
