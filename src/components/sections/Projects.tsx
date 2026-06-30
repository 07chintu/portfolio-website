import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Badge from '../ui/Badge';
import SectionHeading from '../ui/SectionHeading';
import { projects } from '../../data/portfolio';

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card card-hover overflow-hidden"
    >
      <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              {project.badge && (
                <Badge color={project.badgeColor as 'green' | 'blue'} size="sm">
                  {project.badge === 'Live Production' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-current mr-1 animate-pulse" />
                  )}
                  {project.badge}
                </Badge>
              )}
              {project.featured && <Badge color="purple" size="sm">Featured</Badge>}
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{project.title}</h3>
            <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">{project.subtitle}</p>
          </div>
          <div className="flex gap-2 flex-shrink-0 flex-wrap">
            {project.githubUrls ? (
              project.githubUrls.map(({ label, url }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                  aria-label={`GitHub ${label}`} title={`GitHub (${label})`}
                  className="flex items-center gap-1 px-2 h-8 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary-400 text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all text-xs font-medium">
                  <FiGithub size={13} />
                  <span>{label}</span>
                </a>
              ))
            ) : project.githubUrl ? (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary-400 text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 flex items-center justify-center transition-all">
                <FiGithub size={14} />
              </a>
            ) : null}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo"
                className="w-8 h-8 rounded-lg bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 hover:bg-primary-600 hover:text-white text-primary-600 dark:text-primary-400 flex items-center justify-center transition-all">
                <FiExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

        <ul className="space-y-1.5 mb-4">
          {(expanded ? project.highlights : project.highlights.slice(0, 3)).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex-shrink-0 mt-1.5" />
              {h}
            </li>
          ))}
        </ul>

        {project.highlights.length > 3 && (
          <button onClick={() => setExpanded(!expanded)}
            className="mb-4 flex items-center gap-1 text-xs text-primary-600 dark:text-primary-400 font-medium hover:underline">
            {expanded ? <><FiChevronUp size={11} />Show less</> : <><FiChevronDown size={11} />{project.highlights.length - 3} more</>}
          </button>
        )}

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-max">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="Production systems I've built — from AI-powered document platforms to automated trading engines."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {featured.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>

        {others.length > 0 && (
          <>
            <div className="flex items-center gap-3 mt-12 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                Other Projects
              </span>
              <div className="flex-1 h-px bg-slate-100 dark:bg-slate-800" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {others.map((p, i) => <ProjectCard key={p.id} project={p} index={i + featured.length} />)}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
