import { useState, useEffect, useRef } from 'react';

function parseValue(val) {
  const str = String(val).trim();
  const match = str.match(/^([~$<>≈]*)(\d[\d,.]*)(.*)$/);
  if (!match) return null;
  const num = parseFloat(match[2].replace(/,/g, ''));
  if (isNaN(num)) return null;
  return {
    prefix: match[1],
    num,
    suffix: match[3],
    hasDecimal: match[2].includes('.'),
    hasComma: match[2].includes(','),
  };
}

function formatNum(parsed, progress) {
  const current = parsed.num * progress;
  let n;
  if (parsed.hasDecimal) {
    n = current.toFixed(1);
  } else if (parsed.hasComma) {
    n = Math.round(current).toLocaleString();
  } else {
    n = String(Math.round(current));
  }
  return parsed.prefix + n + parsed.suffix;
}

function useCountUp(targetValue, duration = 1200) {
  const parsed = useRef(parseValue(targetValue));
  const initial = parsed.current
    ? parsed.current.prefix + '0' + parsed.current.suffix
    : targetValue;

  const [display, setDisplay] = useState(initial);
  const hasRun = useRef(false);
  const elRef = useRef(null);

  useEffect(() => {
    if (!parsed.current) return;
    const el = elRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return;
        hasRun.current = true;

        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - t, 3);
          setDisplay(formatNum(parsed.current, ease));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [duration]);

  return [display, elRef];
}

export default useCountUp;
