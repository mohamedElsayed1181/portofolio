"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Globe2, Layers3, Users } from "lucide-react";

const highlights = [
  {
    icon: BriefcaseBusiness,
    value: "3+",
    label: "Years of Experience",
    description: "Building modern web applications",
  },
  {
    icon: Globe2,
    value: "3",
    label: "Markets",
    description: "Egypt, Saudi Arabia & Oman",
  },
  {
    icon: Users,
    value: "Real Users",
    label: "Production Products",
    description: "Applications used by real users",
  },
  {
    icon: Layers3,
    value: "Multiple",
    label: "Project Domains",
    description: "E-commerce, FinTech, SaaS & more",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[120px]" />
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

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            Get to know me
          </span>

          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A Front-End Engineer focused on building scalable, high-performance
            and user-centered digital experiences.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl md:p-10"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue-500/10 blur-[80px] transition-all duration-500 group-hover:bg-blue-500/20" />

            <div className="relative">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                  <BriefcaseBusiness className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground">
                    My Journey
                  </p>

                  <h3 className="text-2xl font-bold">
                    Building products that matter
                  </h3>
                </div>
              </div>

              <div className="space-y-6 text-base leading-8 text-muted-foreground md:text-lg">
                <p>
                  I&apos;m a passionate{" "}
                  <span className="font-medium text-foreground">
                    Front-End Engineer
                  </span>{" "}
                  with over{" "}
                  <span className="font-medium text-blue-400">
                    3 years of experience
                  </span>{" "}
                  building modern, scalable, and high-performance web
                  applications. My journey started with a fascination for
                  crafting seamless user interfaces and evolved into a deeper
                  passion for building reliable digital products.
                </p>

                <p>
                  Throughout my career, I&apos;ve had the opportunity to work on
                  projects across{" "}
                  <span className="font-medium text-foreground">
                    Egypt, Saudi Arabia, and Oman
                  </span>
                  , collaborating with different teams, businesses, and product
                  requirements. I&apos;ve contributed to production applications
                  used by{" "}
                  <span className="font-medium text-foreground">
                    real users
                  </span>
                  , where performance, usability, scalability, and code quality
                  actually matter.
                </p>

                <p>
                  I&apos;ve worked across a variety of product domains,
                  including{" "}
                  <span className="font-medium text-blue-400">E-commerce</span>,{" "}
                  <span className="font-medium text-emerald-400">FinTech</span>,{" "}
                  <span className="font-medium text-purple-400">SaaS</span>, and{" "}
                  <span className="font-medium text-foreground">
                    e-learning
                  </span>{" "}
                  platforms. This variety has helped me understand that good
                  front-end engineering is not only about writing code, but also
                  about understanding the product, the users, and the business
                  behind it.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

                  <div className="relative flex items-center gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-blue-400">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold tracking-tight">
                          {item.value}
                        </span>

                        <span className="text-sm font-medium text-muted-foreground">
                          {item.label}
                        </span>
                      </div>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-8 max-w-6xl rounded-3xl border border-white/10 bg-white/[0.025] p-8 backdrop-blur-xl md:p-10"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                Engineering Mindset
              </p>

              <h3 className="mb-4 text-2xl font-bold">
                Clean code. Scalable architecture. Great UX.
              </h3>

              <p className="leading-7 text-muted-foreground">
                I specialize in the React ecosystem, deeply leveraging Next.js,
                TypeScript, and modern UI technologies. I believe in
                component-driven architecture, reusable systems, clean
                maintainable code, and building experiences that feel as good as
                they perform.
              </p>
            </div>

            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                Always Learning
              </p>

              <h3 className="mb-4 text-2xl font-bold">
                Exploring what&apos;s next.
              </h3>

              <p className="leading-7 text-muted-foreground">
                I&apos;m constantly exploring new technologies, design trends,
                engineering patterns, and better ways to solve problems. My goal
                is to keep growing as an engineer while delivering real value to
                the products and teams I work with.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
