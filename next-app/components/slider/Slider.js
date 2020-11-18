import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import propTypes from 'prop-types';
import React from 'react';
import SlickSlider from 'react-slick';

import { Image } from '../cockpit';
import * as S from './Slider.styles';

const Slider = ({ items, settings = {} }) => {
  const defaultSettings = {
    autoplay: false,
    infinite: true,
    nextArrow: <NavigateNext />,
    prevArrow: <NavigateBefore />,
  };

  const sliderSettings = { ...defaultSettings, ...settings };
  return (
    <S.Slider>
      <SlickSlider {...sliderSettings}>
        {items.map((item) => (
          <Image image={item} key={item.meta.title} />
        ))}
      </SlickSlider>
    </S.Slider>
  );
};

Slider.propTypes = {
  items: propTypes.array,
  settings: propTypes.object,
};

export default Slider;
