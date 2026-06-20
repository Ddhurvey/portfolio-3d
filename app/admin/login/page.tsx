'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // API call for authentication
      // For now just redirect
      window.location.href = '/admin'
    } catch (err) {
      setError('Invalid credentials')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary via-primary to-blue-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <div className="bg-white bg-opacity-5 backdrop-blur-lg border border-white border-opacity-10 rounded-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-2">Admin Login</h1>
          <p className="text-center text-gray-400 mb-8">Manage your portfolio</p>

          {error && (
            <div className="mb-4 p-4 bg-red-400 bg-opacity-10 border border-red-400 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                required
                className="w-full px-4 py-3 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-secondary transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-secondary transition"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-secondary text-primary rounded-lg font-semibold hover:bg-opacity-90 transition disabled:opacity-50"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            <Link href="/" className="text-secondary hover:text-white transition">
              Back to Portfolio
            </Link>
          </p>
        </div>
      </motion.div>
    </main>
  )
}
