import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Academics | Soyel Rana",
  description:
    "Academic journey, semester learning, and milestones of Soyel Rana, a B.Tech CSE (Cyber Security) student.",
};

const semesters = [
  { number: "01", label: "Semester 1", period: "Foundation", status: "Completed", focus: "Programming foundations, mathematics, and engineering essentials.", subjects: ["Programming for Problem Solving", "Engineering Mathematics I", "Basic Electrical Engineering"] },
  { number: "02", label: "Semester 2", period: "Foundation", status: "Completed", focus: "Strengthening problem-solving, communication, and scientific thinking.", subjects: ["Data Structures Basics", "Engineering Mathematics II", "Professional Communication"] },
  { number: "03", label: "Semester 3", period: "Core computing", status: "Completed", focus: "Exploring the systems and structures behind reliable software.", subjects: ["Object-Oriented Programming", "Discrete Mathematics", "Computer Organization"] },
  { number: "04", label: "Semester 4", period: "Core computing", status: "Completed", focus: "Building depth in data, algorithms, and operating systems.", subjects: ["Database Management Systems", "Algorithms", "Operating Systems"] },
  { number: "05", label: "Semester 5", period: "Specialization", status: "Current", focus: "Applying software engineering with a security-aware perspective.", subjects: ["Computer Networks", "Web Technologies", "Cyber Security Fundamentals"] },
  { number: "06", label: "Semester 6", period: "Specialization", status: "Planned", focus: "Expanding security practice through hands-on systems and analysis.", subjects: ["Cryptography", "Secure Software Development", "Cloud Computing"] },
  { number: "07", label: "Semester 7", period: "Industry readiness", status: "Planned", focus: "Connecting academic learning with larger projects and real-world delivery.", subjects: ["Information Security", "Machine Learning", "Major Project I"] },
  { number: "08", label: "Semester 8", period: "Capstone", status: "Planned", focus: "Finishing with focused research, a capstone, and career preparation.", subjects: ["Major Project II", "Security Audit Practice", "Professional Elective"] },
];

const currentSubjects = [
  { code: "CSE-501", name: "Computer Networks", note: "Protocols, architectures, and dependable communication systems." },
  { code: "CSE-502", name: "Web Technologies", note: "Modern, responsive interfaces and full-stack web foundations." },
  { code: "CYS-503", name: "Cyber Security Fundamentals", note: "Threat awareness, secure practices, and defensive thinking." },
  { code: "CSE-504", name: "Software Engineering", note: "Structured approaches to building useful, maintainable products." },
];

const skills = [
  { title: "Programming", items: ["C", "Python", "JavaScript", "Problem solving"] },
  { title: "Web development", items: ["Next.js", "React", "Tailwind CSS", "Responsive UI"] },
  { title: "Security foundations", items: ["Network basics", "Linux", "Cyber hygiene", "Secure design"] },
  { title: "Professional tools", items: ["Git & GitHub", "VS Code", "Documentation", "Collaboration"] },
];

const certifications = [
  { title: "Cyber Security Fundamentals", issuer: "Learning credential", status: "In progress" },
  { title: "Python Programming", issuer: "Course certificate", status: "Planned" },
  { title: "Cloud Foundations", issuer: "Industry credential", status: "Planned" },
];

const achievements = [
  "Building a public portfolio to document practical learning.",
  "Developing security-aware web projects alongside coursework.",
  "Growing a consistent GitHub practice through hands-on experiments.",
];

