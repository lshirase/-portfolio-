import { Fragment, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import len1 from '@/images/lenblack.png'
import len2 from '@/images/lenwhite.png'
import TextScrambler from './TextScrambler'

import clsx from 'clsx'

// simple header component that shows logo on the left
// make it sticky to the top of the page
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
        ' relative px-6 pt-7 sm:py-7 md:px-12 ' +
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
            <div className="font-ft-italic text-xs"> &#123;about&#125;</div>
          </div>
          <div className="pt-4 font-ft-reg text-xs">
            <TextScrambler texts={texts} />
            <div>graphically inclined nostalgia merchant</div>
          </div>
        </div>
      </header>
    </div>
  )
}
