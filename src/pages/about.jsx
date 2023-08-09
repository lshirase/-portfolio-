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

export default function About() {
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
        <div className="flex flex-col px-6 pt-4 text-xs lg:flex-row lg:px-12 lg:pt-0">
          <div className="flex flex-col  pb-6 lg:w-[40rem] lg:pb-0 lg:pr-24">
            <div className="text-2xl font-bold">はじめまして。</div>
            <div className="pb-2 font-ikob-reg text-base">
              I am a Los Angeles based multi-disciplinary designer (and
              developer) with a fondness for function. I love to work on all
              kinds of things, so please don&apos;t hesitate to reach out :^).
            </div>
            <div className="w-full cursor-pointer">
              <AboutImages imageList={imageList} />
            </div>
          </div>
          <div className="flex flex-col lg:w-1/3">
            <div className="flex-col pb-2">
              <div className="font-ikob-bold text-sm">Experience</div>
              <div className="font-ikob-italic text-sm">
                Philosophie, Senior Product Designer
              </div>
              <div className="font-ikob-italic text-sm">
                Philosophie, Full-Stack Product Designer
              </div>
              <div className="font-ikob-italic text-sm">Noshi, Co-Founder</div>
              <div className="font-ikob-italic text-sm">
                NFL, User Experience Designer
              </div>
            </div>
            <div className="flex-col pb-2">
              <div className="font-ikob-bold text-sm">Clients</div>
              <div className="font-ikob-italic text-sm">WRLD</div>
              <div className="font-ikob-italic text-sm">
                Global Language Institute
              </div>

              <div className="font-ikob-italic text-sm">Millcross Coffee </div>
              <div className="font-ikob-italic text-sm">The Field Museum</div>

              <div className="font-ikob-italic text-sm">Beyond Baroque</div>
            </div>
            <div className="flex-col pb-2">
              <div className="font-ikob-bold text-sm">Speaking</div>
              <div className="font-ikob-italic text-sm">
                UCLA Extension - User Experience Panel
              </div>
              <div className="font-ikob-italic text-sm">
                University of Michigan - Cafe Shapiro
              </div>
            </div>
            <div className="flex-col pb-2">
              <div className="font-ikob-bold text-sm">Education</div>
              <div className="font-ikob-italic text-sm">
                University of Michigan, B.S.
              </div>
              <div className="font-ikob-italic text-sm">
                Information, User Experience Design
              </div>
              <div className="font-ikob-italic text-sm">Phi Beta Kappa</div>
            </div>
            <div className="flex-col pb-2">
              <div className="font-ikob-bold text-sm">Contact</div>
              <div className="font-ikob-italic text-sm">
                lenshirase@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