function GlassCard({ children, className = "" }: Readonly<{ children: ReactNode; className?: string }>) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/[0.045] shadow-2xl shadow-cyan-500/[0.04] backdrop-blur-xl ${className}`}>
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }: Readonly<{ eyebrow: string; title: string; description?: string }>) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">{description}</p> : null}
    </div>
  );
}

export default function AcademicsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white selection:bg-cyan-300 selection:text-black">
      <section className="relative isolate border-b border-white/10">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_14%,rgba(14,165,233,0.22),transparent_30%),radial-gradient(circle_at_88%_25%,rgba(34,211,238,0.16),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_72%)]" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-black to-transparent" />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[1.12fr_0.88fr] lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-[0_0_40px_rgba(56,189,248,0.12)]">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,1)]" />
              Academic journey / 2025-2029
            </p>
            <h1 className="mt-7 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Learning the craft.<br />
              Building the <span className="text-cyan-300">foundation.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              A living record of my B.Tech CSE (Cyber Security) journey: the concepts I am studying, the skills I am applying, and the milestones shaping my path as an engineer.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#semester-timeline" className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-7 py-4 font-bold text-black shadow-[0_0_35px_rgba(34,211,238,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-black">
                View academic path
              </a>
              <a href="#documents" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black">
                Academic documents
              </a>
            </div>
          </div>

          <GlassCard className="relative overflow-hidden p-6 sm:p-8">
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-300/15 blur-3xl" />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Current focus</p>
                <p className="mt-3 text-3xl font-bold leading-tight">Semester 5, in progress.</p>
              </div>
              <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-300/10 text-xl text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.22)]">05</span>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 border-y border-white/10 py-6">
              <div><p className="text-sm text-slate-400">Programme</p><p className="mt-2 font-semibold text-white">B.Tech CSE</p></div>
              <div><p className="text-sm text-slate-400">Specialization</p><p className="mt-2 font-semibold text-cyan-100">Cyber Security</p></div>
              <div><p className="text-sm text-slate-400">Institution</p><p className="mt-2 font-semibold text-white">Brainware University</p></div>
              <div><p className="text-sm text-slate-400">Expected</p><p className="mt-2 font-semibold text-white">2029</p></div>
            </div>
            <p className="mt-6 text-sm leading-6 text-slate-300">Learning is most useful when it becomes practice: each semester informs the projects, experiments, and habits I build outside the classroom.</p>
          </GlassCard>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <SectionHeading eyebrow="Academic overview" title="A focused route through computer science." />
          <GlassCard className="p-7 sm:p-8">
            <p className="text-lg leading-8 text-slate-200">My academic work combines core computer science with a growing cyber security specialization. I use each subject as a starting point for clearer thinking, practical building, and responsible engineering decisions.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[{ value: "8", label: "Semesters" }, { value: "4", label: "Current subjects" }, { value: "1", label: "Clear direction" }].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <p className="text-2xl font-bold text-cyan-200">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading eyebrow="Education" title="B.Tech in Computer Science Engineering." description="A placeholder academic profile that can be updated with official dates, grades, and course details as they become available." />
          <div className="mt-9 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <GlassCard className="relative overflow-hidden p-7 sm:p-8">
              <div aria-hidden="true" className="absolute right-0 top-0 h-40 w-40 bg-cyan-300/10 blur-3xl" />
              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Undergraduate programme</p>
                <h3 className="mt-4 text-2xl font-bold sm:text-3xl">Brainware University</h3>
                <p className="mt-3 text-lg font-semibold text-cyan-100">B.Tech CSE <span className="text-slate-400">(Cyber Security)</span></p>
                <p className="mt-5 max-w-2xl leading-7 text-slate-300">A structured programme developing computer science fundamentals alongside an awareness of secure systems, networks, and modern software development.</p>
              </div>
            </GlassCard>
            <GlassCard className="p-7">
              <dl className="space-y-5">
                <div><dt className="text-sm text-slate-400">Academic period</dt><dd className="mt-1 font-semibold text-white">2025 - 2029</dd></div>
                <div><dt className="text-sm text-slate-400">Learning mode</dt><dd className="mt-1 font-semibold text-white">Full-time undergraduate</dd></div>
                <div><dt className="text-sm text-slate-400">Status</dt><dd className="mt-1 font-semibold text-cyan-100">Currently enrolled</dd></div>
              </dl>
            </GlassCard>
          </div>
        </div>
      </section>

      <section id="semester-timeline" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading eyebrow="Semester timeline" title="Eight stages, one evolving practice." description="A high-level view of the degree journey, from foundational study to a focused final capstone." />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {semesters.map((semester, index) => (
            <li key={semester.number} className="relative">
              {index < semesters.length - 1 ? <span aria-hidden="true" className="absolute left-12 top-6 hidden h-px w-[calc(100%-0.5rem)] bg-gradient-to-r from-cyan-300/60 to-transparent lg:block" /> : null}
              <GlassCard className="relative h-full p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.06]">
                <span className="inline-flex h-12 min-w-12 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-3 text-sm font-bold text-cyan-100">{semester.number}</span>
                <p className="mt-5 text-sm font-semibold text-cyan-200">{semester.period}</p>
                <h3 className="mt-1 text-xl font-bold">{semester.label}</h3>
                <span className={`mt-4 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${semester.status === "Current" ? "bg-cyan-300/15 text-cyan-100" : "bg-white/[0.06] text-slate-300"}`}>{semester.status}</span>
              </GlassCard>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-white/10 bg-[linear-gradient(110deg,rgba(8,47,73,0.28),rgba(255,255,255,0.02),rgba(0,0,0,0.3))]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading eyebrow="Semester cards" title="The learning inside each stage." description="Course names and focus areas are flexible placeholders for the official curriculum." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {semesters.map((semester) => (
              <GlassCard key={semester.number} className="group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.06]">
                <div className="flex items-start justify-between gap-3"><span className="text-sm font-bold text-cyan-300">SEM {semester.number}</span><span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300">{semester.status}</span></div>
                <h3 className="mt-4 text-xl font-bold group-hover:text-cyan-100">{semester.label}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{semester.focus}</p>
                <ul className="mt-5 space-y-2 border-t border-white/10 pt-5 text-sm text-slate-300">
                  {semester.subjects.map((subject) => <li key={subject} className="flex gap-2"><span className="text-cyan-300">+</span>{subject}</li>)}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <SectionHeading eyebrow="Current semester" title="What I am studying now." description="Current subjects are shown as a portfolio-ready snapshot and can be replaced with the official semester schedule." />
          <div className="grid gap-4 sm:grid-cols-2">
            {currentSubjects.map((subject) => (
              <GlassCard key={subject.code} className="p-6 transition duration-300 hover:border-cyan-300/35 hover:bg-cyan-300/[0.06]">
                <p className="text-xs font-bold tracking-[0.14em] text-cyan-300">{subject.code}</p>
                <h3 className="mt-3 text-xl font-bold">{subject.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{subject.note}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading eyebrow="Technical skills learned" title="Turning coursework into capability." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <GlassCard key={skill.title} className="p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.06]">
                <p className="text-xs font-bold text-cyan-300">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-bold">{skill.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">{skill.items.map((item) => <span key={item} className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-1.5 text-sm text-cyan-50">{item}</span>)}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Certifications" title="Credentials in progress." description="A dedicated place for verified certificates as formal learning milestones are completed." />
            <div className="mt-8 space-y-3">
              {certifications.map((certificate) => (
                <GlassCard key={certificate.title} className="flex items-center justify-between gap-4 p-5 transition duration-300 hover:border-cyan-300/35">
                  <div><h3 className="font-semibold text-white">{certificate.title}</h3><p className="mt-1 text-sm text-slate-400">{certificate.issuer}</p></div>
                  <span className="shrink-0 rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-3 py-1.5 text-xs font-semibold text-cyan-100">{certificate.status}</span>
                </GlassCard>
              ))}
            </div>
          </div>
          <GlassCard className="relative overflow-hidden p-7 sm:p-8">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_38%)]" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Achievements</p>
              <h2 className="mt-4 text-3xl font-bold">Progress worth documenting.</h2>
              <ul className="mt-7 space-y-5">
                {achievements.map((achievement, index) => <li key={achievement} className="flex gap-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-xs font-bold text-cyan-100">0{index + 1}</span><p className="pt-0.5 leading-6 text-slate-300">{achievement}</p></li>)}
              </ul>
            </div>
          </GlassCard>
        </div>
      </section>

      <section id="documents" className="border-y border-white/10 bg-[linear-gradient(120deg,rgba(8,145,178,0.17),rgba(255,255,255,0.025),rgba(0,0,0,0.35))]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Download documents" title="A concise record, ready when you need it." description="Academic documents will be added here as they are available. The existing resume is available now." />
            <a href="/resume.pdf" download className="inline-flex shrink-0 items-center justify-center rounded-full bg-cyan-300 px-7 py-4 font-bold text-black shadow-[0_0_35px_rgba(34,211,238,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">Download resume</a>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[{ title: "Academic resume", detail: "Available now", action: "Download PDF", available: true }, { title: "Semester transcripts", detail: "To be added", action: "Coming soon", available: false }, { title: "Certificates", detail: "To be added", action: "Coming soon", available: false }].map((document) => (
              <GlassCard key={document.title} className="flex items-center justify-between gap-4 p-5">
                <div><h3 className="font-semibold">{document.title}</h3><p className="mt-1 text-sm text-slate-400">{document.detail}</p></div>
                {document.available ? <a href="/resume.pdf" download className="rounded-full border border-cyan-300/30 px-3 py-2 text-xs font-semibold text-cyan-100 transition hover:bg-cyan-300/10">{document.action}</a> : <span className="rounded-full border border-white/10 px-3 py-2 text-xs text-slate-500">{document.action}</span>}
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl border border-cyan-300/25 bg-[linear-gradient(120deg,rgba(8,145,178,0.22),rgba(255,255,255,0.06),rgba(0,0,0,0.35))] px-7 py-12 shadow-[0_0_65px_rgba(6,182,212,0.10)] backdrop-blur-xl sm:px-10 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">Future roadmap</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">From student foundations to secure, useful products.</h2>
              <p className="mt-4 max-w-2xl text-lg leading-7 text-slate-200">The next chapters are about deeper cyber security practice, stronger software engineering judgment, meaningful projects, and an industry-ready capstone.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {["Deepen security practice", "Ship stronger projects", "Prepare for industry"].map((item, index) => <div key={item} className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/20 p-4"><span className="text-sm font-bold text-cyan-200">0{index + 1}</span><p className="font-semibold text-white">{item}</p></div>)}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
