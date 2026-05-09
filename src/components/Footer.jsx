import { ChevronUp, Github, Linkedin, Mail } from 'lucide-react';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/Antinodee', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/pvn-rajeev', icon: Linkedin },
  { label: 'Email', href: 'mailto:rajeev30403@gmail.com', icon: Mail },
];

function Footer() {
  const scrollToTop = () => {
    const el = document.getElementById('home');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      className="py-8 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 relative">
        {/* Left — branding */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-display font-semibold text-white text-sm">
            Rajeev<span className="text-accent">.</span>
          </span>
          <p className="font-body text-text-muted text-xs">
            © 2026 Rajeev Pernapati · Las Vegas, NV
          </p>
        </div>

        {/* Center — social links */}
        <div className="flex items-center gap-3">
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-8 h-8 rounded-lg border border-white/6 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
              style={{ background: 'rgba(26,26,37,0.6)' }}
            >
              <Icon size={14} strokeWidth={1.75} />
            </a>
          ))}
        </div>

        {/* Right — back to top */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex items-center gap-1.5 font-mono text-xs text-text-muted hover:text-accent transition-colors duration-200 group"
        >
          Back to top
          <div className="p-1.5 rounded-lg border border-white/6 group-hover:border-accent/30 transition-colors duration-200">
            <ChevronUp size={12} strokeWidth={2} />
          </div>
        </button>
      </div>

      {/* Divider at very bottom */}
      <div className="section-divider mt-6" />
    </footer>
  );
}

export default Footer;
