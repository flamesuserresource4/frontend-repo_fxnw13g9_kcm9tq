import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-[#0b0e14] dark:to-[#0b0e14] text-slate-900 dark:text-white">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
