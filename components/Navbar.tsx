"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Resume", href: "/resume" },
  { label: "Projects", href: "/projects" },
  { label: "Academics", href: "/academics" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary navigation"
      className="sticky top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-2xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="group inline-flex shrink-0 items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
          aria-label="Soyel Rana home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/10 text-sm font-bold text-cyan-200 shadow-[0_0_30px_rgba(56,189,248,0.25)] transition duration-300 group-hover:border-cyan-200 group-hover:bg-cyan-300/20">
            SR
          </span>
          <span className="hidden text-sm font-semibold uppercase text-white/85 sm:inline">
            Soyel Rana
          </span>
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1 text-sm text-white/70 shadow-2xl shadow-cyan-500/5 xl:flex">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-4 py-2 transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 ${
                  isActive
                    ? "bg-cyan-300 font-semibold text-black shadow-[0_0_22px_rgba(34,211,238,0.25)]"
                    : "hover:bg-cyan-300/10 hover:text-cyan-200"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <a
          href="/resume"
          download
          className="rounded-full border border-cyan-300/40 px-4 py-2 text-sm font-semibold text-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-300/10 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
        >
          View Resume
        </a>
      </div>

      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 pb-4 text-sm text-white/70 xl:hidden">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`whitespace-nowrap rounded-full border px-3 py-2 transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 ${
                isActive
                  ? "border-cyan-300 bg-cyan-300 font-semibold text-black"
                  : "border-white/10 bg-white/[0.04] hover:border-cyan-300/50 hover:text-cyan-200"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}