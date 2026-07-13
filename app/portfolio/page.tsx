import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Portfolio | Soyel Rana",
  description:
    "Portfolio of Soyel Rana, a B.Tech CSE (Cyber Security) student building secure, polished digital experiences.",
};

const technicalSkills = [
  {
    title: "Software Development",
    detail: "Responsive layouts, accessible interactions, and polished interfaces.",
  },
  {
    title: "Programming fundamentals",
    detail: "Problem-solving with C and Python, with a focus on readable code.",
  },
  {
    title: "Cyber Security",
    detail: "Cybersecurity foundations that inform dependable software decisions.",
  },
  {
    title: "Linux",
    detail: "Version control, Linux environments, and deployment-ready projects.",
  },
];

const stack = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Linux",
  "Python",
  "C",
  "VS Code",
  "Vercel",
];

const timeline = [
  {
    date: "2024",
    title: "Completed Higher Secondary",
    detail: "Built the academic foundation for a focused path into computer science.",
  },
  {
    date: "2025",
    title: "Started B.Tech",
    detail: "Began studying Computer Science Engineering with a Cyber Security specialization.",
  },
  {
    date: "2026",
    title: "Building personal platform",
    detail: "Turning learning into thoughtful digital products and a visible body of work.",
  },
  {
    date: "Future",
    title: "Software Engineer",
    detail: "Growing into an engineer who builds useful, secure, and refined experiences.",
  },
];

const GlassCard = ({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) => (
  <div
    className={`rounded-2xl border border-white/10 bg-white/[0.045] shadow-2xl shadow-cyan-500/[0.04] backdrop-blur-xl ${className}`}
  >
    {children}
  </div>
);

export default function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white selection:bg-cyan-300 selection:text-black">


      <section className="relative isolate border-b border-white/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(14,165,233,0.22),transparent_30%),radial-gradient(circle_at_85%_30%,rgba(56,189,248,0.15),transparent_25%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_72%)]"
        />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-black to-transparent" />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[1.12fr_0.88fr] lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-[0_0_40px_rgba(56,189,248,0.12)]">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,1)]" />
              Portfolio / 2026
            </p>
            <h1 className="mt-7 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
  Hi, I'm{" "}
  <span className="text-cyan-300">
    Soyel Rana
  </span>
  <br />
  Building with intention.
  <br />
  Learning in public.
