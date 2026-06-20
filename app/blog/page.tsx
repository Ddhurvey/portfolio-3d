'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  category: string
  date: string
  image?: string
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js 15',
    slug: 'getting-started-nextjs-15',
    excerpt: 'Learn how to build modern web applications with Next.js 15...',
    category: 'Tutorial',
    date: '2024-06-15',
  },
  {
    id: '2',
    title: '3D Web Experiences with Three.js',
    slug: '3d-web-experiences-threejs',
    excerpt: 'Explore how to create stunning 3D experiences in the browser...',
    category: 'Advanced',
    date: '2024-06-10',
  },
  {
    id: '3',
    title: 'Full Stack Development Best Practices',
    slug: 'fullstack-best-practices',
    excerpt: 'Essential tips and tricks for building production-ready applications...',
    category: 'Guide',
    date: '2024-06-05',
  },
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Tutorial', 'Advanced', 'Guide']
  
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
    <main className="min-h-screen bg-primary pt-24">
      {/* Header */}
      <section className="relative py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Blog & <span className="text-secondary">Articles</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Insights on web development, design, and technology
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.input
              variants={itemVariants}
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-secondary transition"
            />

            <motion.div variants={itemVariants} className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    selectedCategory === category
                      ? 'bg-secondary text-primary'
                      : 'bg-white bg-opacity-5 text-secondary border border-white border-opacity-10 hover:border-opacity-30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-white bg-opacity-5 backdrop-blur-lg border border-white border-opacity-10 rounded-xl overflow-hidden hover:border-secondary hover:border-opacity-30 transition"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-secondary to-blue-500 group-hover:from-blue-500 group-hover:to-purple-500 transition" />

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-secondary bg-opacity-20 text-secondary px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block text-secondary hover:text-white transition font-semibold"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">No articles found</p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  )
}
