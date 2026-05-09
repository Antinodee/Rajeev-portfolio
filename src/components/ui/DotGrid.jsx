function DotGrid({ hero = false }) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Fine dot grid — slow drift */}
      <div
        className="animate-dot-drift"
        style={{
          position: 'absolute',
          inset: '-10%',
          width: '120%',
          height: '120%',
          backgroundImage: 'radial-gradient(circle, rgba(0,229,200,0.55) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.09,
        }}
      />

      {/* Coarser grid for depth */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(0,229,200,0.8) 1.5px, transparent 1.5px)',
          backgroundSize: '84px 84px',
          opacity: 0.055,
        }}
      />

      {/* Horizontal accent lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(0deg, rgba(0,229,200,0.025) 1px, transparent 1px)',
          backgroundSize: '100% 84px',
        }}
      />

      {hero && (
        <>
          {/* Main orb — top right */}
          <div
            className="blob-1"
            style={{
              position: 'absolute',
              top: '-8%',
              right: '-8%',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(0,229,200,0.10) 0%, rgba(0,229,200,0.04) 40%, transparent 70%)',
            }}
          />
          {/* Secondary orb — bottom left */}
          <div
            className="blob-2"
            style={{
              position: 'absolute',
              bottom: '-12%',
              left: '-8%',
              width: '480px',
              height: '480px',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(0,229,200,0.07) 0%, transparent 65%)',
            }}
          />
          {/* Tertiary orb — center slight left */}
          <div
            className="blob-3"
            style={{
              position: 'absolute',
              top: '30%',
              left: '15%',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 65%)',
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
                'linear-gradient(90deg, transparent 0%, rgba(0,229,200,0.0) 10%, rgba(0,229,200,0.18) 50%, rgba(0,229,200,0.0) 90%, transparent 100%)',
            }}
          />
        </>
      )}

      {/* Edge vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 30%, #0a0a0f 100%)',
        }}
      />
    </div>
  );
}

export default DotGrid;
