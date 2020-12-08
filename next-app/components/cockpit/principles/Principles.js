import propTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'reactstrap';

import Image from '../image/Image';
import * as S from './Principles.styles';

const Principles = ({ items }) => {
  return (
    <S.Principles>
      <Row>
        {items.map(({ value }, index) => (
          <Col xs="12" md="3" key={value.title}>
            <S.PrincipleContainer
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, top: 20 },
                visible: {
                  opacity: 1,
                  top: 0,
                  transition: {
                    delay: index * 0.15,
                    ease: 'easeOut',
                  },
                },
              }}
            >
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
