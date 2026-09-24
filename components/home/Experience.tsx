"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CheckCircle2, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Senior Front-End Engineer",
    company: "V4Technology",
    date: "Apr 2025 - Present",
    location: "Saudi Arabia · Remote",
    current: true,
    description:
      "Leading frontend development for multiple high-traffic e-commerce platforms. Architecting robust, scalable solutions using Next.js, React, and modern state management tools. Improved web vital metrics significantly across core products.",
    technologies: ["Next.js", "React", "TypeScript", "Redux Toolkit"],
  },
  {
    role: "Front-End Developer",
    company: "Go Partners",
    date: "Aug 2024 - Apr 2025",
    location: "Remote",
    current: false,
    description:
      "Developed and maintained corporate websites and web applications. Collaborated closely with UI/UX designers to translate complex Figma layouts into responsive, pixel-perfect code.",
    technologies: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
  },
  {
    role: "Junior Web Developer",
    company: "Micro Engineering Tech Inc",
    date: "Jan 2023 - Mar 2024",
    location: "Remote",
    current: false,
    description:
      "Assisted in building UI components, writing unit tests, and optimizing web performance metrics. Gained hands-on experience in modern JavaScript frameworks.",
    technologies: ["JavaScript", "React", "HTML", "CSS"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />

        <div className="absolute right-1/4 bottom-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-[130px]" />
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            My Career
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            My journey through different teams, products, and engineering
            challenges.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-blue-400/60 via-white/10 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-16">
            {experiences.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                }}
                className="group relative md:grid md:grid-cols-2 md:gap-12"
              >
                <div className="absolute left-5 top-8 z-20 flex -translate-x-1/2 items-center justify-center md:left-1/2">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border bg-background shadow-xl transition-all duration-500 ${
                      exp.current
                        ? "border-emerald-400/50 shadow-emerald-500/20"
                        : "border-white/10 group-hover:border-blue-400/50"
                    }`}
                  >
                    {exp.current ? (
                      <div className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative h-3 w-3 rounded-full bg-emerald-400" />
                      </div>
                    ) : (
                      <div className="h-2.5 w-2.5 rounded-full bg-blue-400 transition-transform duration-300 group-hover:scale-150" />
                    )}
                  </div>
                </div>

                <div
                  className={`hidden md:flex ${
                    idx % 2 === 0
                      ? "justify-end pr-12"
                      : "col-start-2 row-start-1 justify-start pl-12"
                  }`}
                >
                  <div className="pt-8">
                    <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                      {exp.date}
                    </span>

                    {exp.current && (
                      <div className="mt-2 flex items-center justify-end gap-2 text-xs text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Currently here
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className={`ml-12 md:ml-0 ${
                    idx % 2 === 0
                      ? "md:col-start-2 md:row-start-1"
                      : "md:col-start-1 md:row-start-1"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055] hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] md:p-8">
                    <div
                      className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full blur-3xl transition-all duration-500 ${
                        exp.current
                          ? "bg-emerald-500/10 group-hover:bg-emerald-500/20"
                          : "bg-blue-500/10 group-hover:bg-blue-500/20"
                      }`}
                    />

                    <div className="relative">
                      <div className="mb-5 flex flex-wrap items-center gap-3 md:hidden">
                        <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                          {exp.date}
                        </span>

                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            Current
                          </span>
                        )}
                      </div>

                      <div className="mb-4 flex items-start gap-4">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
                            exp.current
                              ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-400"
                              : "border-blue-400/20 bg-blue-500/10 text-blue-400"
                          }`}
                        >
                          <BriefcaseBusiness className="h-5 w-5" />
                        </div>

                        <div>
                          <h3 className="text-xl font-bold tracking-tight md:text-2xl">
                            {exp.role}
                          </h3>

                          <p
                            className={`mt-1 font-medium ${
                              exp.current ? "text-emerald-400" : "text-blue-400"
                            }`}
                          >
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div className="mb-5 flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />

                        <span>{exp.location}</span>
                      </div>

                      <p className="mb-6 text-sm leading-7 text-muted-foreground md:text-base">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs text-muted-foreground transition-colors duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-foreground"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      {exp.current && (
                        <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5 text-xs font-medium text-emerald-400">
                          <CheckCircle2 className="h-4 w-4" />
                          Currently working here
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-5 py-3 backdrop-blur-xl">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

            <span className="text-sm text-muted-foreground">
              Continuously growing, building, and taking on new challenges.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
