import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you ${form.name}, we received your message!`)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-slate-100 px-6 py-12">
      <div className="w-full max-w-lg bg-white shadow rounded-xl p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-6 text-center">
          Contact Me
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-pink-600 text-white font-medium rounded-lg shadow hover:bg-pink-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
