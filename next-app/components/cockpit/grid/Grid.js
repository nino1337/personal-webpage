import 'bootstrap/dist/css/bootstrap-grid.min.css';

import propTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'reactstrap';

import CockpitComponents from '../../cockpitComponents/CockpitComponents';

const Grid = ({ columns = [], inView }) => {
  const columnLength = columns.length;

  return (
    <Row>
      {columns.length &&
        columns.map((column, index) => (
          <Col xs={12} md={12 / columnLength} key={`key-${index}`}>
            <CockpitComponents components={column.children} inView={inView} />
          </Col>
        ))}
    </Row>
  );
};

Grid.propTypes = {
  columns: propTypes.array,
  inView: propTypes.bool,
};

export default Grid;
