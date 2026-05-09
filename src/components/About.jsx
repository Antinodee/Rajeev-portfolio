import { GraduationCap, Award, ExternalLink, Layers, BadgeCheck, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';
import SectionHeading from './ui/SectionHeading';
import { certifications } from '../data/certifications';

const EDUCATION = [
  {
    institution: 'University of Nevada, Las Vegas',
    short: 'UNLV',
    degree: 'MS Computer Science',
    dates: 'Aug 2024 – May 2026',
    status: 'current',
  },
  {
    institution: 'Mahatma Gandhi Institute of Technology',
    short: 'MGIT',
    degree: 'BTech Computer Science & Engineering',
    dates: 'Dec 2020 – Jun 2024',
    status: 'completed',
  },
];

const STATS = [
  { value: '4', label: 'End-to-End', sub: 'ML Projects', Icon: Layers },
  { value: '4', label: 'Professional', sub: 'Certifications', Icon: BadgeCheck },
  { value: '5+', label: 'Languages', sub: 'Proficient', Icon: Code2 },
];

function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-10 max-w-6xl mx-auto scroll-mt-20">
      <ScrollReveal>
        <SectionHeading number="01" title="About Me" />
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
        {/* Left — bio + stats */}
        <ScrollReveal delay={0.1} className="lg:col-span-3 flex flex-col gap-8">
          <div className="space-y-4 font-body text-text-secondary text-base leading-relaxed">
            <p>
              MS Computer Science student at UNLV, working at the intersection of data science
              and software engineering. I build end-to-end solutions — data pipelines, ML models,
              and the APIs and interfaces that put them in front of real users.
            </p>
            <p>
              My work spans customer churn prediction, graph network analysis, SQL data
              warehousing, and automated code review tooling. I care about shipping things
              that actually run in production, not just notebooks.
            </p>
          </div>

          {/* Quick-stat strip */}
          <div className="grid grid-cols-3 gap-3">
            {STATS.map(({ value, label, sub, Icon }, i) => (
              <motion.div
                key={label}
                className="relative flex flex-col items-center text-center p-4 rounded-xl overflow-hidden"
                style={{
                  background: '#1a1a25',
                  border: '1px solid rgba(255,255,255,0.06)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
                whileHover={{
                  borderColor: 'rgba(0,229,200,0.25)',
                  boxShadow: '0 0 20px rgba(0,229,200,0.06), inset 0 1px 0 rgba(255,255,255,0.06)',
                }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Subtle top bloom */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '60px',
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(0,229,200,0.06) 0%, transparent 100%)',
                    pointerEvents: 'none',
                  }}
                />
                <Icon
                  size={16}
                  className="text-accent mb-2 opacity-70"
                  strokeWidth={1.5}
                />
                <span className="font-mono font-bold text-accent text-2xl leading-none">
                  {value}
                </span>
                <span className="font-display font-semibold text-white text-xs mt-1.5">
                  {label}
                </span>
                <span className="font-body text-text-muted text-[11px] mt-0.5">{sub}</span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Right — education + certs */}
        <div className="lg:col-span-2 space-y-7">
          {/* Education */}
          <ScrollReveal delay={0.15}>
            <p className="font-mono text-accent text-xs tracking-[0.18em] uppercase mb-4">
              Education
            </p>
            <div className="relative pl-4">
              {/* Timeline line */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '8px',
                  bottom: '8px',
                  width: '1px',
                  background: 'linear-gradient(180deg, rgba(0,229,200,0.4), rgba(0,229,200,0.1))',
                }}
              />

              <div className="space-y-3">
                {EDUCATION.map((edu, i) => (
                  <motion.div
                    key={edu.institution}
                    className="relative flex items-start gap-3 p-4 rounded-xl"
                    style={{
                      background: '#1a1a25',
                      border: edu.status === 'current'
                        ? '1px solid rgba(0,229,200,0.2)'
                        : '1px solid rgba(255,255,255,0.06)',
                      boxShadow: edu.status === 'current'
                        ? '0 0 20px rgba(0,229,200,0.04)'
                        : 'none',
                    }}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {/* Timeline dot */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-20px',
                        top: '18px',
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: edu.status === 'current' ? '#00e5c8' : '#2a2a3a',
                        border: '1.5px solid rgba(0,229,200,0.5)',
                        boxShadow: edu.status === 'current' ? '0 0 8px rgba(0,229,200,0.6)' : 'none',
                      }}
                    />

                    <div className="w-9 h-9 shrink-0 rounded-lg flex items-center justify-center"
                      style={{
                        background: edu.status === 'current' ? 'rgba(0,229,200,0.08)' : 'rgba(255,255,255,0.04)',
                        border: edu.status === 'current' ? '1px solid rgba(0,229,200,0.2)' : '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <GraduationCap
                        size={16}
                        strokeWidth={1.75}
                        style={{ color: edu.status === 'current' ? '#00e5c8' : '#55556a' }}
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-display font-semibold text-white text-sm leading-snug">
                        {edu.institution}
                      </p>
                      <p className="font-body text-text-secondary text-xs mt-0.5">
                        {edu.degree}
                      </p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="font-mono text-accent text-xs">{edu.dates}</span>
                        {edu.status === 'current' && (
                          <span className="font-mono text-[10px] px-1.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                            current
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Certifications */}
          <ScrollReveal delay={0.22}>
            <p className="font-mono text-accent text-xs tracking-[0.18em] uppercase mb-4">
              Certifications
            </p>
            <div className="space-y-2">
              {certifications.map((cert, i) => {
                const inner = (
                  <div className="flex items-center gap-2.5">
                    <Award
                      size={13}
                      className="text-accent shrink-0 opacity-70"
                      strokeWidth={1.75}
                    />
                    <span className="font-body text-text-primary text-xs flex-1 leading-snug">
                      {cert.name}
                    </span>
                    <span className="font-mono text-text-muted text-[10px] shrink-0">
                      {cert.issuer}
                    </span>
                    {cert.url && (
                      <ExternalLink size={10} className="text-text-muted/60 shrink-0" />
                    )}
                  </div>
                );

                const sharedStyle = {
                  background: '#1a1a25',
                  border: '1px solid rgba(255,255,255,0.06)',
                };

                return cert.url ? (
                  <a
                    key={cert.id}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2.5 rounded-lg transition-all duration-200 hover:border-accent/25"
                    style={sharedStyle}
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={cert.id}
                    className="px-3 py-2.5 rounded-lg"
                    style={sharedStyle}
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default About;
