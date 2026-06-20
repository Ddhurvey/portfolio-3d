'use client'

import { motion } from 'framer-motion'
import { Code2, Zap, TrendingUp } from 'lucide-react'

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const stats = [
    { label: 'Projects Completed', value: '10+', icon: Code2 },
    { label: 'Technologies', value: '15+', icon: Zap },
    { label: 'Certifications', value: '5+', icon: TrendingUp },
  ]

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
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              About <span className="text-secondary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full" />
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer and BCA student at IGNOU. My journey started
                with Mrida Education and NavGurukul, where I learned the fundamentals of web development.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Currently, I'm focused on building premium web experiences using modern technologies
                like Next.js, React, Node.js, and Three.js. I love creating interactive 3D web
                experiences and beautiful user interfaces.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                As an E-commerce Operations Intern at The Indi Mums, I gained hands-on experience
                in order management, shipping operations, and inventory management.
              </p>

              <div className="flex gap-4 pt-4">
                <button className="px-6 py-2 bg-secondary text-primary rounded-lg font-semibold hover:bg-opacity-90 transition">
                  Read More
                </button>
                <button className="px-6 py-2 border-2 border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-primary transition">
                  Download CV
                </button>
              </div>
            </motion.div>

            {/* Right - Stats */}
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="bg-white bg-opacity-5 backdrop-blur-lg border border-white border-opacity-10 rounded-xl p-6 hover:border-opacity-30 transition"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                          {stat.value}
                        </p>
                        <p className="text-gray-400">{stat.label}</p>
                      </div>
                      <Icon className="w-8 h-8 text-secondary opacity-30" />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
