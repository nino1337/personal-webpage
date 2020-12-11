import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const Slider = styled.div`
  .slick-arrow {
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    color: ${({ theme }) => theme.colors.white};
    top: auto;
    width: 5rem;
    height: 5rem;
    z-index: 10000;
    transform: none;
  }

  .slick-prev {
    left: 0;
  }

  .slick-next {
    right: 0;
  }

  img {
    max-height: 100%;
  }

  ${({ slideWidth }) =>
    slideWidth &&
    css`
      .slick-slide {
        height: ${slideWidth}px;

        > div {
          height: 100%;
        }
      }
    `}
`;
