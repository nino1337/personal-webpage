const lightGrey = '#f7f7f7';
const shadows = '#191813';
const white = '#ffffff';
const midtones = '#963eaa';
const highlights = '#d8a6e7';

const theme = {
  colors: {
    white,
    lightGrey,
    grey: '#333333',
    error: '#e85555',
    text: shadows,
    primary: midtones,
    secondary: highlights,
    sections: {
      white: {
        text: shadows,
        background: white,
      },
      lightGrey: {
        text: shadows,
        background: lightGrey,
      },
      dark: {
        text: white,
        background: shadows,
      },
    },
    boxShadow: '0px 3px 6px 0px rgba(25, 24, 19, 0.16)',
  },
  fonts: {
    primary: 'Helvetica Neue Medium',
    primaryLight: 'Helvetica Neue Light',
  },
  borderRadius: '3px',
};

export default theme;
