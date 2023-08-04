import Head from 'next/head'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { InsightsOverview } from '@/components/InsightsOverview'
import { InsightsData } from '@/components/InsightsData'
import { InsightsSg } from '@/components/InsightsSg'
import { useState, useEffect, useRef } from 'react'
import wrldspinner from '@/images/wrld_spinner_desktop.gif'

export default function Wrld() {
  return (
    <>
      <Head>
        <title>len shirase wrld</title>
        <meta
          name="description"
          content="All of my projects with Co-op Solutions."
        />
      </Head>
      <div
        className={
          //   'flex h-full w-screen flex-col bg-blue text-white'
          'flex w-screen flex-col overflow-x-hidden bg-black text-white md:h-screen'
        }
      >
        <Header />
        <div className="cursor-pointer px-6 py-4  pb-0 font-ft-expanded text-2xl md:px-9 md:py-0 md:pb-7 md:text-5xl">
          WRLD
        </div>
        <div className="flex flex-col px-6 pt-4 text-xs md:flex-row md:px-12 md:pt-0">
          {/* make this sticky */}
          <div>
            <div className="sticky top-0 max-w-sm flex-none flex-col pb-4 text-xs md:pb-0">
              <div className="font-ft-italic text-sm">brief</div>

              <ol className="z-50 font-ft-serif">
                <div>
                  Develop a customizable and immersive web experience for WRLD,
                  a web3 land management company.
                </div>

                <div className="pt-4 font-ft-italic text-sm">technology</div>
                <li>react, typescript</li>
                <li>reactbricks cms</li>
                <li>gsap</li>
              </ol>
            </div>
          </div>
          <div className="flex flex-col md:w-4/5 md:pl-24 lg:w-2/3 ">
            <>
              <div
                className="relative flex flex-col items-center justify-center"
                style={{ minHeight: '300px' }} // Set a minimum height to ensure the container is visible
              >
                <video
                  src="https://res.cloudinary.com/dkso10gnx/video/upload/v1691191254/Gradient_ewe0q8.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="pb-6"
                />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                  <Image src={wrldspinner} alt="spinner" loading="lazy" />
                </div>
              </div>
              {/* <div className="font-ft-bold text-lg md:text-xl">
                Co-op Solutions is a nationwide credit union network supporting
                their members with industry-leading ATM, digital payment,
                security, and marketing services.
              </div>
              <div className="flex flex-row py-10">
                <div className="text-base">
                  <h4 className="pb-2 font-ft-bold">Role(s)</h4>
                  <div className="font-ikob-reg">
                    <p>Product Designer</p>
                    <p>UX Researcher</p>
                    <p>Front-End Engineer</p>
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
                <div className="pb-4 font-ikob-reg md:pb-0">
                  For two-ish years, I was the primary design consultant (and
                  secondary development consultant) for the redesign of
                  <span className="inline-block cursor-pointer font-ft-serif text-green hover:text-white">
                    Insights Center
                  </span>
                  , a web-based reporting platform that helps credit unions
                  understand their credit, debit, and ATM portfolios. I
                  initially started the project as a designer but as the project
                  grew, so did I! My domain expanded and my responsibilities
                  started to look like a hybrid of a designer, developer, and a
                  product manager. Thankful for my team and the client for
                  giving me the space to go head first into this new world. I
                  also worked on a couple other fun projects along the way like{' '}
                  <a
                    href={'https://campaigns.coop.org/think-2023/p/1'}
                    target={'_blank'}
                    rel="noreferrer"
                    className="items-top inline-flex cursor-pointer font-ft-serif text-green hover:text-white"
                  >
                    THINK 2023
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 22 22"
                    >
                      <path
                        fill="currentColor"
                        d="M21 11V3h-8v2h4v2h-2v2h-2v2h-2v2H9v2h2v-2h2v-2h2V9h2V7h2v4h2zM11 5H3v16h16v-8h-2v6H5V7h6V5z"
                      />
                    </svg>
                  </a>{' '}
                  site and aiding in the development of
                  <span className="font-ft-serif"> storybook components </span>
                  for Springboard.
                </div>
              </div> */}
            </>
          </div>
        </div>
      </div>
    </>
  )
}
