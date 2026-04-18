import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Cloud,
  Cpu,
  Gauge,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Trophy,
  Zap,
} from "lucide-react";

const stats = [
  { value: "17+", label: "Years in enterprise delivery and database engineering" },
  { value: "99.99%", label: "Uptime delivered across multi-cloud operations" },
  { value: "40%", label: "Faster release cycles through structured delivery systems" },
  { value: "60%", label: "Less manual effort using automation-led execution" },
];

const experience = [
  {
    role: "Principal Software Developer",
    company: "Oracle India Pvt Ltd",
    period: "2020 — Present",
    location: "Hyderabad, India",
    highlights: [
      "Led OCI and AWS transformation programs with 99.99% uptime and stronger SLA governance.",
      "Built delivery frameworks and KPIs that accelerated release cycles by 40%.",
      "Improved sprint predictability to 95% while raising team delivery velocity.",
      "Reduced environment setup time by 45% using Git, Jenkins, and Terraform pipelines.",
    ],
  },
  {
    role: "Oracle Consultant",
    company: "NIIT Technologies Ltd · Dubai Airports",
    period: "2018 — 2020",
    location: "Dubai, UAE",
    highlights: [
      "Directed mission-critical database migration and upgrade programs with zero data loss.",
      "Introduced Oracle RAC and Data Guard patterns for fault tolerance and 24x7 readiness.",
      "Aligned modernization delivery with business continuity and controlled cutover planning.",
    ],
  },
  {
    role: "Senior IT Consultant",
    company: "Oracle India Pvt. Ltd.",
    period: "2016 — 2018",
    location: "Hyderabad, India",
    highlights: [
      "Delivered RAC provisioning and tuning for Fusion applications.",
      "Designed HA and disaster recovery solutions using Data Guard and RMAN.",
    ],
  },
  {
    role: "Technology Lead",
    company: "Infosys Ltd",
    period: "2011 — 2016",
    location: "Hyderabad, India",
    highlights: [
      "Managed operations and release execution for 150+ Oracle databases.",
      "Contributed to migration, resilience, and performance optimization programs.",
    ],
  },
];

const featuredProjects = [
  {
    title: "AI-Driven OCI Automation Framework",
    tag: "Flagship Build",
    summary:
      "Created an LLM-assisted workflow engine for OCI database lifecycle operations including provisioning, backup, dataload, validation, concurrency control, and recovery handling.",
  },
  {
    title: "Network Health Score",
    tag: "Observability System",
    summary:
      "Built a visibility framework with OCI Monitoring APIs, Python automation, OEM, and Grafana to detect network bottlenecks faster and strengthen proactive reliability operations.",
  },
  {
    title: "Autonomous Backup & Recovery Modernization",
    tag: "Reliability Upgrade",
    summary:
      "Modernized backup and recovery operations using OCI CLI, Python, RMAN, and dbaascli to increase reliability and reduce manual intervention.",
  },
];

const skillGroups = [
  {
    title: "Delivery Engine",
    icon: Gauge,
    items: ["PMP", "Scrum", "SAFe", "Stakeholder Management", "Sprint Planning", "Risk Management"],
  },
  {
    title: "Cloud Stack",
    icon: Cloud,
    items: ["OCI", "AWS", "Oracle RAC", "Data Guard", "Exadata", "Autonomous DB", "Grafana", "OEM"],
  },
  {
    title: "Automation Layer",
    icon: Cpu,
    items: ["LLM Automation", "Prompt Engineering", "Python", "Shell", "Terraform", "Jenkins", "Git", "CI/CD"],
  },
];

const certifications = [
  "Project Management Professional (PMP)",
  "Certified Scrum Master (CSM)",
  "Google Project Management Specialization",
];

