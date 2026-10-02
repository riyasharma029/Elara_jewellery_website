import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumb({ items, onNavigate, light = false }) {
  const textClass = light ? 'text-black/50' : 'text-[var(--elara-taupe)]';
  const activeClass = light ? 'text-black/80' : 'text-[var(--elara-taupe-light)]';

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 flex-wrap">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && (
                <ChevronRight
                  size={11}
                  className={textClass}
                  aria-hidden="true"
                />
              )}
              {isLast ? (
                <span
                  className={`text-label ${activeClass}`}
                  aria-current="page"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.12em' }}
                >
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => item.page && onNavigate && onNavigate(item.page)}
                  className={`text-label ${textClass} hover:${activeClass} transition-colors cursor-pointer bg-transparent border-none p-0`}
                  style={{ fontSize: '0.6rem', letterSpacing: '0.12em' }}
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
