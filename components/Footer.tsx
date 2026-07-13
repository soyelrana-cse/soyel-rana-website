import Link from "next/link";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Resume", href: "/resume" },
  { label: "Projects", href: "/projects" },
  { label: "Academics", href: "/academics" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/10 text-sm font-bold text-cyan-200 shadow-[0_0_30px_rgba(56,189,248,0.2)] transition duration-300 group-hover:border-cyan-200 group-hover:bg-cyan-300/20">
              SR
            </span>
            <span className="text-sm font-semibold uppercase text-white/85">
              Soyel Rana
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
            B.Tech CSE (Cyber Security) student passionate about software engineering, cybersecurity, Linux, and building secure digital experiences.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-cyan-200">Navigate</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/70 transition duration-300 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-cyan-200">Connect</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href="mailto:soyelranahalder.learning@gmail.com"
                className="text-white/70 transition duration-300 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                Email Me
              </a>
            </li>
            <li>
              <a
                href="https://github.com/soyelrana-cse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition duration-300 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/soyel-rana-halder-68969540b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition duration-300 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 Soyel Rana. All rights reserved.</p>
          <p className="text-cyan-200/75">Designed with focus. Built with care.</p>
        </div>
      </div>
    </footer>
  );
}