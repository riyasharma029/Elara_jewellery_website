import React, { useEffect, useCallback } from 'react';
import { X, ZoomIn } from 'lucide-react';

export default function Lightbox({ image, alt, onClose }) {
  const handleKeyDown = useCallback(
    (e) => { if (e.key === 'Escape') onClose(); },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Full size image: ${alt}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'lightboxFadeIn 0.35s cubic-bezier(0.25,0.1,0.25,1) both',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10,9,8,0.94)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          cursor: 'zoom-out',
        }}
        aria-hidden="true"
      />

      {/* Gold corner accents */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
        <div style={{ position: 'absolute', top: 32, left: 32, width: 28, height: 28,
          borderTop: '1px solid rgba(201,169,110,0.4)', borderLeft: '1px solid rgba(201,169,110,0.4)' }} />
        <div style={{ position: 'absolute', top: 32, right: 32, width: 28, height: 28,
          borderTop: '1px solid rgba(201,169,110,0.4)', borderRight: '1px solid rgba(201,169,110,0.4)' }} />
        <div style={{ position: 'absolute', bottom: 32, left: 32, width: 28, height: 28,
          borderBottom: '1px solid rgba(201,169,110,0.4)', borderLeft: '1px solid rgba(201,169,110,0.4)' }} />
        <div style={{ position: 'absolute', bottom: 32, right: 32, width: 28, height: 28,
          borderBottom: '1px solid rgba(201,169,110,0.4)', borderRight: '1px solid rgba(201,169,110,0.4)' }} />
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        style={{
          position: 'absolute', top: 24, right: 24, zIndex: 10,
          width: 44, height: 44,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(26,24,21,0.85)',
          border: '1px solid rgba(201,169,110,0.25)',
          color: 'var(--elara-ivory)',
          cursor: 'pointer',
          transition: 'border-color 0.3s ease, color 0.3s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(201,169,110,0.7)';
          e.currentTarget.style.color = 'var(--elara-gold)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(201,169,110,0.25)';
          e.currentTarget.style.color = 'var(--elara-ivory)';
        }}
      >
        <X size={18} strokeWidth={1.5} />
      </button>

      {/* Image container */}
      <div
        style={{
          position: 'relative', zIndex: 2,
          maxWidth: 'min(82vw, 760px)',
          maxHeight: '82vh',
          animation: 'lightboxImageIn 0.45s cubic-bezier(0.25,0.1,0.25,1) both',
        }}
      >
        {/* Gold frame */}
        <div style={{
          position: 'absolute', inset: -1,
          border: '1px solid rgba(201,169,110,0.18)',
          pointerEvents: 'none', zIndex: 1,
        }} />

        <img
          src={image}
          alt={alt}
          style={{
            display: 'block',
            maxWidth: '100%',
            maxHeight: '82vh',
            objectFit: 'contain',
            boxShadow: '0 40px 120px rgba(0,0,0,0.7)',
          }}
        />

        {/* Caption bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '0.75rem 1.25rem',
          background: 'linear-gradient(to top, rgba(10,9,8,0.82) 0%, transparent 100%)',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
        }}>
          <ZoomIn size={10} strokeWidth={1.5} style={{ color: 'var(--elara-gold)', flexShrink: 0, opacity: 0.7 }} />
          <p style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '0.575rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--elara-taupe-light)',
          }}>
            {alt}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes lightboxFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lightboxImageIn {
          from { opacity: 0; transform: scale(0.95) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
