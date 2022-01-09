import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';
 

import "/styles/globals.css";
import theme from '../styles/theme';
 
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client.js";


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
   const { cats } = pageProps
   console.log('1221 in _app cats', cats)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>佑圣宝贝月子会所</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
         
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider> 
        
      </ThemeProvider>
    </CacheProvider>
  );
}


