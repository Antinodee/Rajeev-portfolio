import { Mail, Linkedin, Github, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';
import SectionHeading from './ui/SectionHeading';

const CONTACTS = [
  {
    label: 'Email',
    value: 'rajeev30403@gmail.com',
    href: 'mailto:rajeev30403@gmail.com',
    icon: Mail,
    color: '#00e5c8',
    colorGlow: 'rgba(0,229,200,0.07)',
    colorDim: 'rgba(0,229,200,0.22)',
    cta: 'Send a message',
  },
  {
    label: 'LinkedIn',
    value: '/in/pvn-rajeev',
    href: 'https://linkedin.com/in/pvn-rajeev',
    icon: Linkedin,
    color: '#38bdf8',
    colorGlow: 'rgba(56,189,248,0.07)',
    colorDim: 'rgba(56,189,248,0.22)',
    cta: 'Connect with me',
  },
  {
    label: 'GitHub',
    value: '@Antinodee',
    href: 'https://github.com/Antinodee',
    icon: Github,
    color: '#a78bfa',
    colorGlow: 'rgba(167,139,250,0.07)',
    colorDim: 'rgba(167,139,250,0.22)',
    cta: 'View my code',
  },
];

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-10 max-w-6xl mx-auto scroll-mt-20">
      <ScrollReveal>
        <SectionHeading
          number="04"
          title="Get In Touch"
          subtitle="Open to Data Science, ML Engineering & Software Engineering roles — graduating May 2026."
        />
      </ScrollReveal>

      {/* CTA highlight */}
      <ScrollReveal delay={0.05}>
        <div
          className="relative p-6 rounded-2xl mb-8 overflow-hidden"
          style={{
            background: 'rgba(0,229,200,0.04)',
            border: '1px solid rgba(0,229,200,0.15)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #00e5c8, transparent)',
              opacity: 0.7,
            }}
          />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="font-display font-semibold text-white text-lg leading-snug">
                Let&apos;s build something together
              </p>
              <p className="font-body text-text-secondary text-sm mt-1">
                Based in Las Vegas, NV · Open to remote &amp; on-site roles
              </p>
            </div>
            <a
              href="mailto:rajeev30403@gmail.com"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-primary font-display font-semibold text-sm hover:shadow-glow transition-all duration-200 whitespace-nowrap"
            >
              Say Hello
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* Contact cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {CONTACTS.map(({ label, value, href, icon: Icon, color, colorGlow, colorDim, cta }, i) => (
          <ScrollReveal key={label} delay={i * 0.08}>
            <motion.a
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 p-5 rounded-2xl overflow-hidden relative"
              style={{
                background: '#1a1a25',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
              }}
              whileHover={{
                borderColor: colorDim,
                boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 24px ${colorGlow}, inset 0 1px 0 rgba(255,255,255,0.06)`,
                y: -3,
              }}
              transition={{ duration: 0.2 }}
            >
              {/* Top accent */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                  opacity: 0,
                  transition: 'opacity 0.2s',
                }}
                className="group-hover:opacity-80"
              />

              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: colorGlow, border: `1px solid ${colorDim}` }}
              >
                <Icon size={19} style={{ color }} strokeWidth={1.75} />
              </div>

              <div className="flex-1">
                <p className="font-display font-semibold text-white text-sm">{label}</p>
                <p
                  className="font-mono text-xs mt-1 break-all leading-snug"
                  style={{ color }}
                >
                  {value}
                </p>
              </div>

              <div
                className="flex items-center gap-1.5 font-body text-xs font-medium"
                style={{ color }}
              >
                {cta}
                <ArrowRight
                  size={12}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </div>
            </motion.a>
          </ScrollReveal>
        ))}
      </div>

      {/* Location */}
      <ScrollReveal delay={0.3}>
        <div className="flex items-center gap-2 mt-6 text-text-muted font-body text-sm">
          <MapPin size={13} className="text-accent/50 shrink-0" strokeWidth={1.75} />
          Las Vegas, Nevada, USA
        </div>
      </ScrollReveal>
    </section>
  );
}

export default Contact;
