import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 flex items-center justify-center px-4 sm:px-6 py-10 sm:py-16">
      <div className="max-w-4xl text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
          About Me
        </h1>

        {/* Intro */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8">
          Hi 👋, I’m{" "}
          <span className="font-semibold">Ravi Ranjan Rajput</span>.
          <br />
          I’m a passionate{" "}
          <span className="text-pink-600">React Developer</span> who loves
          building modern, fast and user-friendly web applications.
        </p>

        {/* Skills Section */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
          <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm sm:text-base font-medium">
            React
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm sm:text-base font-medium">
            JavaScript
          </span>
          <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm sm:text-base font-medium">
            Tailwind CSS
          </span>
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm sm:text-base font-medium">
            Node.js
          </span>
        </div>

        {/* Contact Button */}
        <a
          href="mailto:ravi@example.com"
          className="inline-block w-full sm:w-auto px-6 py-3 bg-pink-600 text-white font-medium rounded-lg shadow hover:bg-pink-700 transition"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default About;
