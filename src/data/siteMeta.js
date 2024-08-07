import BongoHive from '@/images/logos/BongoHive.svg'
import Duniya from '@/images/logos/Duniya.svg.svg'
import Lassod from '@/images/logos/Lassod.svg'
import Oyoyo from '@/images/logos/OYOYO.svg'
import Lea from '@/images/logos/lea.svg'

import Lumenalta from '@/images/logos/Lumenalta.svg'

const siteMeta = {
  title: 'Aubrey Zulu',
  description: 'Aubrey Zulu is a Full Stack Software Developer',
  copyright: 'Aubrey Zulu',
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
    logo: BongoHive,
    start: '2023',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: 'Lassod',
    title: 'Backend Software Engineer',
    logo: Lassod,
    start: '2022',
    end: '2024',
  },
  {
    company: 'Lumenalta (formerly Clevertech)',
    title: 'Front End Developer',
    logo: Lumenalta,
    start: '2024',
    end: '2024',
  },
  {
    company: 'BongoHive',
    title: 'Software Developer',
    logo: BongoHive,
    start: '2020',
    end: '2023',
  },
]
export const projects = [
  {
    name: 'OYOYO Events',
    description:
      'Oyoyo Events is an AI-powered event management platform designed to simplify and enhance the event planning experience. It connects event planners, vendors, and attendees, offering tools to optimize event layouts, streamline coordination, and facilitate secure transactions. The platform helps attendees discover and register for events, while vendors can showcase their services and manage their profiles. It aims to minimize planning time, reduce costs, and provide extensive exposure for vendors, creating seamless and memorable event experiences.',
    link: { href: 'https://www.event.oyoyoapp.com/', label: 'oyoyoapp.com' },
    logo: Oyoyo,
  },
  {
    name: 'Duniya Health Care',
    description:
      'Duniya Health Care is a platform designed to help retail pharmacies in Africa source medicines from trusted wholesalers. It offers a one-stop shop for purchasing from various wholesalers and manufacturers, ensuring free and timely delivery of orders. The service aims to prevent stock-outs and supports both urban and rural pharmacies by providing efficient and reliable logistics. Duniya Health Care is committed to enhancing primary healthcare accessibility across Africa',
    link: {
      href: 'https://duniyahealthcare.com/',
      label: 'Duniya Health Care',
    },
    logo: Duniya,
  },
  {
    name: 'The Youth Development Fund (YDF)',
    description:
      'The Youth Development Fund (YDF) website by the Local Enterprise Authority (LEA) in Botswana is designed to support young entrepreneurs. It provides information on funding opportunities, application processes, and success stories to help youth grow their businesses. The site aims to empower young people by offering financial support, resources, and mentorship, contributing to economic development',
    link: {
      href: 'https://ydf.lea.co.bw/#/',
      label: 'ydf.lea.co.bw',
    },
    logo: Lea,
  },
  {
    name: 'Authentication Service',
    description:
      'The Authentication Service project is a secure and robust authentication system built using Next.js, Next-auth (Auth.js), Prisma, and Tailwind CSS. It offers a range of features including multi-provider authentication (email/password, Google, GitHub), forgot password functionality, email verification, two-factor authentication (2FA), and role-based access control. With user-friendly components for login, registration, and account management, this project ensures a seamless and secure user experience.',
    link: {
      href: 'https://auth-service.aubreyzulu.com',
      label: 'authentication service',
    },
    logo: Duniya,
  },
]

export default siteMeta
