import { ArrowRight, BarChart2, Code2, Database, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';
import useCountUp from '../hooks/useCountUp';

export const PROJECT_META = {
  'ecommerce-analytics': {
    color: '#00e5c8',
    colorDim: 'rgba(0,229,200,0.22)',
    colorGlow: 'rgba(0,229,200,0.07)',
    colorShadow: 'rgba(0,229,200,0.18)',
    Icon: BarChart2,
    tag: 'ML Analytics',
  },
  'codesense': {
    color: '#a78bfa',
    colorDim: 'rgba(167,139,250,0.22)',
    colorGlow: 'rgba(167,139,250,0.07)',
    colorShadow: 'rgba(167,139,250,0.18)',
    Icon: Code2,
    tag: 'Dev Tools',
  },
  'retail-data-warehouse': {
    color: '#38bdf8',
    colorDim: 'rgba(56,189,248,0.22)',
    colorGlow: 'rgba(56,189,248,0.07)',
    colorShadow: 'rgba(56,189,248,0.18)',
    Icon: Database,
    tag: 'Data Engineering',
  },
  'flight-network-analysis': {
    color: '#fb923c',
    colorDim: 'rgba(251,146,60,0.22)',
    colorGlow: 'rgba(251,146,60,0.07)',
    colorShadow: 'rgba(251,146,60,0.18)',
    Icon: GitBranch,
    tag: 'Graph Analysis',
  },
};

const DEFAULT_META = {
  color: '#00e5c8',
  colorDim: 'rgba(0,229,200,0.22)',
  colorGlow: 'rgba(0,229,200,0.07)',
  colorShadow: 'rgba(0,229,200,0.18)',
  Icon: BarChart2,
  tag: 'Project',
};

function ProjectCard({ project, index, onOpen }) {
  const [statDisplay, statRef] = useCountUp(project.heroStat.value);
  const num = String(index + 1).padStart(2, '0');
  const { color, colorDim, colorGlow, colorShadow, Icon, tag } =
    PROJECT_META[project.id] ?? DEFAULT_META;

  return (
    <motion.article
      className="project-card relative flex flex-col w-full min-h-[400px] rounded-2xl cursor-pointer group overflow-hidden"
      style={{
        background: '#1a1a25',
        border: '1px solid rgba(255,255,255,0.06)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)',
      }}
      whileHover={{
        y: -6,
        borderColor: colorDim,
        boxShadow: `0 16px 48px rgba(0,0,0,0.55), 0 0 0 1px ${colorDim}, 0 0 40px ${colorGlow}, inset 0 1px 0 rgba(255,255,255,0.06)`,
      }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      onClick={() => onOpen(project)}
    >
      {/* Top accent gradient bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(90deg, transparent 0%, ${color} 35%, ${color} 65%, transparent 100%)`,
          opacity: 0.85,
        }}
      />

      {/* Top color bloom */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '140px',
          background: `radial-gradient(ellipse 70% 100% at 50% 0%, ${colorGlow} 0%, transparent 100%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Corner grid decoration */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          width: '60px',
          height: '60px',
          backgroundImage: `radial-gradient(circle, ${colorDim} 1px, transparent 1px)`,
          backgroundSize: '10px 10px',
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />

      <div className="relative flex flex-col h-full p-6">
        {/* Header: number + tag + period */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <span
              className="font-mono text-xs font-bold tracking-widest"
              style={{ color }}
            >
              {num}
            </span>
            <span
              className="font-mono text-[10px] px-2 py-0.5 rounded-full border tracking-wide"
              style={{
                color,
                borderColor: colorDim,
                background: colorGlow,
              }}
            >
              {tag}
            </span>
          </div>
          <span className="font-mono text-text-muted text-xs">{project.period}</span>
        </div>

        {/* Icon + Hero stat */}
        <div className="flex items-start gap-4 mb-6">
          <div
            className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center mt-0.5"
            style={{
              background: colorGlow,
              border: `1px solid ${colorDim}`,
              boxShadow: `0 0 16px ${colorGlow}`,
            }}
          >
            <Icon size={19} style={{ color }} strokeWidth={1.75} />
          </div>

          <div className="flex-1 min-w-0">
            <p
              ref={statRef}
              className="font-mono font-bold leading-none tracking-tight tabular-nums"
              style={{
                color,
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                textShadow: `0 0 20px ${colorShadow}`,
              }}
            >
              {statDisplay}
            </p>
            <p
              className="font-body text-xs mt-1.5 uppercase tracking-[0.12em]"
              style={{ color: 'rgba(136,136,160,0.7)' }}
            >
              {project.heroStat.label}
            </p>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-white text-[0.95rem] leading-snug mb-2.5">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-body text-text-secondary text-sm leading-relaxed flex-1">
          {project.shortDesc}
        </p>

        {/* Footer */}
        <div
          className="mt-auto pt-5"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono border transition-all duration-200 group-hover:opacity-100"
                style={{
                  color,
                  borderColor: colorDim,
                  background: colorGlow,
                  opacity: 0.85,
                }}
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono border border-white/8 bg-secondary/80 text-text-muted">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          {/* View details CTA */}
          <button
            onClick={(e) => { e.stopPropagation(); onOpen(project); }}
            className="flex items-center gap-1.5 font-body text-sm font-medium transition-all duration-200"
            style={{ color }}
            aria-label={`View details for ${project.title}`}
          >
            View Details
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1.5 transition-transform duration-200"
            />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
