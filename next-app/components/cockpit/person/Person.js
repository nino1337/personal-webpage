import propTypes from 'prop-types';
import React from 'react';

import Image from '../image/Image';
import * as S from './Person.styles';

const Person = ({ image, text, socialMedia }) => {
  return (
    <S.Person
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <S.PersonImage>
        <Image image={image} />
      </S.PersonImage>
      <S.PersonSocialMedia>
        {socialMedia.map(({ value }) => (
          <S.PersonSocialMediaItem key={value.url}>
            <S.PersonSocialMediaLink href={value.url} target="_blank" rel="noopener noreferrer">
              <Image image={value.icon} />
            </S.PersonSocialMediaLink>
          </S.PersonSocialMediaItem>
        ))}
      </S.PersonSocialMedia>
      <S.PersonText>{text}</S.PersonText>
    </S.Person>
  );
};

Person.propTypes = {
  image: propTypes.object,
  text: propTypes.string,
  socialMedia: propTypes.array,
};

export default Person;
