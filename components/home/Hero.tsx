"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Mail,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[150px]" />

        <div className="absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.025]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,background_75%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>

            <span>Available for new opportunities</span>

            <Sparkles className="ml-1 h-3.5 w-3.5 text-emerald-400" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground"
          >
            <span className="h-px w-8 bg-white/20" />
            Hello, I&apos;m
            <span className="h-px w-8 bg-white/20" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="mb-7 text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Mohamed{" "}
            <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              Elsayed
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
             Senior Frontend Engineer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.25,
            }}
            className="mb-10 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg md:text-xl"
          >
            I build scalable, high-performance web applications and
            production-ready digital experiences using{" "}
            <span className="font-medium text-foreground">
              React, Next.js, and TypeScript.
            </span>{" "}
            From e-commerce and SaaS platforms to FinTech and enterprise
            applications, I focus on clean architecture, exceptional UX, and
            measurable performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.35,
            }}
            className="mb-12 flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
          >
            <Link
              href="#projects"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-base font-semibold text-background transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,255,255,0.12)]"
            >
              View My Work
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="#contact"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-8 text-base font-semibold backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
            >
              Contact Me
              <Mail className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.45,
            }}
            className="mb-16 flex items-center gap-3"
          >
            <span className="mr-2 text-xs uppercase tracking-widest text-muted-foreground">
              Find me on
            </span>

            <Link
              href="https://www.linkedin.com/in/mohamed-elsayed-b846a221a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-400"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </Link>

            <Link
              href="https://github.com/mohamedElsayed1181"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-foreground"
            >
              <FaGithub className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="grid w-full max-w-3xl grid-cols-2 divide-x divide-white/10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-xl md:grid-cols-4"
          >
            <div className="flex flex-col items-center justify-center px-4 py-5">
              <div className="mb-1 text-2xl font-bold text-foreground md:text-3xl">
                3+
              </div>

              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Years Experience
              </div>
            </div>

            <div className="flex flex-col items-center justify-center px-4 py-5">
              <div className="mb-1 text-2xl font-bold text-foreground md:text-3xl">
                10+
              </div>

              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Projects
              </div>
            </div>

            <div className="flex flex-col items-center justify-center px-4 py-5">
              <div className="mb-1 text-2xl font-bold text-foreground md:text-3xl">
                15+
              </div>

              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Technologies
              </div>
            </div>

            <div className="flex flex-col items-center justify-center px-4 py-5">
              <div className="mb-1 flex items-center gap-2 text-2xl font-bold text-foreground md:text-3xl">
                <BriefcaseBusiness className="h-6 w-6 text-blue-400" />

                <span>4+</span>
              </div>

              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Product Domains
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1,
            }}
            className="mt-14 flex flex-col items-center gap-3 text-muted-foreground"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">
              Explore
            </span>

            <motion.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="h-4 w-4" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
