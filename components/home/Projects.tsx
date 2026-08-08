"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Layers3 } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "Almanea",
    description:
      "A large-scale e-commerce platform delivering high performance and a seamless shopping experience.",
    tags: ["Next.js", "Tailwind", "E-commerce"],
    link: "https://www.almanea.sa/",
    type: "E-Commerce",
  },
  {
    name: "Paris Gallery",
    description:
      "Premium beauty and cosmetics digital storefront with advanced filtering and search.",
    tags: ["Next.js", "Tailwind"],
    link: "https://www.parisgalleryme.com/",
    type: "E-Commerce",
  },
  {
    name: "Qasr Al Awani",
    description:
      "Home appliances e-commerce site with integrated payment gateways and tracking.",
    tags: ["Next.js", "Tailwind"],
    link: "https://www.qasralawani.com/",
    type: "E-Commerce",
  },
  {
    name: "Ijtimaati System",
    description:
      "A government-focused meeting management platform used by key institutions such as the Central Bank of Oman, Ministry of Justice, Ministry of Education, and Ministry of Water Resources. Developed and optimized several client-requested features using React, JavaScript, and modern UI libraries.",
    tags: ["React", "JavaScript", "Tailwind"],
    link: "#",
    type: "Government Platform",
  },
  {
    name: "Tabs Link",
    description:
      "A comprehensive SaaS dashboard for managing links and analytics.",
    tags: ["Next.js", "Tailwind"],
    // link: "https://www.tabsl.ink/",
    link: "#",
    type: "SaaS",
  },
  {
    name: "BackComfort",
    description:
      "Niche e-commerce store focusing on ergonomic products with a custom 3D product viewer.",
    tags: ["Next.js", "Tailwind"],
    link: "https://www.backcomfort.com.sa/",
    type: "E-Commerce",
  },
  {
    name: "Alkhunaizan",
    description:
      "A modern, responsive e-commerce web application with deep CRM integrations.",
    tags: ["Next.js", "API Integration"],
    link: "https://www.alkhunaizan.sa/",
    type: "E-Commerce",
  },
  {
    name: "Best Broker Solution (BBS)",
    description:
      "Developed real-time trading dashboards using React.js, integrated financial APIs and live market data, implemented secure authentication and portfolio features, and built reusable high-performance UI components to improve scalability and user experience.",
    tags: ["React.js", "Tailwind", "FinTech"],
    link: "#",
    type: "FinTech",
    featured: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-3xl">
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
              My Work
            </span>

            <h2 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Selected{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Work
              </span>
            </h2>

            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              A selection of production-ready web applications and digital
              products I&apos;ve worked on across e-commerce, SaaS, FinTech, and
              enterprise platforms.
            </p>
          </div>

          <div className="hidden shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-3 backdrop-blur-xl md:flex">
            <Layers3 className="h-5 w-5 text-blue-400" />

            <div>
              <p className="text-2xl font-bold leading-none">
                {projects.length}+
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                Selected Projects
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.07,
              }}
              whileHover={{
                y: -8,
              }}
              className={`group relative overflow-hidden rounded-3xl border bg-white/[0.035] backdrop-blur-xl transition-all duration-500 ${
                project.featured
                  ? "border-blue-400/30 shadow-[0_20px_80px_rgba(59,130,246,0.08)]"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              <div
                className={`pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full blur-[80px] transition-all duration-700 ${
                  project.featured
                    ? "bg-blue-500/15 group-hover:bg-blue-500/25"
                    : "bg-blue-500/5 group-hover:bg-blue-500/15"
                }`}
              />

              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex min-h-[390px] flex-col p-7">
                <div className="mb-7 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                      <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-lg font-bold text-transparent">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      {project.type}
                    </span>
                  </div>

                  {project.link !== "#" ? (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.name}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-muted-foreground transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-400"
                    >
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-muted-foreground">
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  )}
                </div>

                <h3 className="mb-4 text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-blue-400">
                  {project.name}
                </h3>

                <p className="mb-auto line-clamp-5 text-sm leading-7 text-muted-foreground md:text-base">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 group-hover:border-white/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                  {project.link !== "#" ? (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
                    >
                      View Live Project
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  ) : (
                    <span className="text-sm text-muted-foreground">
                      Project details available on request
                    </span>
                  )}

                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400/60 transition-all duration-500 group-hover:w-8" />
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/[0.03] via-transparent to-emerald-500/[0.03] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="mx-auto mt-14 max-w-3xl text-center"
        >
          <p className="text-sm leading-6 text-muted-foreground md:text-base">
            From high-traffic{" "}
            <span className="text-foreground">e-commerce platforms</span> to
            real-time{" "}
            <span className="text-foreground">FinTech dashboards</span> and
            scalable <span className="text-foreground">SaaS products</span>,
            I&apos;ve worked across different domains and technical challenges
            to build products used by real users.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
