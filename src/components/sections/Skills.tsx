import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { skills } from '../../data/portfolio';
import type { SkillCategory } from '../../types';

const categories: (SkillCategory | 'All')[] = [
  'All', 'AI & Generative AI', 'Backend', 'Frontend', 'Database', 'Cloud & DevOps', 'Blockchain & Web3', 'Tools',
];

const categoryIcon: Record<string, string> = {
  'AI & Generative AI': '🤖',
  Backend:              '⚙️',
  Frontend:             '🎨',
  Database:             '🗄️',
  'Cloud & DevOps':     '☁️',
  'Blockchain & Web3':  '🔗',
  Tools:                '🛠️',
};

const allCats = categories.filter((c): c is SkillCategory => c !== 'All');

export default function Skills() {
  const [active, setActive] = useState<SkillCategory | 'All'>('All');
  const visibleCats = active === 'All' ? allCats : [active as SkillCategory];

  return (
    <section id="skills" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-max">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Skills & Expertise"
          subtitle="Technologies I've used to build production systems — from AI pipelines to real-time trading platforms."
        />

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-primary-600 text-white shadow-glow'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <span>{cat === 'All' ? '⚡' : categoryIcon[cat]}</span>
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
          >
            {visibleCats.map((cat, ci) => {
              const catSkills = skills.filter((s) => s.category === cat);
              if (!catSkills.length) return null;

              return (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: active === 'All' ? ci * 0.05 : 0 }}
                >
                  {/* Category header — only in All view */}
                  {active === 'All' && (
                    <div className="flex items-center gap-2.5 mb-4">
                      <span className="text-sm leading-none">{categoryIcon[cat]}</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                        {cat}
                      </span>
                      <div className="flex-1 h-px bg-slate-100 dark:bg-slate-800" />
                      <span className="text-xs text-slate-300 dark:text-slate-600 font-mono tabular-nums">
                        {catSkills.length}
                      </span>
                    </div>
                  )}

                  {/* Skill chips */}
                  <div className="flex flex-wrap gap-2">
                    {catSkills.map((skill, si) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: si * 0.02 }}
                        className="inline-flex items-center px-3.5 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-150 cursor-default select-none"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
