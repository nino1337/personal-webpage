const lightGrey = '#ebebeb';
const shadows = '#191813';
const white = '#ffffff';
const midtones = '#963eaa';
const highlights = '#d8a6e7';

const theme = {
  colors: {
    white,
    lightGrey,
    error: '#e85555',
    text: shadows,
    primary: midtones,
    secondary: highlights,
    sections: {
      white: {
        text: shadows,
        background: white,
      },
      grey: {
        text: shadows,
        background: lightGrey,
      },
    },
  },
  fonts: {
    primary: 'Helvetica Neue Medium',
    primaryLight: 'Helvetica Neue Light',
  },
};

export default theme;
