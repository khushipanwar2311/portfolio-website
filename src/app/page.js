import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <main className="max-w-4xl mx-auto text-center">
        {/* Profile Section */}
        <div className="mb-12">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              fill
              className="rounded-full object-cover border-4 border-blue-500"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Hi, I'm KHUSHI PANWAR! 👋
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Welcome to my portfolio website. I'm a Third Year Engineering Student passionate about coding! 🚀
          </p>
          <p className="text-lg text-gray-700">
            I'm learning web development and excited to build amazing things!
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">My Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-blue-600">HTML & CSS</h3>
              <p className="text-sm text-gray-600">Strong Foundation</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-blue-600">JavaScript</h3>
              <p className="text-sm text-gray-600">Proficient</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-blue-600">React</h3>
              <p className="text-sm text-gray-600">Experienced</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-blue-600">Tailwind CSS</h3>
              <p className="text-sm text-gray-600">Skilled</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-blue-600">Bootstrap</h3>
              <p className="text-sm text-gray-600">Proficient</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-blue-600">Next.js</h3>
              <p className="text-sm text-gray-600">Learning</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-blue-600">Node.js</h3>
              <p className="text-sm text-gray-600">Currently Learning</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-blue-600">Full-Stack</h3>
              <p className="text-sm text-gray-600">Aspiring</p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Calculator</h3>
              <p className="text-gray-600 mb-3">A functional calculator built with HTML, CSS, and JavaScript</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">HTML</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">CSS</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">JavaScript</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Color Picker</h3>
              <p className="text-gray-600 mb-3">Interactive color picker with RGB and HEX color generation</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">HTML</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">CSS</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">JavaScript</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Password Generator</h3>
              <p className="text-gray-600 mb-3">Secure password generator with customizable options</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">HTML</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">CSS</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">JavaScript</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Weather App</h3>
              <p className="text-gray-600 mb-3">Real-time weather application using external APIs</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">HTML</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">CSS</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">JavaScript</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">API</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Clock App</h3>
              <p className="text-gray-600 mb-3">Digital clock with multiple timezone support</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">HTML</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">CSS</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">JavaScript</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">More Projects</h3>
              <p className="text-gray-600 mb-3">Various other applications showcasing my growing skills</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">React</span>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Tailwind</span>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Bootstrap</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-4">
            I'm always excited to learn new things and collaborate on projects!
          </p>
          <div className="flex flex-wrap gap-4 mb-4">
            <a 
              href="mailto:khushipanwar2311@gmail.com"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z"/>
              </svg>
              Email
            </a>
            <a 
              href="https://github.com/khushipanwar2311" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/khushi-panwar-58582a293/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
          <a 
            href="/about" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Learn More About Me
          </a>
        </div>
      </main>
    </div>
  );
}
