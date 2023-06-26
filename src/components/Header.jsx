import { Fragment, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import len1 from '@/images/lenblack.png'
import len2 from '@/images/lenwhite.png'

import clsx from 'clsx'

// simple header component that shows logo on the left
// make it sticky to the top of the page
export function Header() {
  const router = useRouter()

  return (
    <div className="12 relative px-6 py-7 sm:px-12">
      <header className="bg-white">
        <div className="">
          <div className="flex ">
            <div className="">
              <Link href="/" passHref>
                <div className="flex items-center">
                  <Image
                    alt="len shirase"
                    className="rounded-full"
                    width={323}
                    height={38}
                    src={len1}
                  />
                </div>
              </Link>
            </div>
            <div> &#123; about &#125;</div>
          </div>
          <div className="py-4 font-ft-reg">
            <div>design + creative code</div>
            <div>graphically inclined nostalgia merchant</div>
          </div>
        </div>
      </header>
    </div>
  )
}