</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              I'm a B.Tech CSE (Cyber Security) student passionate about software engineering, cybersecurity, Linux, and building modern, secure, and user-focused web applications. This platform documents my projects, learning journey, and continuous growth.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#journey"
                className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-7 py-4 font-bold text-black shadow-[0_0_35px_rgba(34,211,238,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-black"
              >
                Explore Portfolio
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
              >
                Download Resume
              </a>
            </div>
            <div className="mt-7 flex items-center gap-6 text-sm text-slate-300">
  <a
    href="https://github.com/soyelrana-cse"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:text-cyan-300"
  >
    GitHub →
  </a>

  <a
    href="https://www.linkedin.com/in/soyel-rana-halder-68969540b"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:text-cyan-300"
  >
    LinkedIn →
  </a>
</div>
          </div>

          <GlassCard className="relative overflow-hidden p-6 sm:p-8">
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-300/15 blur-3xl" />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Current trajectory</p>
                <p className="mt-3 text-3xl font-bold leading-tight">Software engineer in progress.</p>
              </div>
              <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-300/10 text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.22)]">
                ↗
              </span>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 border-y border-white/10 py-6">
              <div>
                <p className="text-sm text-slate-400">Education</p>
                <p className="mt-2 font-semibold text-white">B.Tech CSE</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Specialization</p>
                <p className="mt-2 font-semibold text-cyan-100">Cyber Security</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Core stack</p>
                <p className="mt-2 font-semibold text-white">Next.js / React</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Approach</p>
                <p className="mt-2 font-semibold text-white">Build. Learn. Refine.</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-6 text-slate-300">Creating a foundation for thoughtful software—one project, experiment, and iteration at a time.</p>
          </GlassCard>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">About me</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">A security-aware builder with an eye for clarity.</h2>
          </div>
          <GlassCard className="p-7 sm:p-8">
            <p className="text-lg leading-8 text-slate-200">
              I&apos;m developing the technical depth and product sensibility to build digital experiences that are useful, responsive, and trustworthy. My Cyber Security background shapes the way I approach systems; my interest in frontend development keeps the people using them in focus.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {["Learning-led", "Security-aware", "Detail-oriented", "Open to collaboration"].map((item) => (
                <span key={item} className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-2 text-sm font-medium text-cyan-100">{item}</span>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <GlassCard className="p-7 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Education</p>
            <h2 className="mt-4 text-3xl font-bold">Brainware University</h2>
            <div className="mt-7 border-l-2 border-cyan-300/60 pl-5">
              <p className="text-sm text-slate-400">Degree program</p>
              <p className="mt-1 text-xl font-semibold text-white">B.Tech CSE <span className="text-cyan-200">(Cyber Security)</span></p>
              <p className="mt-3 leading-7 text-slate-300">Building a strong base in computer science while developing a security-first perspective on technology.</p>
            </div>
          </GlassCard>

          <GlassCard className="p-7 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Technical skills</p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {technicalSkills.map((skill, index) => (
                <div key={skill.title} className="border-t border-white/10 pt-4">
                  <span className="text-xs font-bold text-cyan-300">0{index + 1}</span>
                  <h3 className="mt-2 font-semibold text-white">{skill.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{skill.detail}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Tech stack</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Tools I build and learn with.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-400">A practical stack for building, shipping, and improving modern web experiences.</p>
        </div>
        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {stack.map((item, index) => (
            <GlassCard key={item} className="group p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.07]">
              <span className="text-xs font-bold text-cyan-300/75">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-6 font-semibold text-white transition group-hover:text-cyan-100">{item}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section id="journey" className="border-y border-white/10 bg-[linear-gradient(110deg,rgba(8,47,73,0.28),rgba(255,255,255,0.02),rgba(0,0,0,0.3))]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Career timeline</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">A path built one deliberate step at a time.</h2>
          </div>
          <ol className="mt-12 grid gap-6 lg:grid-cols-4">
            {timeline.map((item, index) => (
              <li key={item.date} className="relative">
                <span aria-hidden="true" className="absolute left-6 top-10 hidden h-px w-[calc(100%-1rem)] bg-gradient-to-r from-cyan-300/60 to-transparent lg:block" />
                <GlassCard className="relative h-full p-6 transition duration-300 hover:border-cyan-300/35 hover:bg-cyan-300/[0.06]">
                  <span className="inline-flex h-12 min-w-12 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-3 text-sm font-bold text-cyan-100 shadow-[0_0_22px_rgba(34,211,238,0.12)]">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-6 text-sm font-semibold text-cyan-200">{item.date}</p>
                  <h3 className="mt-2 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.detail}</p>
                </GlassCard>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard className="group relative overflow-hidden p-8">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_36%)]" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Certifications</p>
              <h2 className="mt-4 text-3xl font-bold">In progress.</h2>
              <p className="mt-4 max-w-md leading-7 text-slate-300">A dedicated space for credentials as I continue to validate my technical and security learning.</p>
              <span className="mt-7 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/65">Placeholder</span>
            </div>
          </GlassCard>

          <GlassCard className="group relative overflow-hidden p-8">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.16),transparent_36%)]" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Achievements</p>
              <h2 className="mt-4 text-3xl font-bold">The next milestones await.</h2>
              <p className="mt-4 max-w-md leading-7 text-slate-300">This section will highlight meaningful projects, contributions, and moments of progress.</p>
              <span className="mt-7 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/65">Placeholder</span>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl border border-cyan-300/25 bg-[linear-gradient(120deg,rgba(8,145,178,0.22),rgba(255,255,255,0.06),rgba(0,0,0,0.35))] px-7 py-12 shadow-[0_0_65px_rgba(6,182,212,0.10)] backdrop-blur-xl sm:px-10 sm:py-14">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">Resume</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Want the concise version of my journey?</h2>
              <p className="mt-4 text-lg leading-7 text-slate-200">Download my resume for an at-a-glance view of my education, skills, and career direction.</p>
            </div>
            <a
              href="/resume.pdf"
              download
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-cyan-300 px-7 py-4 text-base font-bold text-black shadow-[0_0_35px_rgba(34,211,238,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              Download resume
            </a>
          </div>
        </div>
      </section>

  

    </main>
  );
}

