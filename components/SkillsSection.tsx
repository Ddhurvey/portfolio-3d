'use client'

import { motion } from 'framer-motion'

interface Skill {
  name: string
  category: string
  level: number
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'Frontend', level: 90 },
  { name: 'Next.js', category: 'Frontend', level: 85 },
  { name: 'TypeScript', category: 'Frontend', level: 80 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 90 },
  { name: 'JavaScript', category: 'Frontend', level: 85 },
  { name: 'HTML/CSS', category: 'Frontend', level: 95 },

  // Backend
  { name: 'Node.js', category: 'Backend', level: 80 },
  { name: 'Express.js', category: 'Backend', level: 80 },
  { name: 'PostgreSQL', category: 'Backend', level: 75 },
  { name: 'Prisma', category: 'Backend', level: 78 },
  { name: 'REST APIs', category: 'Backend', level: 85 },

  // Tools
  { name: 'Git', category: 'Tools', level: 85 },
  { name: 'GitHub', category: 'Tools', level: 85 },
  { name: 'Vercel', category: 'Tools', level: 80 },
  { name: 'Figma', category: 'Tools', level: 75 },
]

export default function SkillsSection() {
  const categories = Array.from(new Set(skills.map((s) => s.category)))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative min-h-screen flex items-center py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-purple-900 to-primary -z-10" />

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Skills & <span className="text-secondary">Expertise</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit of technologies and tools I use to build amazing web experiences
            </p>
          </motion.div>

          {/* Skills Grid by Category */}
          <div className="space-y-12">
            {categories.map((category) => (
              <motion.div key={category} variants={itemVariants}>
                <h3 className="text-2xl font-bold text-secondary mb-6">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white bg-opacity-5 backdrop-blur-lg border border-white border-opacity-10 rounded-xl p-6 hover:border-secondary hover:border-opacity-30 transition"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold text-white">{skill.name}</h4>
                          <span className="text-secondary font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-white bg-opacity-5 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: idx * 0.05 }}
                            className="h-full bg-gradient-to-r from-secondary to-blue-500 rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
