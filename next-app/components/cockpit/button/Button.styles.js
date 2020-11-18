import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const Button = styled.a`
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: block;
  max-width: 100%;
  padding: 1rem 0.8rem;
  text-align: center;
  transition: color 0.2s, background-color 0.2s;
  text-decoration: none;
  width: fit-content;

  ${({ variant, theme }) =>
    variant === 'stage' &&
    css`
      background-color: transparent;
      border: 1px solid ${theme.colors.white};
      color: ${theme.colors.white};
      font-size: 2rem;
      margin: 0 auto;
      overflow: hidden;
      transition: border 0.5s;
      position: relative;
      z-index: 1;

      &::after {
        content: '';
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        width: 150%;
        transform: translateX(-110%) skew(45deg);
        transition: transform 0.5s;
        background-color: ${theme.colors.primary};
        z-index: -1;
      }

      &:hover {
        border-color: ${theme.colors.primary};

        &::after {
          transform: translateX(-20%) skew(45deg);
        }
      }
    `}

  ${({ variant, theme }) =>
    variant === 'primary' &&
    css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    `}

  ${({ variant, theme }) =>
    variant === 'secondary' &&
    css`
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.primary};
    `}

    ${({ variant, theme }) =>
    variant === 'ghost' &&
    css`
      background-color: ${theme.colors.white};
      padding: 0;
      min-width: auto;
      color: ${theme.colors.secondary};
      text-decoration: underline;
    `}

  &[disabled] {
    color: ${({ theme }) => theme.colors.white} !important;
    background-color: ${({ theme }) => theme.colors.grey} !important;
  }
`;
