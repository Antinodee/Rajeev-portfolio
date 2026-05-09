import { useState, useEffect } from 'react';

function useScrollSpy(sectionIds, options = {}) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const observers = [];

    const callback = (entries) => {
      // Find the entry that is most visible
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length > 0) {
        setActiveId(visible[0].target.id);
      }
    };

    const observerOptions = {
      rootMargin: options.rootMargin ?? '-20% 0px -60% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
      ...options,
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(callback, observerOptions);
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sectionIds, options.rootMargin]);

  return activeId;
}

export default useScrollSpy;
