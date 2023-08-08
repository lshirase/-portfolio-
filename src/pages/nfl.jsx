import Head from 'next/head'
import Image from 'next/image'
import { Header } from '@/components/Header'
import nfl1 from '@/images/nfl/nfl1.png'
import journey from '@/images/nfl/journeymap.png'
import whiteboard1 from '@/images/nfl/whiteboard1.jpeg'
import whiteboard2 from '@/images/nfl/whiteboard2.jpeg'
import whiteboard3 from '@/images/nfl/whiteboard3.jpeg'
import storyboard from '@/images/nfl/storyboard.png'
import stats1 from '@/images/nfl/stats1.png'
import stats2 from '@/images/nfl/stats2.png'
import stats3 from '@/images/nfl/stats3.png'
import stats4 from '@/images/nfl/stats4.png'
import stats5 from '@/images/nfl/stats5.png'
import result1 from '@/images/nfl/result1.png'
import result2 from '@/images/nfl/result2.png'
import replay1 from '@/images/nfl/replay1.png'
import replay2 from '@/images/nfl/replay2.png'

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
          'flex w-screen flex-col overflow-x-hidden bg-red text-white lg:h-screen'
        }
      >
        <Header />
        <div className="cursor-pointer px-6 py-4  pb-0 font-ft-expanded text-2xl lg:px-9 lg:py-0 lg:pb-7 lg:text-5xl">
          NFL Game Sense
        </div>
        <div className="flex flex-col px-6 pt-4 text-xs lg:flex-row lg:px-12 lg:pt-0">
          {/* make this sticky */}
          <div>
            <div className="sticky top-0 max-w-sm flex-none flex-col pb-4 text-xs lg:pb-0">
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
          <div className="flex flex-col lg:w-4/5 lg:pl-24 xl:w-2/3 xl:pl-60">
            <>
              <div className="font-ft-reg text-lg lg:text-xl">
                NFL Game Sense is an in-stadium video experience that allows
                fans to follow the game from multiple camera angles as well as
                real time data overlays that help tell the story of the game.
              </div>
              <div className="flex flex-1">
                <div className="flex flex-col items-baseline py-4 lg:flex-row">
                  <div className="baseline sticky top-4 pb-4 font-ft-bold text-xl lg:w-1/4">
                    Overview
                  </div>
                  <div className="flex flex-1 flex-col items-center lg:flex-row">
                    <div className="pb-6">
                      <div className="baseline font-ft-reg text-base">5g</div>

                      <div className="py-2 font-ft-bold text-lg lg:text-xl">
                        &ldquo;How does 5G technology fit within the context of
                        the Super Bowl? We want a lot of videos, how fast can
                        you figure it out?&rdquo;
                      </div>
                      <div className="font-ikob-reg text-base">
                        Verizon had partnered with the NFL to showcase the
                        capabilities of 5G and it was the design team&apos;s job
                        to craft a solution that highlighted the technology
                        while taking into account what a person at the Super
                        Bowl is actually doing (read: we didn&apos;t want it to
                        be cool but useless).
                      </div>
                    </div>
                    <Image
                      src={nfl1}
                      alt="nfl game sense"
                      loading="lazy"
                      className="w-1/2 pl-0 lg:w-1/5 lg:pl-5"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-1">
                <div className="flex flex-col items-baseline py-4 lg:flex-row">
                  <div className="baseline sticky top-4 pb-4 font-ft-bold text-xl lg:w-1/4">
                    The Approach
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="pb-6">
                      <div className="py-2 font-ft-bold text-lg lg:text-xl">
                        Team
                      </div>
                      <div className="font-ikob-reg text-base">
                        We had about two weeks to fully flesh out a solution to
                        pitch to Verizon so time was of the essence. The team
                        consisted of myself as lead user experience designer,
                        Armond as lead product designer, Debbie as motion
                        graphics artist, and Ariana as user experience intern.
                        The general starting point presented to us was somehow
                        utilizing the capability of multiple video feeds into a
                        robust user experience.
                      </div>
                    </div>
                    <div className="pb-6">
                      <div className="py-2 font-ft-bold text-lg lg:text-xl">
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
                        comprehensive understanding of our previous research.
                        <br />
                        <br />
                        We had a tremendous amount of past research both that I
                        had personally conducted or have looked through when I
                        was first on boarded. Through usability tests, field
                        research, focus groups, among other things, we had a
                        fairly accurate pulse on the football fan. What we then
                        had to do was frame this knowledge and understanding to
                        our problem space.
                      </div>
                    </div>
                    <div className="flex w-full self-center pb-6">
                      <Image
                        src={journey}
                        alt="journey map"
                        loading="lazy"
                        className="w-full"
                      />
                    </div>
                    <div className="pb-6">
                      <div className="font-ikob-reg text-base">
                        One output of this was a journey map for a previous
                        Super Bowl game. We chose the one that the Eagles were
                        in for some reason (Ariana was and still is, an Eagles
                        die-hard). The journey map allowed us to identify gaps
                        within the live in-stadium experience that hopefully
                        uncover opportunities for us to provide something
                        meaningful.
                        <br />
                        <br />A major gap we identified was when a special play
                        called &ldquo;The Philly Special&rdquo; occurred. It had
                        happened so fast and it was a play with movements so
                        unusual that it was difficult to understand what
                        happened even on the TV with announcers let alone in the
                        stadium.
                      </div>
                    </div>
                    <div className="flex w-full justify-center pb-6">
                      <div className="video-container">
                        <iframe
                          width="640"
                          height="360"
                          src="https://www.youtube.com/embed/stE074a8QJs"
                          title="YouTube Video"
                        />
                      </div>
                    </div>
                    <div className="w-full self-center py-2 text-center font-ft-bold text-lg lg:w-2/3 lg:text-xl">
                      This was the gap we were looking for, a moment where we
                      could imagine someone actually using their phone to look
                      at something that&apos;s not social media while at the
                      stadium, not some wild and convoluted scenario to force
                      our idea.
                    </div>
                    <div className="pb-6">
                      <div className="py-2 font-ft-bold text-lg lg:text-xl">
                        Ideation
                      </div>
                      <div className="font-ikob-reg text-base">
                        Due to the time constraints, we jumped right into
                        ideating when we found our opportunity. We came up with
                        and erased more ideas, screen configurations, and
                        features than I can count. We sat in a room with a
                        whiteboard for about half a day, trying to figure out
                        what exactly we wanted to do.
                      </div>
                    </div>
                    <div className="flex w-full flex-row justify-center  self-center pb-6 lg:flex-row lg:space-x-2 lg:space-y-0">
                      <Image
                        src={whiteboard1}
                        alt="whiteboard 1"
                        loading="lazy"
                        className="w-1/4 lg:w-1/3"
                      />
                      <Image
                        src={whiteboard2}
                        alt="whiteboard 1"
                        loading="lazy"
                        className="w-1/4 lg:w-1/3"
                      />
                      <Image
                        src={whiteboard3}
                        alt="whiteboard 1"
                        loading="lazy"
                        className="w-1/4 lg:w-1/3"
                      />
                    </div>
                    <div className="py-2 font-ft-bold text-lg lg:text-xl">
                      Eventually, we boiled it down to a few key user needs:
                    </div>
                    <div className="pb-6 font-ikob-reg text-base">
                      <ol className="list-inside list-disc space-y-1 pl-6">
                        <div>
                          1. I want to be able to clearly and quickly see what
                          just happened.
                        </div>
                        <div>
                          2. I want to know why a moment was important and
                          exciting.
                        </div>
                        <div>
                          3. I want to be able to easily jump to a key moment.
                        </div>
                      </ol>
                    </div>
                    <div className="pb-6">
                      <div className="font-ikob-reg text-base">
                        From these needs, we knew more or less what kind of
                        experience we wanted to provide. We wanted angles of the
                        same play to negate the bad viewing angle of sitting in
                        a stadium. We wanted stats and overlays to provide the
                        analysis and emphasis that a television viewer would
                        get. We wanted a to easily scan for big moments to take
                        advantage of the lulls in the game in addition to being
                        able to quickly identify and watch a big play that just
                        happened. <br />
                        <br />
                        More and more we began to see what this thing we were
                        working for was going to be. However it seemed that the
                        more clear things got, the less time we had. We had to
                        be more strategic with our time for the second half of
                        this project. We not only had to flesh out our idea but
                        also a pitch to Verizon.
                      </div>
                    </div>
                    <div className="flex w-full self-center pb-6">
                      <Image
                        src={storyboard}
                        alt="storyboard"
                        loading="lazy"
                        className="w-full"
                      />
                    </div>
                    <div className="pb-6">
                      <div className="font-ikob-reg text-base">
                        Ariana and I would create and refine other UX artifacts
                        that would not only provide us a foundation for design
                        but also a mechanism to tell a story. A fun example
                        being this storyboard I created to provide us context
                        both in the design process and during the pitch.
                        <br />
                        <br />
                        Armond and I were co-designing the interface, with my
                        wireframes being either whiteboard drawings or simply me
                        describing things to him.
                        <br />
                        <br />
                        We also needed to prepare a prototype, which is where
                        Debbie comes in. While Armond and I were designing the
                        interface we were also sourcing multiple videos of the
                        Philly Special play, time stamping and describing where
                        we wanted the frames to go to Debbie.
                        <br />
                        <br />
                        We were doing concurrently while handling other projects
                        within the NFL, so it was hectic to say the least.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1">
                <div className="flex flex-col items-baseline py-4 lg:flex-row">
                  <div className="baseline sticky top-4 pb-4 font-ft-bold text-xl lg:w-1/4">
                    The Result
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex flex-1 flex-col items-center lg:flex-row">
                      <div className="pb-6">
                        <div className="py-2 font-ft-bold text-lg lg:text-xl">
                          NFL Game Sense is a Live Multicam In-Stadium
                          Experience
                        </div>
                        <div className="hidden py-2 font-ft-bold text-lg lg:block lg:text-xl">
                          NFL Game Sense is a Live Multicam In-Stadium
                          Experience
                        </div>
                        <div className="hidden py-2 font-ft-bold text-lg lg:block lg:text-xl">
                          NFL Game Sense is a Live Multicam In-Stadium
                          Experience
                        </div>
                      </div>
                      <video
                        src="https://res.cloudinary.com/dkso10gnx/video/upload/v1691445450/5GInnovation_Prototype_jijme2.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-1/2  pb-6 lg:w-1/3"
                      />
                    </div>
                    <div className="pb-6">
                      <div className="py-2 font-ft-bold text-lg lg:text-xl">
                        Watch the game live from multiple angles, watch the
                        replay from the best angles
                      </div>
                    </div>
                    <div className="flex w-full justify-between self-center pb-6">
                      <Image
                        src={result1}
                        alt="multi angle mock up"
                        loading="lazy"
                        className="w-1/3"
                      />
                      <Image
                        src={result2}
                        alt="multi angle mock up"
                        loading="lazy"
                        className="w-1/3"
                      />
                    </div>
                    <div className="pb-6">
                      <div className="py-2 font-ft-bold text-lg lg:text-xl">
                        See insights, stats, and predictions to help you follow
                        and understand all the big moments
                      </div>
                    </div>
                    <div className="flex w-full flex-row justify-center  self-center pb-6 lg:flex-row lg:space-x-2 lg:space-y-0">
                      <Image
                        src={stats1}
                        alt="stats mockup 1"
                        loading="lazy"
                        className="w-1/4 lg:w-1/3"
                      />
                      <Image
                        src={stats2}
                        alt="stats mockup 2"
                        loading="lazy"
                        className="w-1/4 lg:w-1/3"
                      />
                      <Image
                        src={stats3}
                        alt="stats mockup 3"
                        loading="lazy"
                        className="w-1/4 lg:w-1/3"
                      />
                    </div>
                    <div className="flex w-full flex-row justify-center  self-center pb-6 lg:flex-row lg:space-x-2 lg:space-y-0">
                      <Image
                        src={stats4}
                        alt="stats mockup 4"
                        loading="lazy"
                        className="w-1/4 lg:w-1/2"
                      />
                      <Image
                        src={stats5}
                        alt="stats mockup 5"
                        loading="lazy"
                        className="w-1/4 lg:w-1/2"
                      />
                    </div>
                    <div className="pb-6">
                      <div className="py-2 font-ft-bold text-lg lg:text-xl">
                        Replay stats experience
                      </div>
                    </div>
                    <div className="flex w-full justify-between self-center pb-6">
                      <Image
                        src={replay1}
                        alt="replay mock up 1"
                        loading="lazy"
                        className="w-1/3"
                      />
                      <Image
                        src={replay2}
                        alt="replay mock up 2"
                        loading="lazy"
                        className="w-1/3"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1">
                <div className="flex flex-col items-baseline py-4 lg:flex-row">
                  <div className="baseline sticky top-4 pb-4 font-ft-bold text-xl lg:w-1/4">
                    Reflection
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="pb-6">
                      <div className="py-2 font-ft-bold text-lg lg:text-xl">
                        While this was one of the most hectic projects I have
                        ever been on, it was also one of the most exciting. I
                        think this will go down my favorite thing I have done at
                        the NFL.
                      </div>
                      <div className="font-ikob-reg text-base">
                        Our pitch was extremely well received and the room was
                        on board right away. The artifacts we created throughout
                        the process were not only helpful to us while ideating
                        and designing but also invaluable during our
                        presentation in order to tell the story of our
                        experience. The room really enjoyed seeing the journey
                        map and storyboard and the prototype was the push we
                        needed to really &ldquo;wow&rdquo; them. <br />
                        <br />
                        We were prepared to defend our designs but we
                        didn&apos;t have to. Instead the room was talking
                        amongst themselves about what next steps needed to be
                        taken in order for this project to be ready by Super
                        Bowl. Having worked so hard and after putting in so many
                        hours into the project, it was a great feeling to see
                        our work striking a chord.
                      </div>
                    </div>
                    <div className="w-full self-center py-2 text-center font-ft-bold text-lg lg:w-2/3 lg:text-xl">
                      Working with my team on this project — mishaps, stress,
                      and existential crisis included — was one of the most
                      enjoyable and empowering moments of my UX career so far.
                    </div>
                    <div className="pb-6">
                      <div className="py-2 font-ft-bold text-lg lg:text-xl">
                        Bonus
                      </div>
                      <div className="font-ikob-reg text-base">
                        A press video I found of our work while writing this
                        case study that made me happy &#9786;
                      </div>
                    </div>
                    <div className="flex w-full justify-center pb-6">
                      <div className="video-container">
                        <iframe
                          width="640"
                          height="360"
                          src="https://www.youtube.com/embed/stE074a8QJs"
                          title="YouTube Video"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  )
}
