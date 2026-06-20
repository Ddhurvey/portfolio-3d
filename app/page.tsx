'use client'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary via-primary to-secondary">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Devendra Dhurvey</h1>
          <p className="text-xl text-secondary mb-8">Full Stack Developer & BCA Student</p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-secondary text-primary rounded-lg font-semibold hover:bg-opacity-90 transition">
              View Projects
            </button>
            <button className="px-8 py-3 border-2 border-secondary text-secondary rounded-lg font-semibold hover:bg-secondary hover:text-primary transition">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
