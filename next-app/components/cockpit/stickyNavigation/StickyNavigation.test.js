import React from 'react';

import { axe, render } from '../../../utils/testUtils';
import StickyNavigation from './StickyNavigation';

const DEFAULT_PROPS = {
  navigationItems: [
    {
      value: {
        anchor: '#references',
        name: 'Arbeiten',
      },
    },
    {
      value: {
        anchor: '#about',
        name: 'Über mich',
      },
    },
  ],
};

window.Element.prototype.getBoundingClientRect = jest.fn(() => ({
  y: -100,
}));

describe('<StickyNavigation />', () => {
  let utils;
  describe('navigationItems', () => {
    describe('when navigationitems are given', () => {
      it('renders the given a navigation with items', () => {
        utils = render(<StickyNavigation {...DEFAULT_PROPS} />);
        const { getByText } = utils;
        const references = getByText(/arbeiten/i);
        const about = getByText(/über mich/i);

        expect(references).toBeInTheDocument();
        expect(references).toHaveAttribute('href', '#references');

        expect(about).toBeInTheDocument();
        expect(about).toHaveAttribute('href', '#about');
      });

      it('renders a fixed navigation', () => {
        utils = render(<StickyNavigation {...DEFAULT_PROPS} />);
        const { getByRole } = utils;
        const navigation = getByRole('navigation');

        expect(navigation).toBeInTheDocument();
        expect(navigation).toHaveStyleRule('position', 'fixed');
      });
    });
  });

  describe('accessibility', () => {
    it('is accessible according to https://github.com/nickcolley/jest-axe', async () => {
      utils = render(<StickyNavigation {...DEFAULT_PROPS} />);
      const { container } = utils;
      const component = await axe(container);

      expect(component).toHaveNoViolations();
    });
  });
});
