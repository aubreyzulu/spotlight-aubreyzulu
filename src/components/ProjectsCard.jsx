import React from 'react'
import { ExternalLink, Github, ArrowUpRight, Sparkles } from 'lucide-react'

// interface ProjectCardProps {
//   title: string;
//   description: string;
//   image: string;
//   technologies: string[];
//   githubUrl?: string;
//   liveUrl?: string;
//   featured?: boolean;
// }

export function ProjectsCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  featured,
}) {
  console.log('dfdf', title)
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[#2d1b69]/20 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="absolute -right-12 -top-12 z-10 rotate-12 transform rounded-xl bg-gradient-to-br from-[#6b46c1]/20 to-[#ff6b6b]/20 p-20 transition-transform duration-500 group-hover:rotate-6" />

      {featured && (
        <div className="absolute left-4 top-4 z-20 flex items-center gap-1 rounded-full bg-[#2d1b69]/60 px-3 py-1 text-sm font-medium text-[#ff6b6b] shadow-sm backdrop-blur-sm">
          <Sparkles size={14} />
          <span>Featured</span>
        </div>
      )}

      <div className="relative aspect-video w-full overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0118]/90 via-[#0a0118]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
          <div className="flex gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 rounded-full bg-[#2d1b69]/60 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-[#2d1b69]/80"
              >
                <Github size={16} />
                <span>View Code</span>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 rounded-full bg-[#ff6b6b]/80 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-[#ff6b6b]"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="relative z-20 p-6">
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <ArrowUpRight className="h-5 w-5 text-[#ff6b6b] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="relative overflow-hidden rounded-full bg-[#2d1b69]/40 px-3 py-1 text-sm text-gray-200 transition-colors duration-300 hover:bg-[#2d1b69]/60"
            >
              <span className="relative z-10">{tech}</span>
              <div className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-r from-[#6b46c1]/40 to-[#ff6b6b]/40 transition-transform duration-300 hover:translate-y-0" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
