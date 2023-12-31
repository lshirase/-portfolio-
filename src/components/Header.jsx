import { Fragment, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AboutHover } from './AboutHover'
import len1 from '@/images/lenblack.png'
import len2 from '@/images/lenwhite.png'
import TextScrambler from './TextScrambler'
// import cat from '@/images/about/cat.jpg'
// import hold from '@/images/about/climbing2.jpg'
// import clyde1 from '@/images/about/clyde1.jpg'
// import clyde2 from '@/images/about/clyde2.jpg'
// import me1 from '@/images/about/me1.jpg'
// import me2 from '@/images/about/me2.jpg'
// import me3 from '@/images/about/me3.jpg'
// import me4 from '@/images/about/me4.jpg'
// import red1 from '@/images/about/red1.jpg'
// import red2 from '@/images/about/red2.jpg'

import clsx from 'clsx'

// simple header component that shows logo on the left
// make it sticky to the top of the page
const imageList = [
  'https://res.cloudinary.com/dkso10gnx/image/upload/v1692051516/portfolio/about/me1_yvbocu.jpg',
  'https://res.cloudinary.com/dkso10gnx/image/upload/v1692051516/portfolio/about/clyde1_jcg4um.jpg',
  'https://res.cloudinary.com/dkso10gnx/image/upload/v1692051516/portfolio/about/me2_jcwkxq.jpg',
  'https://res.cloudinary.com/dkso10gnx/image/upload/v1692051516/portfolio/about/climbing2_bvle8j.jpg',
  'https://res.cloudinary.com/dkso10gnx/image/upload/v1692051516/portfolio/about/red1_z7folf.jpg',
  'https://res.cloudinary.com/dkso10gnx/image/upload/v1692051515/portfolio/about/me3_kmhkwy.jpg',
  'https://res.cloudinary.com/dkso10gnx/image/upload/v1692051515/portfolio/about/cat_rcopqd.jpg',
  'https://res.cloudinary.com/dkso10gnx/image/upload/v1692051517/portfolio/about/red2_zrz63q.jpg',
  'https://res.cloudinary.com/dkso10gnx/image/upload/v1692051516/portfolio/about/me4_nskocy.jpg',
  'https://res.cloudinary.com/dkso10gnx/image/upload/v1692051516/portfolio/about/clyde2_kombmn.jpg',
]

export function Header({ bgWhite }) {
  const router = useRouter()
  const texts = [
    'design + creative code',
    'product design + front-end development',
    'ux design + research',
  ]

  return (
    <div
      className={
        ' relative px-6 pt-7 sm:py-7 lg:px-12 ' +
        (bgWhite ? 'text-black' : 'text-white')
      }
    >
      <header className="">
        <div className="">
          <div className="flex ">
            <div className="">
              <Link href="/" passHref>
                <div className="flex items-center">
                  {bgWhite ? (
                    <Image
                      alt="len shirase"
                      width={323}
                      height={38}
                      src={len1}
                    />
                  ) : (
                    <Image
                      alt="len shirase"
                      width={323}
                      height={38}
                      src={len2}
                    />
                  )}
                </div>
              </Link>
            </div>
            <div className="hidden cursor-pointer md:block">
              <AboutHover
                link="about"
                imageList={imageList}
                text="&#123;about&#125;"
              />
            </div>
            <div className="z-50 font-ft-italic text-xs  md:hidden">
              <Link href="about" passHref>
                &#123;about&#125;
              </Link>
            </div>
          </div>
          <div className=" pt-4 font-ft-reg text-xs">
            <TextScrambler texts={texts} />
            <div>graphically inclined nostalgia merchant</div>
          </div>
        </div>
      </header>
    </div>
  )
}
