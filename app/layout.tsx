import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Devendra Dhurvey - Full Stack Developer',
  description: 'Premium 3D portfolio website of Devendra Dhurvey, Full Stack Developer and BCA Student. Showcasing projects, skills, and experience.',
  keywords: 'Full Stack Developer, Next.js, React, Portfolio, Web Developer',
  authors: [{ name: 'Devendra Dhurvey', url: 'https://devendra.dev' }],
  creator: 'Devendra Dhurvey',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devendra.dev',
    title: 'Devendra Dhurvey - Full Stack Developer',
    description: 'Premium 3D portfolio website of Devendra Dhurvey',
    siteName: 'Devendra Dhurvey',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devendra Dhurvey - Full Stack Developer',
    description: 'Premium 3D portfolio website',
    creator: '@Ddhurvey',
  },
}

import './globals.css'
import type { ReactNode } from 'react'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0A0E27" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-primary text-white">
        {children}
      </body>
    </html>
  )
}
