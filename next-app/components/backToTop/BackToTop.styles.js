import styled from '@emotion/styled';

export const BackToTop = styled.a`
  border: 1px solid '#00000026';
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 10px #00000026;
  padding: 0.8rem 0.8rem 0.4rem 0.8rem;
  position: fixed;
  bottom: 3.6rem;
  right: 3.6rem;
  color: ${({ theme }) => theme.colors.grey};
`;
