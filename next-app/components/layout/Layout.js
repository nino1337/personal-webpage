import Head from 'next/head';
import React, { useContext } from 'react';

import LocalizationContext from '../../localization/context';
import BackToTop from '../backToTop/BackToTop';
import CockpitComponents from '../cockpitComponents/CockpitComponents';
import Footer from '../footer/Footer';
import * as S from './Layout.styles';

const Layout = () => {
  const { currentPage, siteSettings } = useContext(LocalizationContext);

  return (
    <>
      <Head>
        <title>{`${siteSettings.name} ${
          currentPage.metaTitle && '| ' + currentPage.metaTitle
        }`}</title>
        <meta name="description" content={currentPage.metaDescription} />
        {!currentPage.indexable && <meta name="robots" content="noindex" />}
        <link rel="icon" href={process.env.COCKPIT_BASE_URL + siteSettings.favIcon.path} />
      </Head>
      <S.Main>
        {currentPage.components && <CockpitComponents components={currentPage.components} />}
      </S.Main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Layout;
