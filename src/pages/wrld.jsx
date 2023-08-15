import Head from 'next/head'
import Image from 'next/image'
import { Header } from '@/components/Header'
import wrldspinner from '@/images/wrld/wrld_spinner_desktop.gif'
import wrld1 from '@/images/wrld/wrld1.png'
import wrld2 from '@/images/wrld/wrld2.png'
import wrld3 from '@/images/wrld/wrld3.png'
import wrld4 from '@/images/wrld/wrld4.png'
import wrld5 from '@/images/wrld/wrld5.png'
import wrld6 from '@/images/wrld/wrld6.png'

export default function Wrld() {
  return (
    <>
      <Head>
        <title>len shirase wrld</title>
        <meta name="description" content="WRLD web design." />
      </Head>
      <div
        className={
          //   'flex h-full w-screen flex-col bg-blue text-white'
          'flex w-screen flex-col overflow-x-hidden bg-black text-white lg:h-screen'
        }
      >
        <Header />
        <div className="cursor-pointer px-6 py-4  pb-0 font-ft-expanded text-2xl lg:px-9 lg:py-0 lg:pb-7 lg:text-5xl">
          WRLD
        </div>
        <div className="flex flex-col px-6 pt-4 text-xs lg:flex-row lg:px-12 lg:pt-0">
          {/* make this sticky */}
          <div>
            <div className="sticky top-0 max-w-sm flex-none flex-col pb-4 text-xs lg:pb-0">
              <div className="font-ft-italic text-sm">brief</div>

              <ol className="z-50 font-ft-serif">
                <div>
                  Develop and design a customizable and immersive web experience
                  for WRLD, a web3 land management company.
                </div>

                <div className="pt-4 font-ft-italic text-sm">technology</div>
                <li>react, typescript</li>
                <li>reactbricks cms</li>
                <li>gsap</li>
              </ol>
            </div>
          </div>
          <div className="flex flex-col lg:w-4/5 lg:pl-24 xl:w-2/3 ">
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
              <div className="flex w-full self-center pb-6">
                <Image src={wrld1} alt="landing design" loading="lazy" />
              </div>
              <div className="flex w-full self-center pb-6">
                <Image src={wrld2} alt="welcome to wrld" loading="lazy" />
              </div>
              <div className="flex w-full self-center pb-6">
                <Image src={wrld5} alt="play" loading="lazy" />
              </div>
              <div className="flex w-full self-center pb-6">
                <video
                  src="https://res.cloudinary.com/dkso10gnx/video/upload/c_crop,g_east,h_1136,w_1720/v1691194325/tokenomics_hi5k4d.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="pb-6"
                />
              </div>
              <div
                className="relative flex flex-col items-center justify-center"
                style={{ minHeight: '300px' }} // Set a minimum height to ensure the container is visible
              >
                <video
                  src="https://res.cloudinary.com/dkso10gnx/video/upload/v1691191260/Godrays_qmwc9h.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="pb-6"
                />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                  <Image src={wrld6} alt="cta" loading="lazy" />
                </div>
              </div>
              <div className="flex w-full self-center pb-6">
                <Image src={wrld4} alt="play" loading="lazy" />
              </div>

              <div className="flex flex-1">
                <div className="flex flex-col items-baseline py-4 lg:flex-row">
                  <div className="baseline sticky top-4 pb-4 font-ft-bold text-xl lg:w-1/4">
                    Customizable
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="pb-6">
                      <div className="baseline font-ft-reg text-base">
                        React Bricks
                      </div>

                      <div className="py-2 font-ft-bold text-lg lg:text-xl">
                        Add sections, customize components, and edit content all
                        within a CMS
                      </div>
                      <div className="font-ikob-reg text-base">
                        A technical requirement of this project required us to
                        think outside the box to find a solution that would
                        allow for the client to customize the site without
                        having to touch code. We decided to use React Bricks, a
                        headless CMS that allows for the creation of custom
                        components and sections. This allowed us to create a
                        library of components that the client could use to build
                        out their site.
                      </div>
                    </div>
                    <video
                      src="https://res.cloudinary.com/dkso10gnx/video/upload/v1691194325/addbrick_hulees.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="pb-6"
                    />
                    <video
                      src="https://res.cloudinary.com/dkso10gnx/video/upload/v1691194325/editbrick_flxkdr.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="pb-6"
                    />
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
