import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link href='/favicon.ico' rel='shortcut icon' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com/'
            crossOrigin=''
          />
          <link
            rel='preconnect'
            href='https://cdn.usefathom.com'
            crossOrigin=''
          />
          <link href='/fonts/fonts.css' rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
