import { useEffect, useRef } from 'react';

const TEAL  = [0, 229, 200];
const VIOLET = [167, 139, 250];

const MAX_DIST     = 170;
const HUB_FACTOR   = 1.45;
const NODE_COUNT   = 60;
const MAX_PULSES   = 7;
const PULSE_SPAWN_INTERVAL = 38; // frames

function NetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let raf;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Build nodes — first 6 are "hub" nodes (larger, slower, brighter)
    const nodes = Array.from({ length: NODE_COUNT }, (_, i) => {
      const isHub = i < 6;
      const isViolet = i % 9 === 0;
      return {
        x:       Math.random() * canvas.width,
        y:       Math.random() * canvas.height,
        vx:      (Math.random() - 0.5) * (isHub ? 0.18 : 0.38),
        vy:      (Math.random() - 0.5) * (isHub ? 0.18 : 0.38),
        r:       isHub ? 2.8 + Math.random() * 1.4 : 0.7 + Math.random() * 1.1,
        isHub,
        rgb:     isViolet ? VIOLET : TEAL,
        opacity: isHub ? 0.75 : 0.25 + Math.random() * 0.35,
      };
    });

    // Active pulses: a glowing dot travelling along an edge
    const pulses = [];

    let frame = 0;

    const tick = () => {
      frame++;
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // ── Move nodes ──────────────────────────────────────────
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -30) { n.x = -30; n.vx *= -1; }
        if (n.x > W + 30) { n.x = W + 30; n.vx *= -1; }
        if (n.y < -30) { n.y = -30; n.vy *= -1; }
        if (n.y > H + 30) { n.y = H + 30; n.vy *= -1; }
      }

      // ── Draw edges ──────────────────────────────────────────
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist2 = dx * dx + dy * dy;
          const threshold = (a.isHub || b.isHub) ? MAX_DIST * HUB_FACTOR : MAX_DIST;
          if (dist2 >= threshold * threshold) continue;

          const dist = Math.sqrt(dist2);
          const proximity = 1 - dist / threshold;
          const isSpecial = a.isHub || b.isHub;
          const alpha = proximity * (isSpecial ? 0.22 : 0.10);

          // Pick color based on node types
          const [r, g, b2] =
            a.rgb === VIOLET || b.rgb === VIOLET ? VIOLET : TEAL;

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${r},${g},${b2},${alpha})`;
          ctx.lineWidth = isSpecial ? 0.9 : 0.5;
          ctx.stroke();
        }
      }

      // ── Spawn pulses ────────────────────────────────────────
      if (frame % PULSE_SPAWN_INTERVAL === 0 && pulses.length < MAX_PULSES) {
        const candidates = [];
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist2 = dx * dx + dy * dy;
            const threshold = MAX_DIST * HUB_FACTOR;
            if (dist2 < threshold * threshold) {
              candidates.push([i, j]);
            }
          }
        }
        if (candidates.length) {
          const [i, j] = candidates[Math.floor(Math.random() * candidates.length)];
          // Prefer hub edges
          if (nodes[i].isHub || nodes[j].isHub || Math.random() < 0.3) {
            pulses.push({
              from: i,
              to:   j,
              t:    0,
              speed: 0.004 + Math.random() * 0.007,
              rgb:  nodes[i].rgb,
            });
          }
        }
      }

      // ── Draw pulses ─────────────────────────────────────────
      for (let k = pulses.length - 1; k >= 0; k--) {
        const p = pulses[k];
        p.t += p.speed;
        if (p.t > 1) { pulses.splice(k, 1); continue; }

        const from = nodes[p.from];
        const to   = nodes[p.to];
        const px   = from.x + (to.x - from.x) * p.t;
        const py   = from.y + (to.y - from.y) * p.t;
        const fade = Math.sin(p.t * Math.PI); // 0→1→0

        const [r, g, b2] = p.rgb;

        // Outer glow
        const grd = ctx.createRadialGradient(px, py, 0, px, py, 8);
        grd.addColorStop(0, `rgba(${r},${g},${b2},${0.5 * fade})`);
        grd.addColorStop(1, `rgba(${r},${g},${b2},0)`);
        ctx.beginPath();
        ctx.arc(px, py, 8, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b2},${0.95 * fade})`;
        ctx.fill();
      }

      // ── Draw nodes ──────────────────────────────────────────
      for (const n of nodes) {
        const [r, g, b2] = n.rgb;

        // Hub glow bloom
        if (n.isHub) {
          const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 6);
          grd.addColorStop(0, `rgba(${r},${g},${b2},0.18)`);
          grd.addColorStop(1, `rgba(${r},${g},${b2},0)`);
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r * 6, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }

        // Node core
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b2},${n.opacity})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
}

export default NetworkCanvas;
