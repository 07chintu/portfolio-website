interface Props {
  children: React.ReactNode;
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'slate' | 'cyan' | 'red';
  size?: 'sm' | 'md';
}

const colorMap = {
  blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800',
  green: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
  purple: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300 border border-violet-200 dark:border-violet-800',
  orange: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300 border border-orange-200 dark:border-orange-800',
  slate: 'bg-slate-100 text-slate-800 dark:bg-slate-700/60 dark:text-slate-300 border border-slate-200 dark:border-slate-600',
  cyan: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800',
  red: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300 border border-red-200 dark:border-red-800',
};

export default function Badge({ children, color = 'slate', size = 'sm' }: Props) {
  return (
    <span
      className={`inline-flex items-center font-semibold rounded-full ${
        size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm'
      } ${colorMap[color]}`}
    >
      {children}
    </span>
  );
}
