import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Terminal } from 'lucide-react';
import NetworkCanvas from './ui/NetworkCanvas';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.1,
    },
  },
};

const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/Antinodee',          icon: Github   },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/pvn-rajeev',    icon: Linkedin },
  { label: 'Email',    href: 'mailto:rajeev30403@gmail.com',           icon: Mail     },
];

const HERO_STATS = [
  { value: '397K+', label: 'Transactions', sub: 'Analyzed'  },
  { value: '$8.9M',  label: 'Revenue',      sub: 'Mapped'    },
  { value: '~95%',  label: 'Accuracy',     sub: 'ML Model'  },
];

function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Animated network canvas ─────────────────────────── */}
      <NetworkCanvas />

      {/* ── Ambient color orbs ──────────────────────────────── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-right teal orb */}
        <div
          className="blob-1"
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-10%',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(0,229,200,0.14) 0%, rgba(0,229,200,0.06) 40%, transparent 70%)',
          }}
        />
        {/* Bottom-left teal orb */}
        <div
          className="blob-2"
          style={{
            position: 'absolute',
            bottom: '-15%',
            left: '-10%',
            width: '560px',
            height: '560px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(0,229,200,0.10) 0%, transparent 65%)',
          }}
        />
        {/* Center-left violet orb */}
        <div
          className="blob-3"
          style={{
            position: 'absolute',
            top: '35%',
            left: '5%',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(129,140,248,0.08) 0%, transparent 65%)',
          }}
        />
        {/* Top-left subtle orb */}
        <div
          className="blob-1"
          style={{
            position: 'absolute',
            top: '10%',
            left: '-5%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(0,229,200,0.06) 0%, transparent 65%)',
            animationDelay: '6s',
          }}
        />

        {/* Scan line */}
        <div
          className="scan-line"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '1px',
            background:
              'linear-gradient(90deg, transparent 0%, rgba(0,229,200,0.0) 15%, rgba(0,229,200,0.22) 50%, rgba(0,229,200,0.0) 85%, transparent 100%)',
          }}
        />
      </div>

      {/* ── Edge vignette (light — lets network breathe) ─────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 85% 75% at 50% 50%, rgba(10,10,15,0.15) 0%, rgba(10,10,15,0.45) 55%, rgba(10,10,15,0.92) 100%)',
        }}
      />

      {/* ── Content ─────────────────────────────────────────── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto w-full"
      >
        {/* Availability badge */}
        <motion.div variants={fadeUp} className="mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 font-mono text-accent text-xs tracking-wide backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Available for Opportunities
          </span>
        </motion.div>

        {/* Terminal breadcrumb */}
        <motion.div
          variants={fadeUp}
          className="mb-3 flex items-center gap-2 font-mono text-text-muted text-xs"
        >
          <Terminal size={11} className="text-accent/50" strokeWidth={1.5} />
          <span>unlv · cs_ms · data_science · ml_engineering</span>
          <span
            className="inline-block w-1.5 h-3.5 bg-accent/50 animate-cursor-blink"
            style={{ borderRadius: '1px' }}
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="font-display font-bold text-white leading-tight tracking-tight"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)' }}
        >
          Rajeev{' '}
          <span
            style={{
              color: '#00e5c8',
              textShadow: '0 0 40px rgba(0,229,200,0.5), 0 0 80px rgba(0,229,200,0.2)',
            }}
          >
            Pernapati
          </span>
        </motion.h1>

        {/* Role strip */}
        <motion.div
          variants={fadeUp}
          className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1"
        >
          {['Data Scientist', 'ML Engineer', 'Software Engineer'].map((role, i) => (
            <span key={role} className="flex items-center gap-3">
              <span className="font-body text-text-secondary text-base md:text-lg">{role}</span>
              {i < 2 && (
                <span
                  style={{
                    display: 'inline-block',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: 'rgba(0,229,200,0.45)',
                  }}
                />
              )}
            </span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="mt-3 font-body text-text-primary text-base md:text-lg max-w-lg leading-relaxed opacity-80"
        >
          From raw data to deployed products — I build the full pipeline.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-6 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="group relative px-7 py-3 rounded-lg bg-accent text-primary font-display font-semibold text-sm overflow-hidden transition-all duration-200 hover:shadow-glow"
          >
            <span className="relative z-10">View Projects</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ background: 'rgba(255,255,255,0.12)' }}
            />
          </button>
          <a
            href="/Rajeev_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-lg border border-accent/35 text-accent font-display font-semibold text-sm hover:bg-accent/8 hover:border-accent/60 transition-all duration-200 backdrop-blur-sm"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Floating stat chips */}
        <motion.div
          variants={fadeUp}
          className="mt-7 flex flex-wrap items-center justify-center gap-3"
        >
          {HERO_STATS.map(({ value, label, sub }, i) => (
            <motion.div
              key={label}
              className="flex flex-col items-center px-5 py-3 rounded-xl backdrop-blur-sm"
              style={{
                background: 'rgba(26,26,37,0.65)',
                border: '1px solid rgba(0,229,200,0.12)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4.5,
                delay: i * 1.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <span
                className="font-mono font-bold text-xl leading-none"
                style={{
                  color: '#00e5c8',
                  textShadow: '0 0 16px rgba(0,229,200,0.45)',
                }}
              >
                {value}
              </span>
              <span className="font-display font-medium text-white text-xs mt-1.5 leading-none">
                {label}
              </span>
              <span className="font-mono text-text-muted text-[10px] mt-0.5">{sub}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div variants={fadeUp} className="mt-5 flex items-center gap-3">
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-lg border border-white/8 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 hover:shadow-glow-sm transition-all duration-200 backdrop-blur-sm"
              style={{ background: 'rgba(26,26,37,0.7)' }}
            >
              <Icon size={16} strokeWidth={1.75} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-text-muted hover:text-accent transition-colors duration-200"
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        aria-label="Scroll to about"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={14} strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  );
}

export default Hero;
