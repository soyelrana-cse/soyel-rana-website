export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-bold mb-8 text-blue-400">
        Projects
      </h1>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="border border-gray-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-2">
            Personal Website
          </h2>

          <p className="text-gray-300">
            Built using Next.js, Tailwind CSS,
            GitHub and modern web technologies.
          </p>

          <p className="mt-3 text-green-400">
            Status: In Progress
          </p>
        </div>

        <div className="border border-gray-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-2">
            Future Project
          </h2>

          <p className="text-gray-300">
            Coming Soon...
          </p>

          <p className="mt-3 text-yellow-400">
            Planned
          </p>
        </div>

      </div>
    </main>
  );
}