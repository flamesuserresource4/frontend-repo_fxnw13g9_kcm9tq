import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 -top-10 mx-auto h-24 max-w-5xl rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/20 bg-white/60 dark:bg-white/10 backdrop-blur p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Let’s build the next chapter
          </h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Have a complex ERP story to tell? I’d love to collaborate and craft systems that feel effortless.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="mailto:ruri@example.com"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-indigo-600 via-sky-600 to-cyan-500 px-4 py-2.5 text-white shadow hover:brightness-110 transition"
            >
              <Mail size={18} />
              Email Me
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-white/20 px-4 py-2.5 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/10 transition"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-white/20 px-4 py-2.5 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/10 transition"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>

          <p className="mt-8 text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Ruri Pelinandang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
