import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { personalInfo, navLinks } from '../../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();
  const handleNavClick = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-slate-900 dark:bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 text-white flex items-center justify-center font-bold text-sm">
                {personalInfo.initials}
              </span>
              <span className="text-white font-bold text-lg">{personalInfo.name}</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">{personalInfo.tagline}</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button onClick={() => handleNavClick(link.href)} className="text-slate-400 hover:text-primary-400 transition-colors text-sm">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h3>
            <div className="space-y-3">
              <a href={`https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`} className="flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors text-sm"><FiMail size={14} />{personalInfo.email}</a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors text-sm"><FiLinkedin size={14} />LinkedIn</a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors text-sm"><FiGithub size={14} />GitHub</a>
            </div>
            <div className="flex gap-3 mt-5">
              {[{ icon: <FiGithub size={16} />, href: personalInfo.github, label: 'GitHub' },
                { icon: <FiLinkedin size={16} />, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: <FiMail size={16} />, href: `https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`, label: 'Email' }]
                .map(({ icon, href, label }) => (
                  <a key={label} href={href} target={label !== 'Email' ? '_blank' : undefined} rel="noopener noreferrer" aria-label={label}
                    className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200">
                    {icon}
                  </a>
                ))}
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>© {year} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">Built with <FiHeart size={11} className="text-red-500" /> using React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
