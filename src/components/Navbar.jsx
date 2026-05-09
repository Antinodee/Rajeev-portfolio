import { useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useScrollSpy from '../hooks/useScrollSpy';

const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className="mx-auto px-6 md:px-10 h-16 flex items-center justify-between"
        style={{
          background: 'rgba(10,10,15,0.8)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          boxShadow: '0 1px 0 rgba(0,229,200,0.04)',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-1.5 font-display font-semibold text-white text-lg tracking-tight hover:text-accent transition-colors duration-200"
          aria-label="Scroll to top"
        >
          <span>Rajeev</span>
          <span
            className="text-accent"
            style={{ textShadow: '0 0 12px rgba(0,229,200,0.5)' }}
          >
            .
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className="relative px-4 py-2 rounded-lg font-body text-sm transition-colors duration-200"
                style={{ color: activeId === id ? '#00e5c8' : undefined }}
              >
                <span className={activeId === id ? '' : 'text-text-secondary hover:text-text-primary'}>
                  {label}
                </span>
                {activeId === id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: 'rgba(0,229,200,0.06)',
                      border: '1px solid rgba(0,229,200,0.15)',
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-secondary hover:text-accent transition-colors duration-200 p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden px-6 pb-6 pt-3 flex flex-col gap-1"
            style={{
              background: 'rgba(10,10,15,0.97)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg font-body text-base text-left transition-colors duration-200"
                style={{
                  color: activeId === id ? '#00e5c8' : undefined,
                  background: activeId === id ? 'rgba(0,229,200,0.06)' : undefined,
                }}
              >
                {activeId === id && (
                  <span
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: '#00e5c8',
                      flexShrink: 0,
                    }}
                  />
                )}
                <span className={activeId === id ? '' : 'text-text-secondary'}>
                  {label}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
