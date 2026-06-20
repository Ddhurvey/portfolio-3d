'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Ddhurvey' },
    { icon: Linkedin, href: 'https://linkedin.com/in/devendra-dhurvey' },
    { icon: Instagram, href: 'https://instagram.com' },
    { icon: Mail, href: 'mailto:devendra@example.com' },
  ]

  return (
    <footer className="relative bg-primary border-t border-white border-opacity-10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent mb-2">
              Devendra Dhurvey
            </h3>
            <p className="text-gray-400">Full Stack Developer & BCA Student</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#projects" className="hover:text-secondary transition">Projects</a></li>
              <li><a href="#about" className="hover:text-secondary transition">About</a></li>
              <li><a href="#blog" className="hover:text-secondary transition">Blog</a></li>
              <li><a href="#contact" className="hover:text-secondary transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-white bg-opacity-5 rounded-lg text-secondary hover:bg-secondary hover:text-primary transition"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-10 pt-8 text-center text-gray-400">
          <p>© {currentYear} Devendra Dhurvey. All rights reserved.</p>
          <p className="text-sm mt-2">Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>
  )
}
