import React from 'react';

import * as S from './Footer.styles';

const Footer = () => {
  return (
    <S.Footer>
      <span>Nino Dornemann</span> ©{new Date().getFullYear()}
    </S.Footer>
  );
};

export default Footer;
