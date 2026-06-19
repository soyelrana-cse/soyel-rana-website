export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-bold mb-8 text-blue-400">
        Contact Me
      </h1>

      <div className="max-w-3xl space-y-6">

        <div className="border border-gray-700 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2">
            Email
          </h2>

          <a
            href="mailto:soyelranahalder.learning@gmail.com"
            className="text-blue-400 hover:underline"
          >
            soyelranahalder.learning@gmail.com
          </a>
        </div>

        <div className="border border-gray-700 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2">
            GitHub
          </h2>

          <a
            href="https://github.com/soyelrana-cse"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            github.com/soyelrana-cse
          </a>
        </div>

        <div className="border border-gray-700 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2">
            LinkedIn
          </h2>

          <a
            href="https://www.linkedin.com/in/soyel-rana-halder-68969540b"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            View LinkedIn Profile
          </a>
        </div>

      </div>
    </main>
  );
}