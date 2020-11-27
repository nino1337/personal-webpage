import { ArrowUpward } from '@material-ui/icons';
import React from 'react';

import * as S from './BackToTop.styles';

const BackToTop = () => {
  return (
    <S.BackToTop href="#">
      <ArrowUpward style={{ fontSize: 24 }} />
    </S.BackToTop>
  );
};

export default BackToTop;
