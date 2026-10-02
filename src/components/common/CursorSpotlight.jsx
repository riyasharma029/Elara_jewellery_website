import React, { useState, useEffect, useRef } from 'react';

export default function CursorSpotlight() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e) => {
      el.style.left = e.clientX + 'px';
      el.style.top = e.clientY + 'px';
    };

    const show = () => { el.style.opacity = '1'; };
    const hide = () => { el.style.opacity = '0'; };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseenter', show);
    document.addEventListener('mouseleave', hide);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseenter', show);
      document.removeEventListener('mouseleave', hide);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="cursor-glow"
      style={{ opacity: 0, transition: 'opacity 0.3s ease, left 0.12s ease-out, top 0.12s ease-out' }}
      aria-hidden="true"
    />
  );
}
