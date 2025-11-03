import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-28 flex items-center overflow-hidden">
      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-indigo-400/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/60 dark:bg-white/10 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-200 backdrop-blur"
          >
            Innovative Storytelling • ERP Specialist
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            Ruri Pelinandang
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400">ERP Full‑Stack Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl"
          >
            I build robust, scalable ERP experiences—from clean data models and APIs to delightful, interactive front‑ends. I turn complex business flows into intuitive stories that teams love to use.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-sky-600 to-cyan-500 px-5 py-3 text-white shadow hover:brightness-110 transition"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 dark:border-white/20 px-5 py-3 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/10 transition"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="relative h-[48vh] sm:h-[56vh] lg:h-[64vh] w-full"
        >
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/20 shadow-xl bg-white/40 dark:bg-white/10 backdrop-blur">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
