"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 md:py-32 scroll-mt-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute -right-40 bottom-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/5 px-4 py-2 text-sm text-blue-300 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new opportunities
          </motion.div>

          {/* Heading */}
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              amazing.
            </span>
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            I&apos;m currently available for new opportunities. Whether you have
            a question, an idea, or just want to say hi, I&apos;d love to hear
            from you.
          </p>

          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Email */}
            <Link
              href="mailto:mohamedelsayed908070@gmail.com"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/[0.08] hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]"
            >
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/20"
                >
                  <Mail className="h-6 w-6" />
                </motion.div>

                <h3 className="mb-2 text-xl font-bold">Email</h3>

                <span className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  mohamedelsayed908070@gmail.com
                </span>

                <div className="mx-auto mt-5 h-px w-8 bg-blue-400/30 transition-all duration-500 group-hover:w-16 group-hover:bg-blue-400" />
              </div>
            </Link>

            <Link
              href="tel:+201090883896"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/30 hover:bg-white/[0.08] hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)]"
            >
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-500 group-hover:bg-emerald-500/20" />

              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-400 transition-all duration-300 group-hover:border-emerald-400/40 group-hover:bg-emerald-500/20"
                >
                  <Phone className="h-6 w-6" />
                </motion.div>

                <h3 className="mb-2 text-xl font-bold">Phone</h3>

                <span className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  +20 109 088 3896
                </span>

                <div className="mx-auto mt-5 h-px w-8 bg-emerald-400/30 transition-all duration-500 group-hover:w-16 group-hover:bg-emerald-400" />
              </div>
            </Link>

            <Link
              href="https://www.linkedin.com/in/mohamed-elsayed-b846a221a"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-sky-400/30 hover:bg-white/[0.08] hover:shadow-[0_20px_60px_rgba(14,165,233,0.15)]"
            >
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-sky-500/10 blur-3xl transition-all duration-500 group-hover:bg-sky-500/20" />

              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-500/10 text-sky-400 transition-all duration-300 group-hover:border-sky-400/40 group-hover:bg-sky-500/20"
                >
                  <FaLinkedinIn className="h-6 w-6" />
                </motion.div>

                <h3 className="mb-2 text-xl font-bold">LinkedIn</h3>

                <span className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  Connect with me
                </span>

                <div className="mx-auto mt-5 h-px w-8 bg-sky-400/30 transition-all duration-500 group-hover:w-16 group-hover:bg-sky-400" />
              </div>
            </Link>

            <Link
              href="https://github.com/mohamedElsayed1181"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/30 hover:bg-white/[0.08] hover:shadow-[0_20px_60px_rgba(168,85,247,0.15)]"
            >
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl transition-all duration-500 group-hover:bg-purple-500/20" />

              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-purple-400 transition-all duration-300 group-hover:border-purple-400/40 group-hover:bg-purple-500/20"
                >
                  <FaGithub className="h-6 w-6" />
                </motion.div>

                <h3 className="mb-2 text-xl font-bold">GitHub</h3>

                <span className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  Check out my projects
                </span>

                <div className="mx-auto mt-5 h-px w-8 bg-purple-400/30 transition-all duration-500 group-hover:w-16 group-hover:bg-purple-400" />
              </div>
            </Link>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 text-sm text-muted-foreground"
          >
            Have an idea?{" "}
            <span className="font-medium text-foreground">
              Let&apos;s turn it into reality.
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
