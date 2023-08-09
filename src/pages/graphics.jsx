import Head from 'next/head'
import Link from 'next/link'

import { Header } from '@/components/Header'
import { AboutImages } from '@/components/AboutImages'
import cat from '@/images/about/cat.jpg'
import hold from '@/images/about/climbing2.jpg'
import clyde1 from '@/images/about/clyde1.jpg'
import clyde2 from '@/images/about/clyde2.jpg'
import me1 from '@/images/about/me1.jpg'
import me2 from '@/images/about/me2.jpg'
import me3 from '@/images/about/me3.jpg'
import me4 from '@/images/about/me4.jpg'
import red1 from '@/images/about/red1.jpg'
import red2 from '@/images/about/red2.jpg'

const imageList = [me1, clyde1, me2, hold, red1, me3, cat, red2, me4, clyde2]

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
      <div className="flex w-screen flex-col overflow-x-hidden bg-white text-black lg:h-screen">
        <Header bgWhite />
        <div className="flex flex-col px-6 pt-4 text-xs lg:flex-row lg:px-12 lg:pt-0"></div>
      </div>
    </>
  )
}
