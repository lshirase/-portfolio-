import Head from 'next/head'
import Link from 'next/link'

import { Header } from '@/components/Header'
import { LinkHover } from '@/components/LinkHover'
import VideoPlayer from '@/components/VideoPlayer'
import VideoPlayerMobile from '@/components/VideoPlayerMobile'
import spinner from '@/images/wrld/wrld_spinner1.gif'
import logo from '@/images/logo.png'
import nfl1 from '@/images/nfl/nfl1.png'
import tulip from '@/images/tulip.png'

const videos = ['/magic2.webm', '/tulip2.webm', '/dinho1.webm', '/tiger3.webm']

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
          <div className="flex flex-col  lg:w-[54rem]">
            <div className="font-japanese text-2xl">はじめまして。</div>
            <div className="font-ft-serif text-xl">
              I am a Los Angeles based multi-displinary designer with a fondness
              for function.
              <br />
              Recently into Processing and p5.js
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
