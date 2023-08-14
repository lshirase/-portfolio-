import Head from 'next/head'

import { Header } from '@/components/Header'

import HorizontalScroll from '@/components/HorizontalCarousel'

export default function Graphics() {
  return (
    <>
      <Head>
        <title>len shirase, design and code</title>
        <meta
          name="description"
          content="Len Shirase, I'm a designer and developer based in Los Angeles, California."
        />
      </Head>
      <div>
        <div className="flex h-[100dvh] max-h-[100dvh] w-screen flex-col overflow-y-hidden bg-white text-black md:justify-between">
          <Header bgWhite />
          {/* <div className="flex w-screen flex-col px-6 pt-4 lg:px-12 lg:pt-0"> */}
          <div className="w-full flex-initial justify-end overflow-hidden  px-6 pb-0 pt-4 md:pb-6  md:pl-6 md:pt-0 lg:pb-12 lg:pl-12 lg:pr-0">
            <HorizontalScroll />
          </div>
        </div>
      </div>
    </>
  )
}