const education = [
  {
    title: "MS in Data Science",
    meta: "UpGrad, IIIT Bangalore & Liverpool John Moores University",
    period: "Dec 2024 — Present",
  },
  {
    title: "B.Tech in Electronics and Communication",
    meta: "Jawaharlal Nehru Technological University, Hyderabad",
    period: "Sep 2004 — May 2008",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

function Kicker({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/25 bg-lime-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-lime-300">
      <Zap className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5">
      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-lime-400/10 blur-2xl" />
      <div className="text-4xl font-black tracking-[-0.05em] text-white md:text-5xl">{value}</div>
      <p className="mt-2 max-w-[15rem] text-sm leading-6 text-white/65">{label}</p>
    </div>
  );
}

function SectionHeader({ eyebrow, title, copy }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-lime-300/80">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em] text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-white/65">{copy}</p>
    </div>
  );
}

function Chip({ children }) {
  return (
    <span className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-sm text-white/80">
      {children}
    </span>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(132,255,0,0.14),transparent_26%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.12),transparent_25%),linear-gradient(180deg,#0b0b0b_0%,#050505_45%,#090909_100%)]" />
        <div className="absolute inset-x-0 top-0 h-[28rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)] opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.06]" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <p className="text-lg font-black uppercase tracking-[0.22em] text-white">PKY</p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">Principal Software Developer</p>
          </div>
          <nav className="hidden items-center gap-6 text-sm uppercase tracking-[0.16em] text-white/58 md:flex">
            <a href="#overview" className="transition hover:text-white">Overview</a>
            <a href="#projects" className="transition hover:text-white">Systems</a>
            <a href="#career" className="transition hover:text-white">Career</a>
            <a href="#skills" className="transition hover:text-white">Stack</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-8 lg:pt-12">
        <motion.section
          {...fadeInUp}
          id="overview"
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] px-6 py-8 md:px-8 md:py-10"
        >
          <div
            className="pointer-events-none absolute right-[-8%] top-0 hidden h-full w-[48%] lg:block"
            style={{
              clipPath: "polygon(18% 0,100% 0,100% 100%,0 100%)",
              background:
                "linear-gradient(135deg, rgba(132,255,0,0.18), rgba(255,255,255,0.02) 45%, rgba(132,255,0,0.06))",
            }}
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <Kicker>Inspired by sports launch pages</Kicker>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.34em] text-lime-300/85">Hyderabad · India</p>
              <h1 className="mt-3 max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.06em] text-white md:text-7xl xl:text-[7rem]">
                Phani Kaushik
                <span className="block text-white/42">Yanamandra</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
                Principal Software Developer building high-reliability cloud platforms, delivery systems,
                and AI-assisted automation for enterprise-scale database operations.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-black transition hover:translate-y-[-1px]"
                >
                  View Systems <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:kaushikypk@zohomail.in"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white/90 transition hover:bg-white/[0.08]"
                >
                  <Mail className="h-4 w-4" /> Contact
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">Role</p>
                  <p className="mt-3 text-2xl font-black uppercase tracking-[-0.04em]">Principal Software Developer</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">Focus</p>
                  <p className="mt-3 text-2xl font-black uppercase tracking-[-0.04em]">Cloud · Automation · Delivery</p>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-black/50 p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">Profile Intel</span>
                  <span className="rounded-full bg-lime-300 px-2 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-black">Active</span>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  <div className="min-w-0 flex items-start gap-3 rounded-2xl border border-white/8 bg-black/25 p-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-lime-300" />
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">Base</p>
                      <p className="text-sm text-white/82">Hyderabad</p>
                    </div>
                  </div>
                  <div className="min-w-0 flex items-start gap-3 rounded-2xl border border-white/8 bg-black/25 p-3">
                    <Phone className="mt-0.5 h-4 w-4 text-lime-300" />
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">Phone</p>
                      <a href="tel:+919000420174" className="text-sm text-white/82 hover:text-white">+91 9000420174</a>
                    </div>
                  </div>
                  <div className="min-w-0 flex items-start gap-3 rounded-2xl border border-white/8 bg-black/25 p-3 md:col-span-2 xl:col-span-1">
                    <Mail className="mt-0.5 h-4 w-4 text-lime-300" />
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">Email</p>
                      <a href="mailto:kaushikypk@zohomail.in" className="block break-all text-sm leading-6 text-white/82 hover:text-white">
                        kaushikypk@zohomail.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeInUp} className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <StatCard key={item.label} value={item.value} label={item.label} />
          ))}
        </motion.section>

        <motion.section {...fadeInUp} id="projects" className="mt-24">
          <SectionHeader
            eyebrow="Featured Systems"
            title="Built for Pressure. Shipped for Scale."
            copy="This version reframes your strongest work like a flagship product page, turning major initiatives into high-impact system modules."
          />

          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-lime-400/10 blur-3xl" />
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-lime-300">Main Feature</p>
              <h3 className="mt-4 max-w-xl text-3xl font-black uppercase tracking-[-0.04em] text-white md:text-5xl">
                {featuredProjects[0].title}
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">{featuredProjects[0].summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Chip>LLM Workflow Generation</Chip>
                <Chip>Parallel Execution</Chip>
                <Chip>Failure Handling</Chip>
                <Chip>OCI Lifecycle Operations</Chip>
              </div>
            </div>

            <div className="grid gap-4">
              {featuredProjects.slice(1).map((project) => (
                <div key={project.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-lime-300/90">{project.tag}</p>
                  <h3 className="mt-3 text-2xl font-black uppercase tracking-[-0.03em] text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">{project.summary}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/72">
                    View Module <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeInUp} id="career" className="mt-24">
          <SectionHeader
            eyebrow="Career Campaign"
            title="Season by Season Growth."
            copy="The layout below turns your experience into a sharper progression arc, similar to how sports brands present yearly features, upgrades, and milestones."
          />

          <div className="space-y-4">
            {experience.map((item, index) => (
              <div key={item.role + item.company} className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55">
                      Stage {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-4 text-2xl font-black uppercase tracking-[-0.03em] text-white md:text-3xl">{item.role}</h3>
                    <p className="mt-2 text-white/78">{item.company}</p>
                    <p className="mt-1 text-sm uppercase tracking-[0.14em] text-white/42">{item.period}</p>
                    <p className="mt-1 text-sm text-white/42">{item.location}</p>
                  </div>
                  <div className="grid gap-3">
                    {item.highlights.map((point) => (
                      <div key={point} className="flex gap-3 rounded-2xl border border-white/8 bg-black/30 px-4 py-3 text-white/74">
                        <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime-300" />
                        <p className="leading-7">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeInUp} id="skills" className="mt-24">
          <SectionHeader
            eyebrow="Player Attributes"
            title="A Multi-Layer Technical Stack."
            copy="Instead of a plain skills list, this preview presents your strengths like an elite build sheet: leadership, platform depth, and automation capability."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.title} className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-white/10 bg-lime-300/10 p-3">
                      <Icon className="h-5 w-5 text-lime-300" />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-[-0.03em] text-white">{group.title}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        <motion.section {...fadeInUp} className="mt-24 grid gap-4 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-lime-300/10 p-3">
                <Trophy className="h-5 w-5 text-lime-300" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-[-0.03em] text-white">Achievements</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/8 bg-black/25 px-4 py-3 text-white/76">
                  <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-lime-300" />
                  <p className="leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-lime-300/10 p-3">
                <GraduationCap className="h-5 w-5 text-lime-300" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-[-0.03em] text-white">Education</h3>
            </div>
            <div className="space-y-5">
              {education.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/8 bg-black/25 p-4">
                  <p className="text-lg font-bold uppercase tracking-[-0.02em] text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">{item.meta}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/42">{item.period}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeInUp} id="contact" className="mt-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(132,255,0,0.12),rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 md:p-8">
            <div className="absolute right-[-4rem] top-[-2rem] h-40 w-40 rounded-full bg-lime-300/20 blur-3xl" />
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-lime-300/90">Final Screen</p>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <h2 className="text-3xl font-black uppercase tracking-[-0.04em] text-white md:text-5xl">
                  Ready for cloud modernization, automation leadership, and high-reliability delivery.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/68">
                  This preview keeps your resume content intact, but presents it with the sharper contrast,
                  campaign-style hierarchy, and modular storytelling of a sports-brand landing page.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <a
                  href="mailto:kaushikypk@zohomail.in"
                  className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-3 text-sm font-black uppercase tracking-[0.15em] text-black"
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
                <a
                  href="tel:+919000420174"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/35 px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white/88"
                >
                  <Phone className="h-4 w-4" /> Call
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
