import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import placeholder from '@/images/placeholder.png'
import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { Header } from '@/components/Header'
import { LinkHover } from '@/components/LinkHover'
import VideoPlayer from '@/components/VideoPlayer'
function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300 h-6 w-6 transition" />
    </Link>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Planetaria',
      title: 'CEO',
      logo: logoPlanetaria,
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Airbnb',
      title: 'Product Designer',
      logo: logoAirbnb,
      start: '2014',
      end: '2019',
    },
    {
      company: 'Facebook',
      title: 'iOS Software Engineer',
      logo: logoFacebook,
      start: '2011',
      end: '2014',
    },
    {
      company: 'Starbucks',
      title: 'Shift Supervisor',
      logo: logoStarbucks,
      start: '2008',
      end: '2011',
    },
  ]

  return (
    <div className="border-zinc-100 dark:border-zinc-700/40 'var(--font-ftreg) rounded-2xl border  p-6">
      <h2 className="text-zinc-900 dark:text-zinc-100 flex text-sm font-semibold">
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="shadow-zinc-800/5 ring-zinc-900/5 dark:border-zinc-700/50 dark:bg-zinc-800 relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 dark:border dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="text-zinc-900 dark:text-zinc-100 w-full flex-none text-sm font-medium">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-zinc-500 dark:text-zinc-400 text-xs">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="text-zinc-400 dark:text-zinc-500 ml-auto text-xs"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'bg-zinc-100 dark:bg-zinc-800 relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>len shirase, design and code</title>
        <meta
          name="description"
          content="Len Shirase, I'm a designer and developer based in Los Angeles, California."
        />
      </Head>
      <div className="sm:h-screen sm:w-screen">
        <Header bgWhite />
        <div className="inline-flex flex-none flex-col px-6 text-xs sm:px-12">
          <div className="font-ft-italic text-sm">selected work</div>
          <ol className="z-50 font-ft-serif">
            {/* <Link href="coop" passHref>
              <li>1. co-op solutions</li>
            </Link> */}
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
          </ol>
        </div>
        <div className="flex items-center justify-center py-28">
          {/* <Image src={placeholder} alt="" /> */}
          {/* <AsciiSketch1 /> */}
          <VideoPlayer />
        </div>
      </div>
      {/* <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container> */}
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
