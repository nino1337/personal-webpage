import React from 'react';

import { axe, render, userEvent } from '../../../utils/testUtils';
import References from './References';

const REFERENCES = [
  {
    value: {
      teaserImage: {
        path: '',
        meta: {
          title: 'test',
        },
      },
      teaserHeadline: 'Reference 1',
      teaserText: 'Teaser Text 1',
      websiteUrl: 'https://www.moncheri-cherryclub.de/',
      websiteGallery: [
        {
          meta: {
            title: '',
            asset: '',
          },
          path: '',
        },
        {
          meta: {
            title: '',
            asset: '5fa126e9d10e93027f225e12',
          },
          path: '',
        },
        {
          meta: {
            title: '',
            asset: '5fa1268e6d28f442b842d451',
          },
          path: '',
        },
      ],
      animationDelay: '1',
    },
  },
  {
    value: {
      teaserImage: {
        path: '',
        meta: {
          title: 'test',
        },
      },
      teaserHeadline: 'Reference 2',
      teaserText: 'Teaser Text 2',
      websiteUrl: 'https://www.google.de',
      websiteGallery: [],
      animationDelay: '2',
    },
  },
  {
    value: {
      teaserImage: {
        path: '',
        meta: {
          title: 'test',
        },
      },
      teaserHeadline: 'Reference 3',
      teaserText: 'Teaser Text 3',
      websiteUrl: 'https://www.google.de',
      websiteGallery: [],
      animationDelay: '3',
    },
  },
  {
    value: {
      teaserImage: {
        path: '',
        meta: {
          title: 'test',
        },
      },
      teaserHeadline: 'Reference 4',
      teaserText: 'Teaser Text 4',
      websiteUrl: 'https://www.google.de',
      websiteGallery: [],
      animationDelay: '3',
    },
  },
  {
    value: {
      teaserImage: {
        path: '',
        meta: {
          title: 'test',
        },
      },
      teaserHeadline: 'Reference 5',
      teaserText: 'Teaser Text 5',
      websiteUrl: 'https://www.google.de',
      websiteGallery: [],
      animationDelay: '2',
    },
  },
  {
    value: {
      teaserImage: {
        path: '',
        meta: {
          title: 'test',
        },
      },
      teaserHeadline: 'Reference 6',
      teaserText: 'Teaser Text 6',
      websiteUrl: 'https://www.google.de',
      websiteGallery: [],
      animationDelay: '1',
    },
  },
];

describe('<References />', () => {
  let utils;
  describe('references', () => {
    describe('when 6 references are given', () => {
      it('renders the first three references', () => {
        utils = render(<References references={REFERENCES} />);
        const { getByText, queryByText } = utils;
        const firstReference = getByText('Reference 1');
        const secondReference = getByText('Reference 2');
        const thirdReference = getByText('Reference 3');
        const fourthReference = queryByText('Reference 4');

        expect(firstReference).toBeInTheDocument();
        expect(secondReference).toBeInTheDocument();
        expect(thirdReference).toBeInTheDocument();
        expect(fourthReference).not.toBeInTheDocument();
      });
    });
  });

  describe('user interaction', () => {
    describe('when the user clicks on the show more button', () => {
      it('renders three more references', () => {
        utils = render(<References references={REFERENCES} />);
        const { getByText } = utils;
        const showMoreButton = getByText('Mehr anzeigen');

        userEvent.click(showMoreButton);
        expect(getByText('Reference 4')).toBeInTheDocument();
        expect(getByText('Reference 5')).toBeInTheDocument();
        expect(getByText('Reference 6')).toBeInTheDocument();
      });
    });
  });

  describe('accessibility', () => {
    it('is accessible according to https://github.com/nickcolley/jest-axe', async () => {
      utils = render(<References references={REFERENCES} />);
      const { container } = utils;
      const component = await axe(container);

      expect(component).toHaveNoViolations();
    });
  });
});
