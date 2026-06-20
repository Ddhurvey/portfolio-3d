'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { LogOut, Plus, Trash2, Edit } from 'lucide-react'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('projects')

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
    <motion.main
      className="min-h-screen bg-primary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Sidebar */}
      <div className="flex h-screen">
        <div className="w-64 bg-black bg-opacity-20 border-r border-white border-opacity-10 p-6 flex flex-col">
          <Link href="/" className="text-2xl font-bold text-secondary mb-8">
            DD Admin
          </Link>

          <nav className="space-y-2 flex-1">
            {[
              { id: 'projects', label: 'Projects' },
              { id: 'blogs', label: 'Blogs' },
              { id: 'messages', label: 'Messages' },
              { id: 'skills', label: 'Skills' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  activeTab === item.id
                    ? 'bg-secondary text-primary font-semibold'
                    : 'text-gray-300 hover:text-secondary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button className="flex items-center gap-2 px-4 py-2 text-red-400 hover:text-red-300 transition w-full">
            <LogOut size={18} />
            Logout
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Header */}
              <motion.div variants={itemVariants} className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold capitalize">
                  {activeTab === 'projects' && 'Manage Projects'}
                  {activeTab === 'blogs' && 'Manage Blogs'}
                  {activeTab === 'messages' && 'Contact Messages'}
                  {activeTab === 'skills' && 'Manage Skills'}
                </h1>
                <button className="flex items-center gap-2 px-6 py-3 bg-secondary text-primary rounded-lg font-semibold hover:bg-opacity-90 transition">
                  <Plus size={20} />
                  Add New
                </button>
              </motion.div>

              {/* Content */}
              {activeTab === 'projects' && (
                <motion.div variants={itemVariants}>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl p-6 flex justify-between items-center hover:border-opacity-30 transition"
                      >
                        <div>
                          <h3 className="text-lg font-semibold">Project {i}</h3>
                          <p className="text-gray-400 text-sm">React, Next.js, Tailwind</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-2 text-blue-400 hover:bg-blue-400 hover:bg-opacity-10 rounded transition">
                            <Edit size={20} />
                          </button>
                          <button className="p-2 text-red-400 hover:bg-red-400 hover:bg-opacity-10 rounded transition">
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'blogs' && (
                <motion.div variants={itemVariants}>
                  <div className="space-y-4">
                    {[1, 2].map((i) => (
                      <div
                        key={i}
                        className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl p-6 flex justify-between items-center hover:border-opacity-30 transition"
                      >
                        <div>
                          <h3 className="text-lg font-semibold">Blog Post {i}</h3>
                          <p className="text-gray-400 text-sm">Published • 2 days ago</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-2 text-blue-400 hover:bg-blue-400 hover:bg-opacity-10 rounded transition">
                            <Edit size={20} />
                          </button>
                          <button className="p-2 text-red-400 hover:bg-red-400 hover:bg-opacity-10 rounded transition">
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'messages' && (
                <motion.div variants={itemVariants}>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl p-6 hover:border-opacity-30 transition"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-semibold">John Doe</h3>
                            <p className="text-gray-400 text-sm">john@example.com</p>
                          </div>
                          <span className="text-xs bg-secondary bg-opacity-20 text-secondary px-2 py-1 rounded">
                            New
                          </span>
                        </div>
                        <p className="text-gray-300">Hello, I'm interested in working together...</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'skills' && (
                <motion.div variants={itemVariants}>
                  <div className="space-y-4">
                    {['Frontend', 'Backend', 'Tools'].map((category) => (
                      <div key={category} className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl p-6">
                        <h3 className="text-lg font-semibold mb-4">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                          {['React', 'Next.js', 'TypeScript'].map((skill) => (
                            <span
                              key={skill}
                              className="bg-secondary bg-opacity-20 text-secondary px-3 py-1 rounded text-sm flex items-center gap-2"
                            >
                              {skill}
                              <Trash2 size={14} className="cursor-pointer hover:text-red-400" />
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.main>
  )
}
