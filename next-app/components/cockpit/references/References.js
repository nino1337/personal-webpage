import propTypes from 'prop-types';
import React, { useState } from 'react';

import Modal from '../../modal/Modal';
import { Button, Gallery, Image } from '../index';
import * as S from './References.styles';

const References = ({ references }) => {
  const SHOW_MORE_COUNT = 3;
  const [visibleReferences, setVisibleReferences] = useState(references.slice(0, 3));
  const [referencesLeft, setReferencesLeft] = useState(references.slice(3, references.length));
  const [modal, setModal] = useState({
    open: false,
    gallery: [],
  });

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
    setVisibleReferences((prevVisibleReferences) => [
      ...prevVisibleReferences,
      ...referencesLeft.slice(0, SHOW_MORE_COUNT),
    ]);
    setReferencesLeft((prevReferencesLeft) => [
      ...prevReferencesLeft.slice(SHOW_MORE_COUNT, prevReferencesLeft.length),
    ]);
  };

  return (
    <>
      <S.ReferencesContainer>
        {visibleReferences.map(({ value: reference }) => (
          <S.Reference
            key={reference.teaserHeadline}
            initial="hidden"
            animate="visible"
            custom={parseInt(reference.animationDelay, 10) || 1}
            variants={{
              hidden: { opacity: 0, top: 20 },
              visible: (i) => ({
                opacity: 1,
                top: 0,
                transition: {
                  delay: i * 0.2,
                },
              }),
            }}
          >
            <S.TeaserImage>
              <Image image={reference.teaserImage} />
            </S.TeaserImage>
            <S.TeaserContent>
              <S.TeaserHeadline>{reference.teaserHeadline}</S.TeaserHeadline>
              <S.TeaserText>{reference.teaserText}</S.TeaserText>
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
      {referencesLeft.length > 0 && (
        <S.ShowMoreButton>
          <Button variant="ghost" text="Mehr anzeigen" onClick={onShowMoreButtonClick} />
        </S.ShowMoreButton>
      )}
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
};

export default References;
