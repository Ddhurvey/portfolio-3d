'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      // API call will be added
      console.log('Form submitted:', formData)
      setFormData({ name: '', email: '', subject: '', message: '' })
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'devendra@example.com', href: 'mailto:devendra@example.com' },
    { icon: Phone, label: 'Phone', value: '+91 XXXXXXXXXX', href: 'tel:+91' },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Ddhurvey', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/devendra-dhurvey', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ]

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
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-indigo-900 to-primary -z-10" />

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
              Get in <span className="text-secondary">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Have a project in mind? Let's talk about it!
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.form onSubmit={handleSubmit} variants={itemVariants} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-secondary transition"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-secondary transition"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-secondary transition"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-6 py-3 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-secondary transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-secondary text-primary rounded-lg font-semibold hover:bg-opacity-90 transition disabled:opacity-50"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </motion.form>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={idx}
                      href={info.href}
                      className="flex items-center gap-4 p-4 bg-white bg-opacity-5 backdrop-blur-lg border border-white border-opacity-10 rounded-lg hover:border-secondary hover:border-opacity-30 transition"
                    >
                      <Icon className="w-6 h-6 text-secondary" />
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        <p className="font-semibold text-white">{info.value}</p>
                      </div>
                    </a>
                  )
                })}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg text-secondary hover:bg-secondary hover:text-primary transition"
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
