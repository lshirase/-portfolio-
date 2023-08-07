import Head from 'next/head'
import Image from 'next/image'
import { Header } from '@/components/Header'
import nfl1 from '@/images/nfl/nfl1.png'
import journey from '@/images/nfl/journeymap.png'

export default function Nfl() {
  return (
    <>
      <Head>
        <title>len shirase nfl + verizon</title>
        <meta
          name="description"
          content="All of my projects with Co-op Solutions."
        />
      </Head>
      <div
        className={
          //   'flex h-full w-screen flex-col bg-blue text-white'
          'flex w-screen flex-col overflow-x-hidden bg-red text-white md:h-screen'
        }
      >
        <Header />
        <div className="cursor-pointer px-6 py-4  pb-0 font-ft-expanded text-2xl md:px-9 md:py-0 md:pb-7 md:text-5xl">
          NFL Game Sense
        </div>
        <div className="flex flex-col px-6 pt-4 text-xs md:flex-row md:px-12 md:pt-0">
          {/* make this sticky */}
          <div>
            <div className="sticky top-0 max-w-sm flex-none flex-col pb-4 text-xs md:pb-0">
              <ol className="z-50 font-ft-serif">
                <div className="font-ft-italic text-sm">client</div>

                <div>nfl + verizon</div>

                <div className="pt-4 font-ft-italic text-sm">role</div>
                <div>lead ux designer</div>
                <div className="pt-4 font-ft-italic text-sm">timeline</div>
                <div>august 2019, 2 - 3 weeks</div>
              </ol>
            </div>
          </div>
          <div className="flex flex-col md:w-4/5 md:pl-24 lg:w-2/3 ">
            <div className="font-ft-reg text-lg md:text-xl">
              NFL Game Sense is an in-stadium video experience that allows fans
              to follow the game from multiple camera angles as well as real
              time data overlays that help tell the story of the game.
            </div>
            <div className="flex flex-1">
              <div className="flex flex-col items-baseline py-4 md:flex-row">
                <div className="baseline sticky top-4 pb-4 font-ft-bold text-xl md:w-1/4">
                  Overview
                </div>
                <div className="flex flex-1 flex-col items-center md:flex-row">
                  <div className="pb-6">
                    <div className="baseline font-ft-reg text-base">5g</div>

                    <div className="py-2 font-ft-bold text-lg md:text-xl">
                      &ldquo;How does 5G technology fit within the context of
                      the Super Bowl? We want a lot of videos, how fast can you
                      figure it out?&rdquo;
                    </div>
                    <div className="font-ikob-reg text-base">
                      Verizon had partnered with the NFL to showcase the
                      capabilities of 5G and it was the design team&apos;s job
                      to craft a solution that highlighted the technology while
                      taking into account what a person at the Super Bowl is
                      actually doing (read: we didn&apos;t want it to be cool
                      but useless).
                    </div>
                  </div>
                  <Image
                    src={nfl1}
                    alt="nfl game sense"
                    loading="lazy"
                    className="w-1/2 pl-0 md:w-1/5 md:pl-5"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-1">
              <div className="flex flex-col items-baseline py-4 md:flex-row">
                <div className="baseline sticky top-4 pb-4 font-ft-bold text-xl md:w-1/4">
                  The Approach
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="pb-6">
                    <div className="py-2 font-ft-bold text-lg md:text-xl">
                      Team
                    </div>
                    <div className="font-ikob-reg text-base">
                      We had about two weeks to fully flesh out a solution to
                      pitch to Verizon so time was of the essence. The team
                      consisted of myself as lead user experience designer,
                      Armond as lead product designer, Debbie as motion graphics
                      artist, and Ariana as user experience intern. The general
                      starting point presented to us was somehow utilizing the
                      capability of multiple video feeds into a robust user
                      experience.
                    </div>
                  </div>
                  <div className="pb-6">
                    <div className="py-2 font-ft-bold text-lg md:text-xl">
                      Research
                    </div>
                    <div className="font-ikob-reg text-base">
                      We didn&apos;t just want to throw up a bunch of random
                      videos at once and call it a day, so we took a step back
                      to see what would actually be interesting to someone who
                      has at the Super Bowl. We didn&apos;t have the time or
                      resources to for a fresh research phase so we had to
                      improvise. Luckily I had been at the NFL for quite some
                      time when we received this project so I had a fairly
                      comprehensive understanding of our previous research.{' '}
                      <br />
                      <br />
                      We had a tremendous amount of past research both that I
                      had personally conducted or have looked through when I was
                      first on boarded. Through usability tests, field research,
                      focus groups, among other things, we had a fairly accurate
                      pulse on the football fan. What we then had to do was
                      frame this knowledge and understanding to our problem
                      space.
                    </div>
                  </div>
                  <div className="flex w-full self-center pb-6">
                    <Image
                      src={journey}
                      alt="data hierarchy"
                      loading="lazy"
                      className="w-full"
                    />
                  </div>
                  <div className="pb-6">
                    <div className="font-ikob-reg text-base">
                      One output of this was a journey map for a previous Super
                      Bowl game. We chose the one that the Eagles were in for
                      some reason (Ariana was and still is, an Eagles die-hard).
                      The journey map allowed us to identify gaps within the
                      live in-stadium experience that hopefully uncover
                      opportunities for us to provide something meaningful.
                      <br />
                      <br />A major gap we identified was when a special play
                      called &ldquo;The Philly Special&rdquo; occurred. It had
                      happened so fast and it was a play with movements so
                      unusual that it was difficult to understand what happened
                      even on the TV with announcers let alone in the stadium.
                    </div>
                  </div>
                  <div className="align-center flex w-full pb-6">
                    <iframe
                      width="640"
                      height="360"
                      src="https://www.youtube.com/embed/stE074a8QJs"
                    />
                  </div>
                  <div className="pb-6">
                    <div className="baseline font-ft-reg text-base">
                      Finding Connections
                    </div>

                    <div className="py-2 font-ft-bold text-lg md:text-xl">
                      Seed turns into a (data) tree
                    </div>
                    <div className="pb-4 font-ikob-reg text-base">
                      As we became more familiar with financial data and the
                      reports we had to support, we started to see the data we
                      should prioritize first and how they are all connected.
                      For an example, we could trace something like PIN back to
                      the other attributes are connected to it (Plastic Card,
                      Authentication, and etc.).
                    </div>
                    <div className="flex flex-col">
                      <div className="flex w-full self-center pb-6">
                        <Image
                          src={journey}
                          alt="transaction analysis report"
                          loading="lazy"
                          className="w-full"
                        />
                      </div>
                      <div className="flex w-full self-center pb-6 md:w-1/2">
                        <Image
                          src={journey}
                          alt="transaction analysis report"
                          loading="lazy"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
