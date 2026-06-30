import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import { personalInfo } from '../../data/portfolio';

interface FormState { name: string; email: string; subject: string; message: string; }
const initialForm: FormState = { name: '', email: '', subject: '', message: '' };

const contactInfo = [
  { icon: <FiMail size={18} />, label: 'Email', value: personalInfo.email, href: `https://mail.google.com/mail/?view=cm&to=${personalInfo.email}` },
  { icon: <FiPhone size={18} />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: <FiLinkedin size={18} />, label: 'LinkedIn', value: 'swagathjangili', href: personalInfo.linkedin },
  { icon: <FiGithub size={18} />, label: 'GitHub', value: 'github.com/swagathjangili', href: personalInfo.github },
  { icon: <FiMapPin size={18} />, label: 'Location', value: personalInfo.location },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false); setSubmitted(true); setForm(initialForm);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const inputCls = (field: keyof FormState) =>
    `w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-200 outline-none focus:ring-2 ${
      errors[field]
        ? 'border-red-400 dark:border-red-600 focus:ring-red-200 dark:focus:ring-red-900/40'
        : 'border-slate-200 dark:border-slate-700 focus:border-primary-400 dark:focus:border-primary-500 focus:ring-primary-100 dark:focus:ring-primary-900/30'
    }`;

  return (
    <section id="contact" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-max">
        <SectionHeading eyebrow="Get In Touch" title="Let's Work Together"
          subtitle="I'm actively looking for new opportunities. Have a project or role in mind? Let's talk." />
        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2 space-y-4">
            <div className="card p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Hire Me or Collaborate</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                Open to full-time roles in Java / Spring Boot, Full-Stack, or Backend Engineering. Also happy to discuss freelance or collaborative projects.
              </p>
              <div className="space-y-4">
                {contactInfo.map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0">
                      {icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} target={label !== 'Email' && label !== 'Phone' ? '_blank' : undefined} rel="noopener noreferrer"
                          className="text-sm text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors break-all">{value}</a>
                      ) : <p className="text-sm text-slate-700 dark:text-slate-300">{value}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card p-5 border-l-4 border-emerald-500">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-slow" />
                <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">Currently Available</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">Open to full-time and contract positions. Typically respond within 24 hours.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="lg:col-span-3">
            {submitted ? (
              <div className="card p-10 text-center h-full flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <FiCheckCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs text-center">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary text-sm mt-2">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe" className={inputCls('name')} />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@company.com" className={inputCls('email')} />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Subject</label>
                  <input name="subject" value={form.subject} onChange={handleChange} placeholder="Job Opportunity / Collaboration" className={inputCls('subject')} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell me about the role or project..." className={`${inputCls('message')} resize-none`} />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>
                <motion.button type="submit" disabled={submitting} whileHover={{ scale: submitting ? 1 : 1.02 }} whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed">
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>Sending...
                    </span>
                  ) : <><FiSend size={15} />Send Message</>}
                </motion.button>
                <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
                  Or reach me directly at <a href={`https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`} className="text-primary-600 dark:text-primary-400 hover:underline">{personalInfo.email}</a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
