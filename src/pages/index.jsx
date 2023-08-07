import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'

import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import placeholder from '@/images/placeholder.png'
import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { Header } from '@/components/Header'
import { LinkHover } from '@/components/LinkHover'
import VideoPlayer from '@/components/VideoPlayer'
import VideoPlayerMobile from '@/components/VideoPlayerMobile'
import spinner from '@/images/wrld/wrld_spinner1.gif'

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
        <div className="inline-flex flex-none flex-row px-6 pt-4 text-xs sm:px-12 sm:pt-0">
          <div className="flex-col">
            <div className="font-ft-italic text-sm">selected work</div>
            <ol className="z-50 hidden font-ft-serif md:block">
              <LinkHover
                link="coop"
                imageSrc={placeholder}
                text="1. co-op solutions"
              />
              <LinkHover link="wrld" imageSrc={spinner} text="2. wrld3d" />
              <LinkHover
                link="coop"
                imageSrc={placeholder}
                text="3. nfl + verizon"
              />
              <LinkHover
                link="coop"
                imageSrc={placeholder}
                text="4. millcross coffee"
              />
              <LinkHover
                link="coop"
                imageSrc={placeholder}
                text="5. various graphics"
              />
            </ol>
            <ol className="z-50 font-ft-serif md:hidden">
              <Link href="coop" passHref>
                <li>1. co-op solutions</li>
              </Link>
              <Link href="coop" passHref>
                <li>2. wrld3d</li>
              </Link>
              <Link href="coop" passHref>
                <li>3. nfl + verizon</li>
              </Link>
              <Link href="coop" passHref>
                <li>4. millcross coffee</li>
              </Link>
              <Link href="coop" passHref>
                <li>5. various graphics</li>
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
      {/* <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container> */}
    </>
  )
}

