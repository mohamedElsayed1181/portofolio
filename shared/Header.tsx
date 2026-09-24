"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight, Download, FileText } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 border-b transition-all duration-500",
          scrolled
            ? "border-white/10 bg-background/75 py-3 shadow-lg shadow-black/5 backdrop-blur-xl"
            : "border-transparent bg-transparent py-5",
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <Link
            href="#home"
            className="group relative flex items-center gap-2"
            onClick={handleNavClick}
          >
            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
              <span className="text-sm font-bold text-foreground">ME</span>

              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </div>

            <div className="hidden sm:block">
              <span className="text-base font-bold tracking-tight">
                Mohamed Elsayed
              </span>

              <span className="ml-0.5 text-blue-400">.</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.025] p-1 backdrop-blur-xl md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-white/[0.06] hover:text-foreground"
              >
                {item.name}

                <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-blue-400 to-emerald-400 transition-all duration-300 group-hover:w-5" />
              </Link>
            ))}
          </nav>
          <nav className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <a
                href="/MohamedElsayedSeniorFrontEndEngineerReactjsNextjs.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden h-10 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-blue-500/30 md:inline-flex"
              >
                View CV
                <FileText className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>

              <a
                href="/MohamedElsayedSeniorFrontEndEngineerReactjsNextjs.pdf"
                download="Mohamed-Elsayed-Farid-CV.pdf"
                aria-label="Download CV"
                title="Download CV"
                className="group hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-400 md:inline-flex"
              >
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>
            <Link
              href="#contact"
              className="group hidden h-10 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-500/10 md:inline-flex"
            >
              Contact
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </nav>
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-muted-foreground transition-all duration-300 hover:bg-white/[0.08] hover:text-foreground md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl transition-all duration-500 md:hidden",
          mobileMenuOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0",
        )}
      >
        <div className="container mx-auto flex h-full flex-col justify-center px-6">
          <div className="mb-10">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-blue-400">
              Navigation
            </span>

            <h2 className="mt-3 text-3xl font-bold">Explore my portfolio.</h2>
          </div>

          <nav className="flex flex-col">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className="group flex items-center justify-between border-b border-white/10 py-5"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs text-muted-foreground">
                    0{index + 1}
                  </span>

                  <span className="text-2xl font-semibold transition-colors duration-300 group-hover:text-blue-400">
                    {item.name}
                  </span>
                </div>

                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400" />
              </Link>
            ))}
            <div className="mt-2 flex flex-col">
              <a
                href="/MohamedElsayedSeniorFrontEndEngineerReactjsNextjs.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="group flex items-center justify-between border-b border-white/10 py-5"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs text-muted-foreground">05</span>

                  <span className="text-2xl font-semibold transition-colors duration-300 group-hover:text-blue-400">
                    View CV
                  </span>
                </div>

                <FileText className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400" />
              </a>

              <a
                href="/MohamedElsayedSeniorFrontEndEngineerReactjsNextjs.pdf"
                download="Mohamed-Elsayed-Farid-CV.pdf"
                onClick={handleNavClick}
                className="group flex items-center justify-between border-b border-white/10 py-5"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs text-muted-foreground">06</span>

                  <span className="text-2xl font-semibold transition-colors duration-300 group-hover:text-blue-400">
                    Download CV
                  </span>
                </div>

                <Download className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400" />
              </a>
            </div>
          </nav>

          <Link
            href="#contact"
            onClick={handleNavClick}
            className="mt-8 flex h-14 items-center justify-center gap-2 rounded-full bg-foreground text-background font-semibold transition-all duration-300 hover:bg-foreground/90"
          >
            Let&apos;s Work Together
            <ArrowUpRight className="h-5 w-5" />
          </Link>

          <div className="mt-auto pb-10">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Available for new opportunities
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
