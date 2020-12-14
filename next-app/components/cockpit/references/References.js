import { useAnimation } from 'framer-motion';
import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Modal from '../../modal/Modal';
import Button from '../button/Button';
import Gallery from '../gallery/Gallery';
import Image from '../image/Image';
import Text from '../text/Text';
import * as S from './References.styles';

const References = ({ references, inView }) => {
  const SHOW_MORE_COUNT = 3;
  const [visibleReferences, setVisibleReferences] = useState(references.slice(0, 3));
  const [referencesLeft, setReferencesLeft] = useState(references.slice(3, references.length));
  const [modal, setModal] = useState({
    open: false,
    gallery: [],
  });
  const animationReferences = useAnimation();
  const animationShowMore = useAnimation();

  const onGalleryOpen = (websiteGallery) => {
    setModal({
      open: true,
      gallery: websiteGallery,
    });
  };

  const onGalleryClose = () => {
    setModal({
      open: false,
      gallery: [],
    });
  };

  const onShowMoreButtonClick = () => {
    if (referencesLeft.length === 0) return;
    setVisibleReferences((prevVisibleReferences) => [
      ...prevVisibleReferences,
      ...referencesLeft.slice(0, SHOW_MORE_COUNT),
    ]);
    setReferencesLeft((prevReferencesLeft) => [
      ...prevReferencesLeft.slice(SHOW_MORE_COUNT, prevReferencesLeft.length),
    ]);

    window.scrollBy(0, 345);
  };

  useEffect(() => {
    if (inView) {
      animationReferences.start({ opacity: 1, y: 0 });
    }
  }, [visibleReferences, inView]);

  if (inView) {
    animationShowMore.start({ opacity: 1 });
  }

  return (
    <>
      <S.ReferencesContainer>
        {visibleReferences.map(({ value: reference }) => (
          <S.Reference
            key={reference.teaserHeadline}
            animate={animationReferences}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: reference.animationDelay * 0.15, ease: 'easeOut' }}
          >
            <S.TeaserImage>
              <Image image={reference.teaserImage} />
            </S.TeaserImage>
            <S.TeaserContent>
              <S.TeaserHeadline>{reference.teaserHeadline}</S.TeaserHeadline>
              <Text text={reference.teaserText} />
              <S.CtaContainer>
                <Button
                  variant="primary"
                  onClick={() => onGalleryOpen(reference.websiteGallery)}
                  text="Bilder anzeigen"
                />
                {reference.websiteUrl && (
                  <Button
                    variant="secondary"
                    url={reference.websiteUrl}
                    text="Website Anzeigen"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                )}
              </S.CtaContainer>
            </S.TeaserContent>
          </S.Reference>
        ))}
      </S.ReferencesContainer>
      <S.ShowMoreButton
        animate={animationReferences}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
      >
        <Button
          variant="ghost"
          text="Mehr anzeigen"
          onClick={onShowMoreButtonClick}
          disabled={referencesLeft.length === 0}
        />
      </S.ShowMoreButton>
      <Modal open={modal.open} onClose={onGalleryClose}>
        <Gallery gallery={modal.gallery} />
      </Modal>
    </>
  );
};

References.propTypes = {
  references: propTypes.arrayOf(
    propTypes.shape({
      value: propTypes.exact({
        teaserHeadline: propTypes.string,
        teaserText: propTypes.string,
        teaserImage: propTypes.object,
        websiteUrl: propTypes.string,
        websiteGallery: propTypes.array,
        animationDelay: propTypes.string,
      }),
    })
  ),
  inView: propTypes.bool,
};

export default References;
