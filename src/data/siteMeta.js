import logoAmazon from '@/images/logos/aws.svg'
import logoClarity from '@/images/logos/clarity.jpg'
import logoMicrosoft from '@/images/logos/azure.svg'
import logoXOR from '@/images/logos/xor.jpg'
import logoVanilla from '@/images/logos/vanilla.svg'
import logoFleek from '@/images/logos/fleeksvg.svg'
import logoUblue from '@/images/logos/ublue.png'

import logoGolang from '@/images/logos/icons8-golang.svg'
import logoKubernetes from '@/images/logos/kubernetes.svg'
import logoCaptainhook from '@/images/logos/captainhook.svg'
const siteMeta = {
  title: 'Aubrey Zulu',
  description:
    'Aubrey Zulu is a developer advocate, keynote speaker, author, and open source practitioner.',
  copyright: 'Aubrey Zulu, CC-BY-SA',
  author: {
    name: 'Aubrey Zulu',
    email: 'me@aubreydarious@gmail.com',
    twitter: 'https://twitter.com/_AubreyZulu',
    instagram: 'https://instagram.com/aubreyzulus',
    github: 'https://github.com/aubreyzulu',
    linkedin: 'https://linkedin.com/in/aubreyzulu',
  },
  siteUrl: 'https://aubreyzulu.com',
}
export const resume = [
  {
    company: 'BongoHive',
    title: 'Technical Lead Developer',
    logo: logoAmazon,
    start: '2022',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: 'Lassod',
    title: 'Backend Software Engineer',
    logo: logoMicrosoft,
    start: '2017',
    end: '2022',
  },
  {
    company: 'Lumenalta (formerly Clevertech)',
    title: 'Front End Developer',
    logo: logoXOR,
    start: '2014',
    end: '2016',
  },
  {
    company: 'BongoHive',
    title: 'Software Developer',
    logo: logoClarity,
    start: '2008',
    end: '2014',
  },
]
export const projects = [
  {
    name: 'OYOYO Events',
    description:
      'Oyoyo Events is an AI-powered event management platform designed to simplify and enhance the event planning experience. It connects event planners, vendors, and attendees, offering tools to optimize event layouts, streamline coordination, and facilitate secure transactions. The platform helps attendees discover and register for events, while vendors can showcase their services and manage their profiles. It aims to minimize planning time, reduce costs, and provide extensive exposure for vendors, creating seamless and memorable event experiences.',
    link: { href: 'https://oyoyoapp.com', label: 'oyoyoapp.com' },
    logo: logoFleek,
  },
  {
    name: 'Universal Blue',
    description: 'Custom Operating System images based on Fedora.',
    link: { href: 'https://ublue.it', label: 'Universal Blue' },
    logo: logoUblue,
  },
  {
    name: 'Bluefin',
    description:
      'The next generation Linux workstation. Built for cloud-native, using cloud-native.',
    link: { href: 'https://projectbluefin.io', label: 'Bluefin' },
    logo: logoUblue,
  },
  {
    name: 'Vanilla OS',
    description:
      'Vanilla OS is an immutable and atomic Ubuntu Linux-based Point Release distribution, that receives updates at the right time, neither before nor after, without sacrificing security and functionality.',
    link: { href: 'https://vanillaos.org', label: 'vanillaos.org' },
    logo: logoVanilla,
  },
  {
    name: 'Captain Hook',
    description: 'Custom commands as webhooks.',
    link: {
      href: 'https://github.com/bketelsen/captainhook',
      label: 'github.com',
    },
    logo: logoCaptainhook,
  },
  {
    name: 'Kubernetes',
    description: 'Production-Grade Container Scheduling and Management',
    link: {
      href: 'https://github.com/kubernetes/kubernetes',
      label: 'github.com',
    },
    logo: logoKubernetes,
  },
  {
    name: 'Go',
    description: 'Build fast, reliable, and efficient software at scale',
    link: { href: 'https://go.dev', label: 'go.dev' },
    logo: logoGolang,
  },
]

export default siteMeta
