import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowRight, Github } from 'lucide-react';
import { PROJECT_META } from './ProjectCard';

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const DEFAULT_COLOR = '#00e5c8';

function ProjectModal({ project, onClose }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  const meta = PROJECT_META[project?.id];
  const color = meta?.color ?? DEFAULT_COLOR;
  const colorDim = meta?.colorDim ?? 'rgba(0,229,200,0.22)';
  const colorGlow = meta?.colorGlow ?? 'rgba(0,229,200,0.07)';
  const Icon = meta?.Icon;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key !== 'Tab') return;

      const focusable = Array.from(panelRef.current?.querySelectorAll(FOCUSABLE) ?? []);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0"
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(4px)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Panel */}
        <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          className="modal-scroll relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
          style={{
            background: '#1a1a25',
            border: `1px solid ${colorDim}`,
            boxShadow: `0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px ${colorDim}, 0 0 60px ${colorGlow}`,
          }}
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top accent bar */}
          <div
            style={{
              height: '2px',
              background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
              borderRadius: '2px 2px 0 0',
            }}
          />

          {/* Header */}
          <div
            className="sticky top-0 z-10 flex items-start justify-between gap-4 px-6 pt-5 pb-4"
            style={{
              background: '#1a1a25',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div className="flex items-start gap-3">
              {Icon && (
                <div
                  className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5"
                  style={{ background: colorGlow, border: `1px solid ${colorDim}` }}
                >
                  <Icon size={16} style={{ color }} strokeWidth={1.75} />
                </div>
              )}
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <p
                    className="font-mono text-xs tracking-widest uppercase"
                    style={{ color }}
                  >
                    {project.period}
                  </p>
                  <span
                    className="font-mono text-[10px] px-1.5 py-0.5 rounded-full border"
                    style={{ color, borderColor: colorDim, background: colorGlow }}
                  >
                    {meta?.tag}
                  </span>
                </div>
                <h2 className="font-display font-semibold text-white text-xl leading-snug">
                  {project.title}
                </h2>
              </div>
            </div>
            <button
              ref={closeRef}
              onClick={onClose}
              className="shrink-0 mt-0.5 p-1.5 rounded-lg text-text-secondary hover:text-white hover:bg-white/5 transition-colors duration-200"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          <div className="px-6 py-6 space-y-8">
            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col items-center text-center p-3 rounded-xl"
                  style={{
                    background: colorGlow,
                    border: `1px solid ${colorDim}`,
                  }}
                >
                  <span
                    className="font-mono font-bold text-xl leading-none"
                    style={{ color }}
                  >
                    {m.value}
                  </span>
                  <span className="font-body text-text-muted text-xs mt-1.5 leading-tight">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Narrative */}
            <div className="space-y-5">
              {[
                { label: 'Problem', text: project.problem },
                { label: 'Approach', text: project.approach },
                { label: 'Results', text: project.results },
              ].map(({ label, text }) => (
                <div key={label}>
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '2px',
                        background: color,
                        opacity: 0.7,
                        flexShrink: 0,
                      }}
                    />
                    <p
                      className="font-mono text-xs tracking-widest uppercase"
                      style={{ color }}
                    >
                      {label}
                    </p>
                  </div>
                  <p className="font-body text-text-secondary text-sm leading-relaxed pl-4">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Architecture */}
            <div>
              <p
                className="font-mono text-xs tracking-widest uppercase mb-4"
                style={{ color }}
              >
                Architecture
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {project.architectureSteps.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <div
                      className="px-3 py-2 rounded-lg font-body text-text-primary text-xs leading-snug text-center"
                      style={{
                        background: '#12121a',
                        border: `1px solid ${colorDim}`,
                      }}
                    >
                      {step}
                    </div>
                    {i < project.architectureSteps.length - 1 && (
                      <ArrowRight size={13} style={{ color, opacity: 0.5, flexShrink: 0 }} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div>
              <p
                className="font-mono text-xs tracking-widest uppercase mb-3"
                style={{ color }}
              >
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono border"
                    style={{ color, borderColor: colorDim, background: colorGlow }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div
              className="flex items-center gap-3 pt-2"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-body text-sm transition-all duration-200"
                  style={{
                    border: `1px solid ${colorDim}`,
                    color,
                    background: colorGlow,
                  }}
                >
                  <Github size={14} />
                  View on GitHub
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-body font-semibold text-sm transition-all duration-200"
                  style={{
                    background: color,
                    color: '#0a0a0f',
                  }}
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ProjectModal;
