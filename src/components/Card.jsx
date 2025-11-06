import React from 'react';
export default function Card({ title, actions, children, className='' }) {
  return (
    <div className={`bg-card rounded-2xl p-5 shadow-soft border border-white/5 ${className}`}>
      {(title || actions) && <div className="flex items-center justify-between mb-3">{title && <h3 className="text-lg font-semibold">{title}</h3>}{actions}</div>}
      {children}
    </div>
  );
}