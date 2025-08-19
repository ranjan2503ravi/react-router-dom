import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-white px-6 py-12">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-slate-800 mb-4">
          Welcome to My Website
        </h1>
        <p className="text-lg text-slate-600 mb-6">
          Hi 👋, I’m Ravi. I love creating fast, modern and responsive web
          applications using React & Tailwind CSS.
        </p>
        <a
          href="/about"
          className="inline-block px-6 py-3 bg-pink-600 text-white font-medium rounded-lg shadow hover:bg-pink-700 transition"
        >
          Learn More About Me
        </a>
      </div>
    </div>
  )
}

export default Home
