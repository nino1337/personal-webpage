import React from 'react';

import theme from '../../../styles/theme';
import { axe, render } from '../../../utils/testUtils';
import Stage from './Stage';

const DEFAULT_PROPS = {
  headline: {
    name: 'Nino Dornemann',
    upfrontText: 'Hallo, ich heiße',
    subsequentText: 'und ich bin Web-Entwickler',
  },
  buttonText: 'Meine Arbeiten',
  buttonLink: '#referenzen',
};

describe('<Stage>', () => {
  let utils;
  describe('properties', () => {
    beforeEach(() => {
      utils = render(<Stage {...DEFAULT_PROPS} />);
    });
    describe('headline', () => {
      describe('when a headline is given', () => {
        it('shows the headline', () => {
          const { getByText } = utils;
          const upfrontText = getByText(/Hallo, ich heiße/);
          const name = getByText(/Nino Dornemann/);
          const subsequentText = getByText(/und ich bin Web-Entwickler/);

          expect(upfrontText).toBeInTheDocument();
          expect(name).toBeInTheDocument();
          expect(subsequentText).toBeInTheDocument();
        });

        it('shows the name in primary color', () => {
          const { getByText } = utils;
          const name = getByText(/Nino Dornemann/);

          expect(name).toHaveStyleRule('color', theme.colors.primary);
        });
      });
    });

    describe('buttonText', () => {
      describe('when a buttonText is given', () => {
        it('shows a button with the given text', () => {
          const { getByText } = utils;
          const button = getByText(/Meine Arbeiten/);

          expect(button).toBeInTheDocument();
        });
      });
    });

    describe('buttonLink', () => {
      describe('when a buttonLink is given', () => {
        it('shows a button with the given link', () => {
          const { getByText } = utils;
          const button = getByText(/Meine Arbeiten/);

          expect(button).toHaveAttribute('href', '#referenzen');
        });
      });
    });
  });

  describe('accessibility', () => {
    beforeEach(() => {
      utils = render(<Stage {...DEFAULT_PROPS} />);
    });

    it('is accessible according to https://github.com/nickcolley/jest-axe', async () => {
      const { container } = utils;
      const component = await axe(container);
      expect(component).toHaveNoViolations();
    });
  });
});
