import { Head, Html, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-32x32.png"
        />
        <link rel="icon" href="/images/favicon.ico" />
        <meta property="og:image" content="Link preview image URL" />
        <meta
          property="og:image"
          content="/favicons/android-chrome-512x512.png"
        />
      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
