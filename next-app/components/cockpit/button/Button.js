import propTypes from 'prop-types';
import React from 'react';

import * as S from './Button.styles';

const Button = ({ text, variant = 'primary', disabled = false, url, rel, target, onClick }) => {
  return (
    <S.Button
      variant={variant}
      disabled={disabled}
      href={url}
      rel={rel}
      target={target}
      onClick={onClick}
    >
      {text}
    </S.Button>
  );
};

Button.propTypes = {
  text: propTypes.string,
  variant: propTypes.string,
  disabled: propTypes.bool,
  url: propTypes.string,
  rel: propTypes.string,
  target: propTypes.string,
  onClick: propTypes.func,
};

export default Button;
