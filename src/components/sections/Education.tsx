import { motion } from 'framer-motion';
import { FiAward, FiMapPin, FiCalendar, FiBook } from 'react-icons/fi';
import { education } from '../../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="section-padding bg-slate-50 dark:bg-slate-800/40">
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
              Education
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-4">
              Academic<br />Background
            </h2>
            <div className="h-1 w-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full mb-5" />
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              The foundation that shaped my technical thinking and problem-solving approach.
            </p>
          </motion.div>

          {/* RIGHT — education card */}
          <div>
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card overflow-hidden card-hover"
              >
                <div className="h-1.5 bg-gradient-to-r from-primary-600 to-accent-500" />
                <div className="p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white shadow-glow">
                        <FiAward size={26} />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{edu.degree}</h3>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold text-lg mb-5">{edu.field}</p>

                      <div className="grid sm:grid-cols-2 gap-4 mb-6">
                        {[
                          { icon: <FiBook size={14} />, label: 'Institution', value: edu.institution },
                          { icon: <FiMapPin size={14} />, label: 'Location', value: edu.location },
                          { icon: <FiCalendar size={14} />, label: 'Graduation', value: edu.year },
                          { icon: <FiAward size={14} />, label: 'CGPA', value: `${edu.cgpa} / 10` },
                        ].map(({ icon, label, value }) => (
                          <div key={label} className="flex items-start gap-2.5">
                            <span className="text-primary-500 mt-0.5 flex-shrink-0">{icon}</span>
                            <div>
                              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">{label}</p>
                              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{value}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Academic Performance</span>
                          <span className="text-sm font-bold text-primary-600 dark:text-primary-400">{edu.cgpa} / 10</span>
                        </div>
                        <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(parseFloat(edu.cgpa) / 10) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                            className="h-full rounded-full bg-gradient-to-r from-primary-600 to-accent-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
