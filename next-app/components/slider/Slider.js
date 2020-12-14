import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import propTypes from 'prop-types';
import React from 'react';
import SlickSlider from 'react-slick';

import Image from '../cockpit/image/Image';
import * as S from './Slider.styles';

const Slider = React.forwardRef(
  ({ items, settings = {}, slideWidth, hoverOnImage = false }, ref) => {
    const defaultSettings = {
      autoplay: false,
      infinite: true,
      nextArrow: <NavigateNext />,
      prevArrow: <NavigateBefore />,
    };

    const sliderSettings = { ...defaultSettings, ...settings };
    return (
      <S.Slider slideWidth={slideWidth}>
        <SlickSlider {...sliderSettings} ref={ref}>
          {items.map((item) => (
            <>
              <Image image={item} key={item.path} />
              {item.meta && hoverOnImage && <S.ImageTitle>{item.meta.title}</S.ImageTitle>}
            </>
          ))}
        </SlickSlider>
      </S.Slider>
    );
  }
);

Slider.displayName = 'Slider';

Slider.propTypes = {
  items: propTypes.array,
  settings: propTypes.object,
  slideWidth: propTypes.number,
  hoverOnImage: propTypes.bool,
};

export default Slider;
