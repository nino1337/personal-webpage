import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import 'intersection-observer';
import { useRouter } from 'next/router';
import propTypes from 'prop-types';
import React, { useEffect } from 'react';
import LocalizationContext from '../localization/context';
import globalStyle from '../styles/globalStyles';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  // const [localizedData, setLocalizedData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath !== '/') {
      router.push('/');
    } else {
      /* disable client slide translation for now, to enable ssr content - todo: move translation to server side (next-i18n-translation)
      const navigatorLanguage = navigator.language || navigator.userLanguage;
      setLocalizedData(getTranslationsFromPage(navigatorLanguage, pageProps)); 
      */
    }
    // keep app state in sync with current page
  }, [router.asPath]);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <LocalizationContext.Provider value={pageProps}>
        <Component {...pageProps} />
      </LocalizationContext.Provider>
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: propTypes.any,
  pageProps: propTypes.object,
};

export default MyApp;
