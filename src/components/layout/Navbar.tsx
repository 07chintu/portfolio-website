import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { navLinks, personalInfo } from '../../data/portfolio';
import { useTheme } from '../../hooks/useTheme';

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }); },
      { threshold: 0.4 }
    );
    sections.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    if (mobileOpen) {
      setMobileOpen(false);
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-slate-200/60 dark:border-slate-700/60' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 font-bold text-xl" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 text-white flex items-center justify-center text-sm font-bold shadow-glow">
              {personalInfo.initials}
            </span>
            <span className="hidden sm:block gradient-text font-bold">{personalInfo.name.split(' ')[0]}</span>
          </motion.button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <button onClick={() => handleNavClick(link.href)}
                    className={`nav-link px-4 py-2 rounded-lg text-base transition-all duration-200 ${
                      isActive ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 font-semibold' : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}>
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right */}
          <div className="flex items-center gap-2">
            <motion.button onClick={toggle} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              aria-label="Toggle dark mode"
              className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </motion.button>
            <a href="/Swagath_Jangili_Resume.pdf" target="_blank" rel="noopener noreferrer"
              className="hidden md:flex btn-secondary py-2 px-4 text-sm">
              Resume
            </a>
            <button onClick={() => handleNavClick('#contact')} className="hidden md:flex btn-primary py-2 px-4 text-sm">
              Contact Me
            </button>
            <button onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu">
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
              <ul className="py-3 space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button onClick={() => handleNavClick(link.href)}
                      className="w-full text-left px-4 py-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors font-medium">
                      {link.label}
                    </button>
                  </li>
                ))}
                <li className="px-4">
                  <a href="/Swagath_Jangili_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full justify-center text-sm">
                    Resume
                  </a>
                </li>
                <li className="px-4 pt-2">
                  <button onClick={() => handleNavClick('#contact')} className="btn-primary w-full justify-center text-sm">
                    Contact Me
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
