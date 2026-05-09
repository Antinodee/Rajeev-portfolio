function SectionHeading({ number, title, subtitle }) {
  return (
    <div className="mb-14">
      {/* Number with accent line */}
      <div className="flex items-center gap-3 mb-3">
        <div
          style={{
            width: '32px',
            height: '1.5px',
            background: 'linear-gradient(90deg, rgba(0,229,200,0.8), rgba(0,229,200,0.2))',
          }}
        />
        <span className="font-mono text-accent text-xs tracking-[0.2em] uppercase opacity-90">
          {number}
        </span>
      </div>

      {/* Title */}
      <h2 className="font-display font-bold text-white text-4xl md:text-5xl leading-tight tracking-tight">
        {title}
      </h2>

      {/* Accent underline */}
      <div
        className="mt-3"
        style={{
          width: '48px',
          height: '2px',
          background: 'linear-gradient(90deg, #00e5c8, rgba(0,229,200,0.2))',
          borderRadius: '1px',
        }}
      />

      {subtitle && (
        <p className="font-body text-text-secondary mt-4 text-base max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
