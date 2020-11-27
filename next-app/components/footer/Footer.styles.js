import styled from '@emotion/styled';

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.text};
  text-align: center;
  font-size: 2rem;
  padding: 5rem 1.6rem;
  color: ${({ theme }) => theme.colors.white};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
