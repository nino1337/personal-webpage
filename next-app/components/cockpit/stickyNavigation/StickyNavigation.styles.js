import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const NavContainer = styled.div`
  height: ${({ navHeight }) => `${navHeight}px`};
  position: relative;
`;

export const StickyNavigation = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  display: flex;
  height: ${({ navHeight }) => `${navHeight}px`};
  justify-content: center;
  position: relative;

  ${({ isFixed }) =>
    isFixed &&
    css`
      position: fixed;
      top: -100px;
      left: 0;
      right: 0;
      transform: translateY(100px);
      transition: transform 0.2s;
      z-index: 100;
    `}
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  margin-right: 20px;

  &::last-of-type: {
    margin-right: 0;
  }
`;

export const Link = styled.a`
  color: ${({ theme, isActive }) => (isActive ? theme.colors.secondary : theme.colors.text)};
  font-size: 2rem;
  overflow: hidden;
  padding: 16px;
  position: relative;

  &::after {
    content: '';
    background-color: ${({ theme }) => theme.colors.secondary};
    bottom: 6px;
    left: 0;
    height: 2px;
    position: absolute;
    transform: translateX(-100%);
    transition: transform 0.2s;
    width: calc(100% - 32px);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};

    &::after {
      transform: translateX(16px);
    }
  }
`;
