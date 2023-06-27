import { useEffect, useRef } from 'react'
import localFont from 'next/font/local'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'
// Font files can be colocated inside of `app`
const ftreg = localFont({
  src: '../../src/fonts/FT88-Regular.woff2',
  variable: '--font-ftreg',
})

const ftbold = localFont({
  src: '../../src/fonts/FT88-Bold.woff2',
  variable: '--font-ftbold',
})

const ftitalic = localFont({
  src: '../../src/fonts/FT88-Italic.woff2',
  variable: '--font-ftitalic',
})

const ftserif = localFont({
  src: '../../src/fonts/FT88-Serif.woff2',
  variable: '--font-ftserif',
})

const ftexpand = localFont({
  src: '../../src/fonts/FT88-Expanded.woff2',
  variable: '--font-ftexpand',
})

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <div
        className={`${ftreg.variable} ${ftitalic.variable} ${ftbold.variable} ${ftserif.variable} ${ftexpand.variable} relative`}
      >
        <main className="">
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
      </div>
    </>
  )
}
