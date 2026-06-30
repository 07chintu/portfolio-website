import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolio';

const techBadges = ['Java', 'Spring Boot', 'Node.js', 'React', 'Next.js', 'NestJS', 'WebSocket', 'Docker'];

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) setTimeout(() => setDeleting(true), pause);
        else setCharIndex((c) => c + 1);
      } else {
        setText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setWordIndex((w) => (w + 1) % words.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [text, wordIndex, charIndex, deleting, words, speed, pause]);

  return text;
}

const containerVariants: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const itemVariants: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function Hero() {
  const role = useTypewriter(personalInfo.roles, 75, 2000);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-slate-900 pt-16"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary-200/30 dark:bg-primary-900/20 blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent-300/15 dark:bg-accent-900/15 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-violet-200/15 dark:bg-violet-900/10 blur-3xl animate-blob animation-delay-4000" />
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] hero-grid-bg" />
      </div>

      <div className="relative z-10 w-full pl-14 sm:pl-24 lg:pl-52 pr-4 sm:pr-8 lg:pr-12">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-center">

          {/* LEFT — all text content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">

            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-slow" />
                Open to opportunities
              </span>
            </motion.div>

            <motion.p variants={itemVariants} className="text-slate-500 dark:text-slate-400 font-medium text-lg mb-2">
              Hello, I'm
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight tracking-tight"
            >
              <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>
              <span className="text-slate-800 dark:text-white"> {personalInfo.name.split(' ')[1]}</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-xl sm:text-2xl font-semibold text-slate-600 dark:text-slate-300 mb-5 h-9"
            >
              <span>{role}</span>
              <span className="animate-blink text-primary-600 dark:text-primary-400 ml-0.5">|</span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-8"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              <motion.button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-base px-8 py-3.5"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              >
                View My Work
              </motion.button>
              <motion.button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary text-base px-8 py-3.5"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              >
                <FiMail size={16} /> Get In Touch
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              {[
                { icon: <FiLinkedin size={19} />, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: <FiMail size={19} />, href: `https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`, label: 'Email' },
              ].map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-primary-500 text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 flex items-center justify-center transition-all duration-200 bg-white dark:bg-slate-800 hover:shadow-glow"
                >
                  {icon}
                </motion.a>
              ))}
              <div className="h-px w-12 bg-gradient-to-r from-slate-200 dark:from-slate-700 to-transparent" />
              <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">{personalInfo.location.split(',')[0]}</span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {techBadges.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.06 }}
                  className="tech-tag"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — circular avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden lg:flex items-center justify-start"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 blur-xl opacity-20 scale-110" />
              {/* Gradient border ring */}
              <div className="w-72 h-72 rounded-full p-1 bg-gradient-to-br from-primary-600 to-accent-500 shadow-glow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 flex items-center justify-center">
                  <span className="text-white text-6xl font-black tracking-tight select-none">
                    {personalInfo.initials}
                  </span>
                </div>
              </div>
              {/* Available dot */}
              <span className="absolute bottom-3 right-3 w-6 h-6 rounded-full bg-emerald-500 border-4 border-white dark:border-slate-900 shadow-sm" />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <FiArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
