import { useState } from 'react';
import { Menu, X, Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/10 bg-white/50 dark:bg-black/30 border border-white/20 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 md:py-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400 text-white">
                <Rocket size={18} />
              </div>
              <div className="leading-tight">
                <p className="text-sm text-slate-600 dark:text-slate-300">ERP Full‑Stack</p>
                <p className="font-semibold text-slate-900 dark:text-white">Ruri Pelinandang</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="hidden md:flex items-center gap-3">
                <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition">
                  <Github size={18} />
                </a>
                <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition">
                  <Linkedin size={18} />
                </a>
                <a aria-label="Email" href="#contact" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition">
                  <Mail size={18} />
                </a>
              </div>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/20 px-4 py-2">
              <div className="flex flex-col py-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="py-2 text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center gap-3 pt-2">
                  <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition">
                    <Github size={18} />
                  </a>
                  <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition">
                    <Linkedin size={18} />
                  </a>
                  <a aria-label="Email" href="#contact" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
