export default function ResumePage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        My Resume
      </h1>

      <div className="flex gap-4 mb-8">
        <a
          href="/resume.pdf"
          target="_blank"
          className="bg-blue-600 px-5 py-3 rounded-lg"
        >
          Open Resume
        </a>

        <a
          href="/resume.pdf"
          download
          className="border border-white px-5 py-3 rounded-lg"
        >
          Download Resume
        </a>
      </div>

      <iframe
        src="/resume.pdf"
        className="w-full h-[900px] rounded-lg border border-gray-700"
      />
    </main>
  );
}