import Head from 'next/head'
import Image from 'next/image'
import { LinkHover } from '@/components/LinkHover'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import { Header } from '@/components/Header'
import Link from 'next/link'
import placeholder from '@/images/placeholder.png'

import { useState } from 'react'

export default function Coop() {
  const [activeSection, setActiveSection] = useState('coop')

  const handleSectionChange = (section) => {
    setActiveSection(section)
  }
  return (
    <>
      <Head>
        <title>len shirase co-op solutions</title>
        <meta
          name="description"
          content="All of my projects with Co-op Solutions."
        />
      </Head>
      <div className="flex h-screen w-screen flex-col overflow-x-hidden bg-blue text-white">
        <Header />
        <div
          className="cursor-pointer px-6 pb-7 font-ft-expanded text-5xl sm:px-9"
          onClick={() => handleSectionChange('coop')}
        >
          Co-op Solutions
        </div>
        <div className="flex flex-row px-6 pt-4 text-xs sm:px-12 sm:pt-0">
          <div className="flex-none flex-col text-xs">
            <div className="font-ft-italic text-sm">insights center</div>
            {/* <ol className="z-50 hidden font-ft-serif md:block">
              <LinkHover
                link="coop"
                imageSrc={placeholder}
                text="1. co-op solutions"
              />
              <LinkHover link="coop" imageSrc={placeholder} text="2. wrld3d" />
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
            </ol> */}
            <ol className="z-50 cursor-pointer font-ft-serif">
              <div onClick={() => handleSectionChange('insights')}>
                <li>1. co-op solutions</li>
              </div>
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
          {/* switch component here */}
          <div className="flex w-3/5 flex-col pl-60">
            {activeSection === 'coop' && (
              <>
                <div className="font-ft-bold text-xl">
                  Co-op Solutions is a nationwide credit union network
                  supporting their members with industry-leading ATM, digital
                  payment, security, and marketing services.
                </div>
                <div className="flex flex-row py-10">
                  <div className="text-base">
                    <h4 className="pb-2 font-ft-bold">Role(s)</h4>
                    <div className="font-ikob-reg">
                      <p>Product Designer</p>
                      <p>Front-end Engineer</p>
                      <p> Product Manager</p>
                    </div>
                  </div>
                  <div className="pl-14 text-base">
                    <h4 className="pb-2 font-ft-bold">Duration</h4>
                    <div className="font-ikob-reg">
                      <p>March 2021 - February 2023</p>
                    </div>
                  </div>
                </div>
                <div className="text-base">
                  <h4 className="pb-2 font-ft-bold">About</h4>
                  <div className="font-ikob-reg">
                    For two-ish years, I was the primary design consultant (and
                    secondary development consultant) for the redesign of
                    <span className="font-ft-serif"> Insights Center</span>, a
                    web-based reporting platform that helps credit unions
                    understand their credit, debit, and ATM portfolios. I
                    initially started the project as a designer but as the
                    project grew, so did I! My domain expanded and my
                    responsibilities started to look like a hybrid of a
                    designer, developer, and a product manager. Thankful for my
                    team and the client for giving me the space to go head first
                    into this new world. I also worked on a couple other fun
                    projects along the way like the
                    <span className="font-ft-serif"> THINK 2023 </span>site and
                    aiding in the development of
                    <span className="font-ft-serif">
                      {' '}
                      storybook components{' '}
                    </span>
                    for Springboard.
                  </div>
                </div>
              </>
            )}
          </div>

          {activeSection === 'insights' && <div>yoo</div>}
        </div>
      </div>
    </>
  )
}
