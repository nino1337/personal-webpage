import { Modal } from '@material-ui/core';
import propTypes from 'prop-types';
import React from 'react';

import * as S from './Modal.styles';

const ModalComponent = ({ children, open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <S.ModalContent>{children}</S.ModalContent>
    </Modal>
  );
};

ModalComponent.propTypes = {
  open: propTypes.bool,
  onClose: propTypes.func,
  children: propTypes.any,
};

export default ModalComponent;
