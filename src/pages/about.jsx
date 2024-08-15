/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/aubrey-head.jpg'
import siteMeta from '@/data/siteMeta'
import { NextSeo } from 'next-seo'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <NextSeo
        title="About - Aubrey Zulu"
        description={siteMeta.description}
        canonical="https://aubreyzulu.com/about"
        openGraph={{
          url: 'https://aubreyzulu.com/about',
          images: [
            {
              url: `https://og.aubreyzulu.com/api/og?title=About&desc=${siteMeta.description}`,
              width: 1200,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
          siteName: 'aubreyzulu.com',
        }}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hi, I'm Aubrey, a Software Engineer driven by a passion for
              solving complex problems and fostering innovation through
              collaboration.
            </h1>
            <div className="prose mt-6 space-y-7 text-lg text-zinc-600 dark:prose-invert dark:text-zinc-400">
              <p>
                Throughout my career, I’ve consistently sought out challenges
                that require creative thinking and innovative solutions. My
                approach to software development is rooted in the belief that
                the best results come from teamwork and diverse perspectives.
                Whether tackling intricate algorithms or designing user-friendly
                interfaces, I thrive on collaborating with others to turn ideas
                into reality.
              </p>
              <p>
                Problem-solving is at the heart of what I do. Each project
                presents a unique puzzle, and I’m dedicated to finding the most
                efficient and effective solutions. From integrating cutting-edge
                technologies to refining existing systems, I focus on delivering
                results that are not only functional but also scalable and
                sustainable.
              </p>
              <p>
                Innovation isn’t just about the latest technology—it’s about
                applying fresh thinking to deliver better outcomes. I pride
                myself on staying curious and continuously learning, ensuring
                that I bring the most up-to-date knowledge and practices to
                every project. But I know that true innovation happens when
                great minds work together, which is why I value collaboration
                and teamwork as essential elements of my process.
              </p>
              <p>
                As you explore my portfolio, you’ll see how problem-solving,
                innovation, and collaboration come together in the work I do.
                Whether you’re here to collaborate, share ideas, or simply learn
                more, I’m excited to connect and create solutions that make a
                difference.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={siteMeta.author.twitter} icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              {/* <SocialLink href={siteMeta.author.mastodon} icon={MastodonIcon} className="mt-4">
                Follow on Mastodon
              </SocialLink> */}
              <SocialLink
                href={siteMeta.author.instagram}
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href={siteMeta.author.github}
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href={siteMeta.author.linkedin}
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href={`mailto:${siteMeta.author.email}`}
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                {siteMeta.author.email}
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
