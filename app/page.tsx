import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soyel Rana | Software Developer",
  description:
    "Portfolio homepage for Soyel Rana, a CSE Cyber Security student focused on modern web development and secure digital products.",
};

const navItems = [
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const metrics = [
  { value: "CSE", label: "Cyber Security" },
  { value: "Next.js", label: "Modern web stack" },
  { value: "Linux", label: "Systems mindset" },
];

const focusAreas = [
  "Software development",
  "Cyber security fundamentals",
  "Linux and open source",
  "Clean, reliable user experiences",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <nav
        aria-label="Primary navigation"
        className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-2xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Soyel Rana home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/10 text-sm font-bold text-cyan-200 shadow-[0_0_30px_rgba(56,189,248,0.25)] transition duration-300 group-hover:border-cyan-200 group-hover:bg-cyan-300/20">
              SR
            </span>
            <span className="text-sm font-semibold uppercase text-white/85">
              Soyel Rana
            </span>
          </Link>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 text-sm text-white/70 shadow-2xl shadow-cyan-500/5 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 transition duration-300 hover:bg-cyan-300/10 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="rounded-full border border-cyan-300/40 px-4 py-2 text-sm font-semibold text-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-300/10 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
          >
            Contact
          </Link>
        </div>

        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 px-6 pb-4 text-sm text-white/70 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 transition duration-300 hover:border-cyan-300/50 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <section className="relative isolate">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(0,145,255,0.24),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_38%),linear-gradient(180deg,rgba(0,0,0,0)_0%,#000_88%)]"
        />

        <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-10 px-6 py-14 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <p className="mb-6 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_40px_rgba(56,189,248,0.12)]">
              B.Tech CSE Cyber Security student building modern web experiences.
            </p>

            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Secure, polished web experiences.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              I am Soyel Rana, a computer science student with a cybersecurity
              foundation and a practical eye for building fast, readable, and
              professional web interfaces.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/resume"
                className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-7 py-4 text-base font-bold text-black shadow-[0_0_35px_rgba(34,211,238,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_0_45px_rgba(255,255,255,0.22)] focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-black"
              >
                View Resume
              </Link>
              <a
                href="https://github.com/soyelrana-cse"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-base font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/soyel-rana-halder-68969540b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/[0.06] px-7 py-4 text-base font-semibold text-cyan-100 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:bg-cyan-300/15 hover:shadow-[0_0_35px_rgba(56,189,248,0.18)] focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <aside
            aria-label="Professional profile summary"
            className="relative rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm uppercase text-cyan-200">Profile</p>
                <h2 className="mt-3 text-3xl font-bold text-white">
                  Software and security learner
                </h2>
              </div>
              <div
                aria-hidden="true"
                className="h-12 w-12 rounded-lg border border-cyan-300/25 bg-cyan-300/10 shadow-[0_0_32px_rgba(34,211,238,0.22)]"
              />
            </div>

            <div className="mt-8 grid gap-5 border-y border-white/10 py-6 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-lg font-bold text-cyan-200">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold text-white">
                  Current focus
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  {focusAreas.map((area) => (
                    <li key={area} className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.8)]"
                      />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-cyan-300/20 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                <p className="text-sm text-slate-400">Availability signal</p>
                <div className="mt-3 flex items-center justify-between gap-4">
                  <p className="text-xl font-bold text-white">
                    Open to learning, collaboration, and internships.
                  </p>
                  <span className="h-3 w-3 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="mt-8 grid grid-cols-6 gap-2 border-t border-white/10 pt-6"
            >
              {Array.from({ length: 18 }).map((_, index) => (
                <span
                  key={index}
                  className="h-2 rounded-full bg-cyan-300/20 odd:bg-white/10"
                />
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-3 lg:px-8">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.06]">
            <p className="text-sm font-semibold text-cyan-200">Build</p>
            <h2 className="mt-3 text-2xl font-bold text-white">
              Interfaces that feel sharp
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Modern layouts, responsive spacing, and clear interaction states
              designed for real users.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.06]">
            <p className="text-sm font-semibold text-cyan-200">Secure</p>
            <h2 className="mt-3 text-2xl font-bold text-white">
              Security-aware thinking
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              A cyber security background shapes how I think about reliable
              systems, clean code, and user trust.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.06]">
            <p className="text-sm font-semibold text-cyan-200">Grow</p>
            <h2 className="mt-3 text-2xl font-bold text-white">
              Always improving
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Focused on stronger engineering habits, open source learning, and
              shipping work with care.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
