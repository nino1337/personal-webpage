import styled from '@emotion/styled';

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 800px;
  width: 95%;
  position: relative;
`;
