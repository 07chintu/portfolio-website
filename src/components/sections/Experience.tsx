import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi';
import { experience } from '../../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-50 dark:bg-slate-800/40">
      <div className="container-max">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-20 items-start">

          {/* LEFT — sticky heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-block text-xs font-bold tracking-widest text-primary-600 dark:text-primary-400 uppercase mb-3">
              Work Experience
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-4">
              Professional<br />Journey
            </h2>
            <div className="h-1 w-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full mb-5" />
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Building production systems that handle real workloads across trading platforms and creator applications.
            </p>
          </motion.div>

          {/* RIGHT — timeline */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary-600 via-primary-400/40 to-transparent hidden sm:block" />

            <div className="space-y-8">
              {experience.map((exp, idx) => (
                <motion.div
                  key={`${exp.company}-${idx}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative sm:pl-16"
                >
                  <div className="absolute left-0 top-5 hidden sm:flex">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 text-white flex items-center justify-center shadow-glow z-10">
                      <FiBriefcase size={18} />
                    </div>
                  </div>

                  <div className="card p-6 sm:p-8 card-hover">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-0.5">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                          {exp.current && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-slow" />Current
                            </span>
                          )}
                        </div>
                        <p className="text-primary-600 dark:text-primary-400 font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex flex-col gap-1 sm:items-end text-xs text-slate-500 dark:text-slate-400 flex-shrink-0">
                        <span className="flex items-center gap-1.5"><FiCalendar size={11} />{exp.duration}</span>
                        <span className="flex items-center gap-1.5"><FiMapPin size={11} />{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2.5 mb-5">
                      {exp.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-500 mt-2" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
