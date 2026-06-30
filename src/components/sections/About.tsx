import { motion } from 'framer-motion';
import { FiCode, FiZap, FiLayers, FiTarget, FiMail, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import { personalInfo } from '../../data/portfolio';

const highlights = [
  { icon: <FiCode size={20} />, title: 'Backend Engineering', desc: 'Scalable microservices, REST APIs, WebSocket systems' },
  { icon: <FiZap size={20} />, title: 'Real-Time Systems', desc: 'Low-latency trading engines and live streaming infrastructure' },
  { icon: <FiLayers size={20} />, title: 'Full-Stack Delivery', desc: 'End-to-end development from database to UI' },
  { icon: <FiTarget size={20} />, title: 'Production Focused', desc: 'Shipping systems that run reliably under real-world load' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-800/50">
      <div className="container-max">
        <SectionHeading eyebrow="About Me" title="Who I Am"
          subtitle="A developer who builds systems that matter — reliable, scalable, and production-ready." />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2">
            <div className="card p-8 text-center sticky top-24">
              <div className="relative inline-flex mb-6">
                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 flex items-center justify-center text-white text-4xl font-black shadow-glow mx-auto">
                  {personalInfo.initials}
                </div>
                <span className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/40 border-2 border-white dark:border-slate-800 flex items-center justify-center">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse-slow" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{personalInfo.name}</h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-6">{personalInfo.title}</p>
              <div className="space-y-3 mb-6 text-left">
                {[{ icon: <FiMail size={14} />, text: personalInfo.email, href: `https://mail.google.com/mail/?view=cm&to=${personalInfo.email}` },
                  { icon: <FiMapPin size={14} />, text: personalInfo.location }]
                  .map(({ icon, text, href }) => (
                    <div key={text} className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                      <span className="text-primary-500 flex-shrink-0">{icon}</span>
                      {href ? <a href={href} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors truncate">{text}</a> : <span>{text}</span>}
                    </div>
                  ))}
              </div>
              <div className="flex justify-center gap-3">
                {[{ icon: <FiGithub size={16} />, href: personalInfo.github, label: 'GitHub' },
                  { icon: <FiLinkedin size={16} />, href: personalInfo.linkedin, label: 'LinkedIn' },
                  { icon: <FiMail size={16} />, href: `https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`, label: 'Email' }]
                  .map(({ icon, href, label }) => (
                    <a key={label} href={href} target={label !== 'Email' ? '_blank' : undefined} rel="noopener noreferrer" aria-label={label}
                      className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 flex items-center justify-center transition-all duration-200">
                      {icon}
                    </a>
                  ))}
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-3 space-y-8">
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="space-y-4">
                {personalInfo.about.map((para, i) => (
                  <p key={i} className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">{para}</p>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.3 }} className="card p-5 card-hover group">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-3 group-hover:bg-primary-600 group-hover:text-white transition-all duration-200">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
              <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
                Get In Touch
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
