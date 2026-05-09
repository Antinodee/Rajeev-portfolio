import { motion } from 'framer-motion';
import { Code2, Globe, BarChart2, Database, Cloud } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';
import SectionHeading from './ui/SectionHeading';
import { skillCategories } from '../data/skills';

const CATEGORY_META = {
  'Programming Languages': { Icon: Code2, color: '#00e5c8', colorGlow: 'rgba(0,229,200,0.07)', colorDim: 'rgba(0,229,200,0.2)' },
  'Web Development':       { Icon: Globe,    color: '#38bdf8', colorGlow: 'rgba(56,189,248,0.07)', colorDim: 'rgba(56,189,248,0.2)' },
  'Data & ML':             { Icon: BarChart2, color: '#a78bfa', colorGlow: 'rgba(167,139,250,0.07)', colorDim: 'rgba(167,139,250,0.2)' },
  'Databases':             { Icon: Database,  color: '#fb923c', colorGlow: 'rgba(251,146,60,0.07)',  colorDim: 'rgba(251,146,60,0.2)' },
  'Cloud & DevOps':        { Icon: Cloud,     color: '#4ade80', colorGlow: 'rgba(74,222,128,0.07)',  colorDim: 'rgba(74,222,128,0.2)' },
};

const DEFAULT_META = { Icon: Code2, color: '#00e5c8', colorGlow: 'rgba(0,229,200,0.07)', colorDim: 'rgba(0,229,200,0.2)' };

const pillVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.22, ease: 'easeOut' } },
};

const pillGroup = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

function SkillCategory({ category, delay }) {
  const { Icon, color, colorGlow, colorDim } = CATEGORY_META[category.name] ?? DEFAULT_META;

  return (
    <ScrollReveal delay={delay}>
      <motion.div
        className="relative p-5 rounded-2xl overflow-hidden h-full"
        style={{
          background: '#1a1a25',
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
        }}
        whileHover={{
          borderColor: colorDim,
          boxShadow: `0 0 28px ${colorGlow}, inset 0 1px 0 rgba(255,255,255,0.06)`,
        }}
        transition={{ duration: 0.25 }}
      >
        {/* Top bloom */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '80px',
            background: `radial-gradient(ellipse 70% 100% at 50% 0%, ${colorGlow} 0%, transparent 100%)`,
            pointerEvents: 'none',
            opacity: 1.5,
          }}
        />

        {/* Corner dot pattern */}
        <div
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            width: '48px',
            height: '48px',
            backgroundImage: `radial-gradient(circle, ${colorDim} 1px, transparent 1px)`,
            backgroundSize: '8px 8px',
            opacity: 0.35,
            pointerEvents: 'none',
          }}
        />

        <div className="relative">
          {/* Category header */}
          <div className="flex items-center gap-2.5 mb-4">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: colorGlow, border: `1px solid ${colorDim}` }}
            >
              <Icon size={15} style={{ color }} strokeWidth={1.75} />
            </div>
            <p
              className="font-mono text-xs tracking-[0.15em] uppercase font-semibold"
              style={{ color }}
            >
              {category.name}
            </p>
          </div>

          {/* Primary skills */}
          <motion.div
            variants={pillGroup}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 mb-3"
          >
            {category.primary.map((skill) => (
              <motion.span
                key={skill}
                variants={pillVariants}
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono border cursor-default transition-all duration-200"
                style={{
                  color,
                  borderColor: colorDim,
                  background: colorGlow,
                }}
                whileHover={{
                  background: colorDim,
                  scale: 1.04,
                }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Secondary skills */}
          {category.secondary.length > 0 && (
            <p className="font-body text-text-muted text-xs leading-relaxed">
              <span className="font-mono text-text-muted/60 text-[10px] uppercase tracking-wider mr-1.5">
                also
              </span>
              {category.secondary.join(' · ')}
            </p>
          )}
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-10 max-w-6xl mx-auto scroll-mt-20">
      <ScrollReveal>
        <SectionHeading number="02" title="Technical Skills" />
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, i) => (
          <SkillCategory
            key={category.name}
            category={category}
            delay={i * 0.07}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
