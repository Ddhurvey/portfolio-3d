'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

interface ProjectCard {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  github: string
  live: string
}

const projects: ProjectCard[] = [
  {
    id: 1,
    title: 'NavGurukul Kitchen Management System',
    description: 'Complete kitchen operations management system with real-time order tracking and inventory management.',
    technologies: ['Next.js', 'React', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    image: '/projects/kitchen-system.jpg',
    github: 'https://github.com/Ddhurvey/kitchen-system',
    live: 'https://kitchen-system.vercel.app',
  },
  {
    id: 2,
    title: 'Swiggy Clone',
    description: 'Feature-rich food delivery application with real-time order tracking and payment integration.',
    technologies: ['React', 'Redux', 'Firebase', 'Stripe', 'Tailwind CSS'],
    image: '/projects/swiggy-clone.jpg',
    github: 'https://github.com/Ddhurvey/swiggy-clone',
    live: 'https://swiggy-clone.vercel.app',
  },
  {
    id: 3,
    title: 'Recipe App',
    description: 'Modern recipe discovery app with search, filtering, and saved recipes functionality.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'API Integration'],
    image: '/projects/recipe-app.jpg',
    github: 'https://github.com/Ddhurvey/recipe-app',
    live: 'https://recipe-app.vercel.app',
  },
  {
    id: 4,
    title: 'Pet Adoption Platform',
    description: 'Complete pet adoption platform with listings, filtering, and adoption request management.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Cloudinary', 'Tailwind CSS'],
    image: '/projects/pet-adoption.jpg',
    github: 'https://github.com/Ddhurvey/pet-adoption',
    live: 'https://pet-adoption.vercel.app',
  },
]

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative min-h-screen flex items-center py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-blue-900 to-primary -z-10" />

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Featured <span className="text-secondary">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg">
              A selection of my recent work and personal projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-white bg-opacity-5 backdrop-blur-lg border border-white border-opacity-10 rounded-xl overflow-hidden hover:border-secondary hover:border-opacity-30 transition"
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-secondary to-blue-500 overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition" />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
                    <p className="text-sm font-semibold">{project.title}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-secondary bg-opacity-20 text-secondary px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-secondary hover:text-white transition"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-secondary hover:text-white transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <button className="px-8 py-4 bg-secondary text-primary rounded-lg font-semibold hover:bg-opacity-90 transition">
              View All Projects
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
