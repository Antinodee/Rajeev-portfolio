function Badge({ children, variant = 'default' }) {
  const styles = {
    default:
      'bg-secondary/80 text-text-secondary border border-white/8 hover:border-accent/25 hover:text-text-primary',
    accent:
      'bg-accent/8 text-accent border border-accent/20 hover:bg-accent/15 hover:border-accent/35',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium transition-all duration-200 ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

export default Badge;
