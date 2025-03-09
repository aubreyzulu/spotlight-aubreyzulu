import React, { useState } from 'react'
import { ProjectsCard } from '@/components/ProjectsCard'
import { ProjectSlideshow } from '@/components/ProjectSlideshow'
import {
  Code2,
  Smartphone,
  Palette,
  Layers,
  Brain,
  Bot,
  Sparkles,
} from 'lucide-react'

const projects = [
  {
    title: 'Oyoyo Events',
    description:
      'Oyoyo Events simplifies event planning using AI, connecting planners, vendors, and attendees to optimize layouts, coordination, and transactions',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600',
    technologies: [
      'Python',
      'PyTorch',
      'React',
      'NodeJs',
      'Kafka',
      'Postgres',
      'TensorFlow',
      'NestJs',
    ],
    githubUrl: '#',
    liveUrl: 'https://www.event.oyoyoapp.com/',
    category: 'AI',
    featured: true,
  },
  {
    title: 'Duniya Health Care',
    description:
      'Duniya Health Care enables African pharmacies to access medicines from wholesalers, ensuring free, prompt delivery and dependable logistics',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600',
    technologies: ['TensorFlow', 'Node.js', 'React', 'Prisma', 'Postgres'],
    githubUrl: '#',
    liveUrl: 'https://duniyahealthcare.com',
    category: 'Web',
    featured: true,
  },
  {
    title: 'The Youth Development Fund (YDF)',
    description:
      'The LEA’s YDF portal in Botswana provides funding opportunities, application steps, success stories, and mentorship to nurture entrepreneurs',
    image:
      'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600',
    technologies: ['React', 'Node.js', 'MongoDB', 'Firebase'],
    githubUrl: '#',
    liveUrl: 'https://ydf.lea.co.bw/#/',
    category: 'Web',
  },
  {
    title: 'Offline Expense Tracker',
    description:
      ' A React Native app built with Expo that tracks income and expenses offline, featuring transaction categorization, history, and analytics',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600',
    technologies: ['React Native', 'Firebase', 'Tailwind CSS', 'SQL Lite'],
    githubUrl: 'https://github.com/aubreyzulu/expense-tracker-app',
    liveUrl: '#',
    category: 'Mobile',
  },

  {
    title: 'ML-Powered Recommendation Engine',
    description:
      'A sophisticated recommendation system using collaborative filtering and deep learning to provide personalized content suggestions.',
    image:
      'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&q=80&w=1600',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
    githubUrl: 'https://github.com/aubreyzulu/recommendation-engine',
    liveUrl: '#',
    category: 'AI',
    featured: true,
  },
]

const categories = [
  { id: 'All', icon: Layers, label: 'All Projects' },
  { id: 'AI', icon: Brain, label: 'AI & ML' },
  { id: 'Web', icon: Code2, label: 'Web Apps' },
  { id: 'Mobile', icon: Smartphone, label: 'Mobile Apps' },
  { id: 'Design', icon: Palette, label: 'UI/UX Design' },
]

// type Category = typeof categories[number]["id"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === 'All' || project.category === selectedCategory
  )
  console.log('projects', filteredProjects)
  const slideshowImages = projects
    .filter((project) => project.featured)
    .map((project) => ({
      url: project.image,
      title: project.title,
    }))

  return (
    <section className="relative overflow-hidden bg-[#0a0118] py-24">
      {/* Enhanced background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-[#2d1b69]/30 to-[#ff6b6b]/20 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-[#6b46c1]/30 to-[#ff6b6b]/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-t from-[#2d1b69]/20 via-[#6b46c1]/20 to-[#ff6b6b]/20 blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')] opacity-50" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#2d1b69]/20 px-4 py-1.5 text-sm font-medium text-[#ff6b6b] shadow-sm backdrop-blur-sm">
            <Sparkles size={16} className="text-[#ff6b6b]" />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="relative mt-6 bg-gradient-to-r from-white via-[#ff6b6b] to-[#6b46c1] bg-clip-text text-5xl font-bold text-transparent sm:text-6xl">
            Featured Projects
            <div className="absolute -right-4 top-0 h-20 w-20 animate-[spin_10s_linear_infinite] rounded-full bg-gradient-to-r from-[#ff6b6b]/10 to-[#6b46c1]/10 blur-xl" />
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Explore my latest work and personal projects that showcase my skills
            and passion for creating meaningful digital experiences.
          </p>
        </div>

        {/* Slideshow */}
        {/* <ProjectSlideshow images={slideshowImages} /> */}

        <div className="mb-16 flex flex-wrap justify-center gap-3">
          {categories.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setSelectedCategory(id)}
              className={`group relative flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                selectedCategory === id
                  ? 'bg-gradient-to-r from-[#2d1b69] to-[#6b46c1] text-white shadow-lg shadow-[#6b46c1]/20'
                  : 'bg-[#2d1b69]/20 text-gray-300 hover:bg-[#2d1b69]/30 hover:shadow-md'
              }`}
            >
              <Icon
                size={18}
                className={`transition-transform duration-300 group-hover:scale-110 ${
                  selectedCategory === id ? 'text-white' : 'text-gray-400'
                }`}
              />
              <span>{label}</span>
              {selectedCategory === id && (
                <span className="absolute inset-0 -z-10 animate-pulse rounded-full bg-[#6b46c1]/20 blur-sm" />
              )}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="animate-[fadeInUp_0.5s_ease-out_forwards] opacity-0"
              style={{
                animationDelay: `${index * 150}ms`,
                transform: hoveredIndex === index ? 'scale(1.02)' : 'scale(1)',
                transition: 'transform 0.3s ease-out',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ProjectsCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
