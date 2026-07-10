export default function Home() {
  return (
    <main style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-800 bg-black/90 px-8 py-4 backdrop-blur">
        <h1 className="text-xl font-bold text-blue-400">
          Soyel Rana
        </h1>

       <div className="flex gap-6 text-sm">
  <a href="/about" className="hover:text-blue-400">
    About
  </a>

  <a href="/resume" className="hover:text-blue-400">
    Resume
  </a>

  <a href="/projects" className="hover:text-blue-400">
    Projects
  </a>

  <a href="/contact" className="hover:text-blue-400">
    Contact
  </a>
</div>
      </nav>

      {/* Hero */}
      <div className="mt-10 flex gap-4">
  <a
    href="/resume.pdf"
    target="_blank"
    className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
  >
    View Resume
  </a>

  <a
    href="https://github.com/soyelrana-cse"
    target="_blank"
    className="rounded-lg border border-gray-500 px-6 py-3 font-semibold hover:bg-gray-900"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/soyel-rana-halder-68969540b"
    target="_blank"
    className="rounded-lg border border-blue-500 px-6 py-3 font-semibold hover:bg-blue-950"
  >
    LinkedIn
  </a>
</div>
      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-5xl px-6 py-20"
      >
        <h2 className="mb-6 text-3xl font-bold text-blue-400">
          About Me
        </h2>

        <p className="text-gray-300">
          I am a B.Tech CSE (Cyber Security) student at
          Brainware University, passionate about software
          development, cybersecurity, Linux and continuous learning.
        </p>
      </section>

      {/* Resume */}
      <section
        id="resume"
        className="mx-auto max-w-5xl px-6 py-20"
      >
        <h2 className="mb-6 text-3xl font-bold text-blue-400">
          Resume
        </h2>

        <div className="rounded-lg border border-gray-800 p-6 text-gray-400">
          Resume PDF will be embedded here.
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-5xl px-6 py-20"
      >
        <h2 className="mb-6 text-3xl font-bold text-blue-400">
          Projects
        </h2>

        <div className="rounded-lg border border-gray-800 p-6 text-gray-400">
          Projects will be added here.
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-5xl px-6 py-20"
      >
        <h2 className="mb-6 text-3xl font-bold text-blue-400">
          Contact
        </h2>

        <p className="text-gray-300">
          Email: your-email@example.com
        </p>
      </section>

      <footer className="border-t border-gray-800 py-6 text-center text-gray-500">
        © 2026 Soyel Rana
      </footer>
    </main>
  );
}