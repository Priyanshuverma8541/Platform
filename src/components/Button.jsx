import React from 'react';
const base = 'inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium transition active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary/40';
const variants = { primary: 'bg-primary text-white hover:opacity-90', outline: 'border border-white/15 text-text hover:bg-white/10', ghost: 'text-text hover:bg-white/10' };
export default function Button({ variant='primary', className='', children, ...props }) {
  return <button className={base + ' ' + variants[variant] + ' ' + className} {...props}>{children}</button>;
}