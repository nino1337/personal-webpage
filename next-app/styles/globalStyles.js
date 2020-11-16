import { css } from '@emotion/core';

import HelveticaNeueLight from './fonts/helvetica/HelveticaNeueLight.ttf';
import HelveticaNeueMedium from './fonts/helvetica/HelveticaNeueMedium.ttf';
import mq from './mq';

const dynamicStyle = (theme) => css`
  @font-face {
    font-family: ${theme.fonts.primary};
    src: url(${HelveticaNeueMedium});
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: ${theme.fonts.primaryLight};
    src: url(${HelveticaNeueLight});
    font-style: normal;
    font-display: swap;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  * {
    transition: color 0.2s, background-color 0.2s;
  }

  body {
    color: ${theme.colors.text};
    font-family: ${theme.fonts.primaryLight};
    font-size: 1.6rem;
    line-height: 1.6rem;
    margin: 0;
    overflow-x: hidden;
    height: 150vh;
  }

  img {
    display: block;
    height: auto;
    max-width: 100%;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
  }

  h1,
  h2,
  h3 {
    font-weight: normal;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: 3.2rem;
    line-height: 1.2;
    margin-bottom: 12rem;

    ${mq.lg} {
      font-size: 5.2rem;
    }
  }

  h2,
  h3 {
    font-family: ${theme.fonts.primary};
  }
`;

export default dynamicStyle;
