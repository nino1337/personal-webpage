import { css } from '@emotion/core';
import styled from '@emotion/styled';

import mq from '../../../styles/mq';

export const Section = styled.section`
  padding: 6rem 0;
  width: 100%;
  overflow-x: hidden;

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

  ${({ variant, theme }) =>
    variant === 'lightGrey' &&
    css`
      background-color: ${theme.colors.sections.lightGrey.background};
      color: ${theme.colors.sections.lightGrey.text};
    `}

  ${({ variant, theme }) =>
    variant === 'dark' &&
    css`
      background-color: ${theme.colors.sections.dark.background};
      color: ${theme.colors.sections.dark.text};
    `}
`;
