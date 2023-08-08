import Head from 'next/head'
import Link from 'next/link'
import placeholder from '@/images/placeholder.png'

import { Header } from '@/components/Header'
import { LinkHover } from '@/components/LinkHover'
import VideoPlayer from '@/components/VideoPlayer'
import VideoPlayerMobile from '@/components/VideoPlayerMobile'
import spinner from '@/images/wrld/wrld_spinner1.gif'
import logo from '@/images/logo.png'
import nfl1 from '@/images/nfl/nfl1.png'
import tulip from '@/images/tulip.png'

const videos = ['/magic2.webm', '/tulip2.webm', '/dinho1.webm', '/tiger3.webm']

export default function Home() {
  return (
    <>
      <Head>
        <title>len shirase, design and code</title>
        <meta
          name="description"
          content="Len Shirase, I'm a designer and developer based in Los Angeles, California."
        />
      </Head>
      <div className="flex h-screen flex-col md:w-screen ">
        <Header bgWhite />
        <div className="inline-flex flex-none flex-row px-6 pt-4 text-xs sm:pt-0 lg:px-12">
          <div className="flex-col">
            <div className="font-ft-italic text-sm">selected work</div>
            <ol className="z-50 hidden font-ft-serif md:block">
              <LinkHover
                link="coop"
                imageSrc={logo}
                text="1. co-op solutions"
              />
              <LinkHover link="wrld" imageSrc={spinner} text="2. wrld3d" />
              <LinkHover link="nfl" imageSrc={nfl1} text="3. nfl + verizon" />
              <LinkHover link="coop" imageSrc={tulip} text="4. graphics etc" />
            </ol>
            <ol className="z-50 font-ft-serif md:hidden">
              <Link href="coop" passHref>
                <li>1. co-op solutions</li>
              </Link>
              <Link href="wrld" passHref>
                <li>2. wrld3d</li>
              </Link>
              <Link href="nfl" passHref>
                <li>3. nfl + verizon</li>
              </Link>
              <Link href="coop" passHref>
                <li>4. graphics etc</li>
              </Link>
            </ol>
          </div>
        </div>
        <div className="hidden flex-grow flex-col items-center justify-center md:flex">
          <VideoPlayer videos={videos} type="video/webm" />
        </div>
        <div className="flex flex-grow flex-col items-center justify-center md:hidden">
          <VideoPlayerMobile />
        </div>
      </div>
    </>
  )
}
