import propTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'reactstrap';

import Image from '../image/Image';
import * as S from './Principles.styles';

const Principles = ({ items }) => {
  return (
    <S.Principles>
      <Row>
        {items.map(({ value }) => (
          <Col xs="12" md="3" key={value.title}>
            <S.PrincipleContainer>
              <Image image={value.icon} />
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </S.PrincipleContainer>
          </Col>
        ))}
      </Row>
    </S.Principles>
  );
};

Principles.propTypes = {
  items: propTypes.array,
};

export default Principles;
