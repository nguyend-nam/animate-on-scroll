import '../styles/index.css'
import React from 'react'
import App from 'next/app'
import NProgressHandler from 'components/NProgressHandler'
import Head from 'next/head'
import { AuthContextProvider } from 'context/auth'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <title>Animate on Scroll</title>
          <meta property="og:title" content="Animate on Scroll" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:image" content="/thumbnail.jpeg" />
        </Head>
        <AuthContextProvider>
          <NProgressHandler />
          <Component {...pageProps} id="main-page" />
        </AuthContextProvider>
      </>
    )
  }
}
export default MyApp
