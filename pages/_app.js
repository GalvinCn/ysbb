import Head from 'next/head';
//import { ThemeProvider } from '@mui/material/styles';
import { createMuiTheme, ThemeProvider, Button } from '@material-ui/core';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';

 

import "/styles/globals.css";
//import theme from '../styles/theme';
 
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client.js";


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#006400"
    },
    secondary: {
      main: "#ffa500"
    }
  }
});

 

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;  

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>佑圣宝贝月子会所</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
       {/*} <Header cats={cats}/> */}
        
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider> 
        
      </ThemeProvider>
    </CacheProvider>
  );
}


