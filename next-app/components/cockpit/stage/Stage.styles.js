import styled from '@emotion/styled';

export const Stage = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: center;
  height: 100vh;
  padding: 2.4rem;
  position: relative;
  width: 100vw;
`;

export const StageContent = styled.div``;

export const HeadingName = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;
