import React from 'react';
import CookieConsentWrapper from '../components/CookieConsentWrapper';
import SpriteSheet from '../components/SpriteSheet';

export default function Root({ children }) {
  return (
    <>
      <SpriteSheet />
      <CookieConsentWrapper />
      {children}
    </>
  );
}
