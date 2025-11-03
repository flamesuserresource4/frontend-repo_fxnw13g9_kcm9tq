import { motion } from 'framer-motion';
import { Database, Server, Boxes, Shield } from 'lucide-react';

const projects = [
  {
    title: 'Unified Inventory & Ledger',
    icon: Boxes,
    summary:
      'A real-time inventory engine that connects purchasing, warehouse, and sales modules with audit‑proof movements.',
    stack: ['Node/TS API', 'MongoDB', 'Kafka', 'React'],
  },
  {
    title: 'Financial Posting Service',
    icon: Database,
    summary:
      'Double‑entry posting microservice that keeps subledgers and GL in sync with idempotent transactions.',
    stack: ['Python', 'FastAPI', 'MongoDB', 'Redis'],
  },
  {
    title: 'Access & Compliance Portal',
    icon: Shield,
    summary:
      'RBAC and compliance dashboards with SSO that narrate risk stories across the entire ERP.',
    stack: ['Next.js', 'Keycloak', 'ArgoCD', 'Grafana'],
  },
  {
    title: 'Workflow Orchestrator',
    icon: Server,
    summary:
      'Human‑in‑the‑loop orchestrations for approvals with timeline views and SLA prompts that guide decisions.',
    stack: ['Temporal', 'gRPC', 'Postgres', 'Tailwind'],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-10 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Selected Projects
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A snapshot of systems where engineering meets narrative—each module tells a story users can follow.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              variants={item}
              className="group relative rounded-2xl border border-white/20 bg-white/60 dark:bg-white/10 backdrop-blur p-6 shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-sky-400/0 to-cyan-400/0 group-hover:from-indigo-500/10 group-hover:via-sky-400/10 group-hover:to-cyan-400/10 transition pointer-events-none" />
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400 text-white shadow">
                  <p.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {p.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-full border border-slate-200/60 dark:border-white/20 text-slate-700 dark:text-slate-200 bg-white/70 dark:bg-white/10">
                    {s}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
