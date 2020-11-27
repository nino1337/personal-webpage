import styled from '@emotion/styled';

export const ContactForm = styled.form`
  .MuiFormControl-root {
    box-shadow: ${({ theme }) => theme.colors.boxShadow};
    margin-bottom: 1.6rem;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};

    input,
    label,
    textarea {
      font-family: ${({ theme }) => theme.fonts.primaryLight};
      padding-left: 0.8rem;
    }

    label {
      font-size: 1.6rem;

      &.Mui-focused {
        color: ${({ theme }) => theme.colors.primary};
        transform: translate(0, 6px) scale(0.75);
      }
    }

    input,
    textarea {
      font-size: 1.8rem;
      line-height: 1;
    }

    .MuiInput-underline {
      &::after {
        border-color: ${({ theme }) => theme.colors.primary};
        border-width: 4px;
      }
    }
  }
`;

export const ContactError = styled.p`
  color: #f92565;
`;

export const ContactSuccess = styled.p``;
