import React from 'react';

import { axe, render } from '../../../utils/testUtils';
import Button from './Button';

describe('<Button />', () => {
  let utils;
  describe('text', () => {
    describe('when a text is given', () => {
      it('renders the given text', () => {
        utils = render(<Button text="Test" />);
        const { getByText } = utils;

        expect(getByText('Test')).toBeInTheDocument();
      });
    });
  });

  describe('accessibility', () => {
    it('is accessible according to https://github.com/nickcolley/jest-axe', async () => {
      utils = render(<Button text="Test" />);
      const { container } = utils;
      const component = await axe(container);

      expect(component).toHaveNoViolations();
    });
  });
});
