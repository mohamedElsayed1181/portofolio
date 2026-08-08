"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML",
      "CSS",
      "React Hook Form",
      "Formik",
      "Zod",
      "Yup",
    ],
  },
  {
    category: "Styling & UI",
    items: [
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn UI",
      "SASS",
      "Bootstrap",
      "Material UI",
      "Ant Design",
    ],
  },
  {
    category: "State Management",
    items: ["Redux Toolkit", "Zustand", "Context API", "React Query", "SWR"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    category: "Tools & Others",
    items: [
      "Git",
      "GitHub",
      "Webpack",
      "REST APIs",
      "GraphQL",
      "Bitbucket",
      "Jira",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute right-1/4 bottom-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            My Expertise
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Skills
            </span>
          </motion.h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Technologies and tools I use to build scalable, high-performance,
            and maintainable web applications.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
              }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

              <div className="relative">
                <div className="mb-7 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10">
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight">
                    {skillGroup.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {skillGroup.items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: idx * 0.08 + i * 0.025,
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                      }}
                      className="cursor-default rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-muted-foreground transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-foreground"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-7 h-px w-10 bg-gradient-to-r from-blue-400/60 to-emerald-400/60 transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-12 max-w-2xl text-center"
        >
          <p className="text-sm text-muted-foreground">
            Always learning, always improving, and always looking for better
            ways to build great products.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
